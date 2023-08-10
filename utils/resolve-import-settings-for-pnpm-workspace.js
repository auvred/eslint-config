const fs = require('node:fs')
const path = require('node:path')

const { sync: fastGlob } = require('fast-glob')
const { sync: findUp } = require('find-up')
const yaml = require('js-yaml')

function readPnpmWorkspaceManifest(manifestPath) {
  const rawPnpmWorkspaceManifest = fs.readFileSync(manifestPath, 'utf-8')

  try {
    return yaml.load(rawPnpmWorkspaceManifest)
  } catch (e) {
    console.warn(
      `[@auvred/eslint-config] NOTICE: error while parsing pnpm workspace manifest (${manifestPath}):`,
    )
    console.warn(e.message)
    throw e
  }
}

module.exports = () => {
  const pnpmWorkspaceManifestPath = findUp([
    'pnpm-workspace.yaml',
    'pnpm-workspace.yml',
  ])
  if (!fs.existsSync(pnpmWorkspaceManifestPath)) {
    return
  }
  const pnpmWorkspacePath = path.dirname(pnpmWorkspaceManifestPath)

  let pnpmWorkspaceManifest

  try {
    pnpmWorkspaceManifest = readPnpmWorkspaceManifest(pnpmWorkspaceManifestPath)
  } catch {
    return
  }

  if (
    !pnpmWorkspaceManifest.packages ||
    !Array.isArray(pnpmWorkspaceManifest.packages)
  ) {
    return
  }

  const entryGlobPatterns = ['tsconfig.json', 'tsconfig.*.json']
  for (const packageGlob of pnpmWorkspaceManifest.packages) {
    entryGlobPatterns.push(
      ...['tsconfig.json', 'tsconfig.*.json', 'package.json'].map(f =>
        packageGlob.replace(/\/?$/, '/' + f),
      ),
    )
  }

  const foundEntries = fastGlob(entryGlobPatterns, {
    ignore: ['**/node_modules/**', '**/bower_components/**'],
    cwd: pnpmWorkspacePath,
  })

  const packageJsonPaths = []
  const tsconfigPaths = []

  for (const entryPath of foundEntries) {
    const normalizedPath = path.normalize(entryPath)

    if (normalizedPath.endsWith('package.json')) {
      packageJsonPaths.push(normalizedPath)
    } else {
      tsconfigPaths.push(normalizedPath)
    }
  }

  let internalPackageScopes = new Set()
  for (const packageJsonPath of packageJsonPaths) {
    try {
      const { name } = JSON.parse(
        fs.readFileSync(path.join(pnpmWorkspacePath, packageJsonPath), 'utf-8'),
      )

      if (!name || typeof name !== 'string') {
        continue
      }

      const slashIndex = name.indexOf('/')
      if (name.startsWith('@') && slashIndex > 0) {
        internalPackageScopes.add(name.slice(1, slashIndex))
      }
    } catch {
      //
    }
  }

  const settings = {}

  if (tsconfigPaths.length) {
    settings['import/resolver'] = {
      typescript: {
        project: tsconfigPaths,
      },
    }
  }

  internalPackageScopes = Array.from(internalPackageScopes)
  if (internalPackageScopes.length) {
    const joined = internalPackageScopes.join('|')

    settings['import/internal-regex'] = `^@(${joined})/`
  }

  return settings
}
