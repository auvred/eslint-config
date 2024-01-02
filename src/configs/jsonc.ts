import pluginJsonc from 'eslint-plugin-jsonc'
import parserJsonc from 'jsonc-eslint-parser'

import { GLOB_JSON, GLOB_PACKAGEJSON, GLOB_TSCONFIG } from '../globs'

import type { FlatConfigItem } from '../types'

export function jsonc(): FlatConfigItem[] {
  return [
    {
      plugins: {
        jsonc: pluginJsonc,
      },
    },
    {
      files: [GLOB_JSON],
      languageOptions: {
        parser: parserJsonc,
      },
    },
    {
      files: [GLOB_PACKAGEJSON],
      rules: {
        'jsonc/sort-array-values': [
          'error',
          {
            order: { type: 'asc' },
            pathPattern: '^files$',
          },
        ],
        'jsonc/sort-keys': [
          'error',
          {
            order: [
              'publisher',
              'name',
              'displayName',
              'type',
              'version',
              'private',
              'packageManager',
              'description',
              'author',
              'license',
              'funding',
              'homepage',
              'repository',
              'bugs',
              'keywords',
              'categories',
              'sideEffects',
              'exports',
              'main',
              'module',
              'unpkg',
              'jsdelivr',
              'types',
              'typesVersions',
              'bin',
              'icon',
              'files',
              'engines',
              'activationEvents',
              'contributes',
              'scripts',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'optionalDependencies',
              'devDependencies',
              'pnpm',
              'publishConfig',
              'overrides',
              'resolutions',
              'husky',
              'simple-git-hooks',
              'lint-staged',
              'eslintConfig',
            ],
            pathPattern: '^$',
          },
          {
            order: { type: 'asc' },
            pathPattern:
              '^(?:dev|peer|optional|bundled)?[Dd]ependencies(Meta)?$',
          },
          {
            order: { type: 'asc' },
            pathPattern: '^(?:resolutions|overrides|pnpm.overrides)$',
          },
          {
            order: { type: 'asc' },
            pathPattern: '^exports$',
          },
          {
            order: ['types', 'import', 'require', 'default'],
            pathPattern: '^exports.*$',
          },
        ],
      },
    },
    {
      files: [...GLOB_TSCONFIG],
      rules: {
        'jsonc/sort-array-values': [
          'error',
          {
            order: { type: 'asc' },
            pathPattern: '^(?:include|exclude|files)$',
          },
        ],
        'jsonc/sort-keys': [
          'error',
          {
            order: [
              'extends',
              'include',
              'exclude',
              'files',
              'compilerOptions',
              'references',
            ],
            pathPattern: '^$',
          },
          {
            order: [
              /* Type Checking */
              'allowUnreachableCode',
              'allowUnusedLabels',
              'alwaysStrict',
              'exactOptionalPropertyTypes',
              'noFallthroughCasesInSwitch',
              'noImplicitAny',
              'noImplicitOverride',
              'noImplicitReturns',
              'noImplicitThis',
              'noPropertyAccessFromIndexSignature',
              'noUncheckedIndexedAccess',
              'noUnusedLocals',
              'noUnusedParameters',
              'strict',
              'strictBindCallApply',
              'strictFunctionTypes',
              'strictNullChecks',
              'strictPropertyInitialization',
              'useUnknownInCatchVariables',

              /* Modules */
              'allowArbitraryExtensions',
              'allowImportingTsExtensions',
              'allowUmdGlobalAccess',
              'baseUrl',
              'customConditions',
              'module',
              'moduleResolution',
              'moduleSuffixes',
              'noResolve',
              'paths',
              'resolveJsonModule',
              'resolvePackageJsonExports',
              'resolvePackageJsonImports',
              'rootDir',
              'rootDirs',
              'typeRoots',
              'types',

              /* Emit */
              'declaration',
              'declarationDir',
              'declarationMap',
              'downlevelIteration',
              'emitBOM',
              'emitDeclarationOnly',
              'importHelpers',
              'importsNotUsedAsValues',
              'inlineSourceMap',
              'inlineSources',
              'mapRoot',
              'newLine',
              'noEmit',
              'noEmitHelpers',
              'noEmitOnError',
              'outDir',
              'outFile',
              'preserveConstEnums',
              'preserveValueImports',
              'removeComments',
              'sourceMap',
              'sourceRoot',
              'stripInternal',

              /* JavaScript Support */
              'allowJs',
              'checkJs',
              'maxNodeModuleJsDepth',

              /* Interop Constraints */
              'allowSyntheticDefaultImports',
              'esModuleInterop',
              'forceConsistentCasingInFileNames',
              'isolatedModules',
              'preserveSymlinks',
              'verbatimModuleSyntax',

              /* Backwards Compatibility */
              'charset',
              'keyofStringsOnly',
              'noImplicitUseStrict',
              'noStrictGenericChecks',
              'out',
              'suppressExcessPropertyErrors',
              'suppressImplicitAnyIndexErrors',

              /* Language and Environment */
              'emitDecoratorMetadata',
              'experimentalDecorators',
              'jsx',
              'jsxFactory',
              'jsxFragmentFactory',
              'jsxImportSource',
              'lib',
              'moduleDetection',
              'noLib',
              'reactNamespace',
              'target',
              'useDefineForClassFields',

              /* Completeness */
              'skipDefaultLibCheck',
              'skipLibCheck',

              /* Projects */
              'composite',
              'disableReferencedProjectLoad',
              'disableSolutionSearching',
              'disableSourceOfProjectReferenceRedirect',
              'incremental',
              'tsBuildInfoFile',

              /* Output Formatting */
              'noErrorTruncation',
              'preserveWatchOutput',
              'pretty',

              /* Compiler Diagnostics */
              'diagnostics',
              'explainFiles',
              'extendedDiagnostics',
              'generateCpuProfile',
              'listEmittedFiles',
              'listFiles',
              'traceResolution',

              /* Editor Support */
              'disableSizeLimit',
              'plugins',

              /* Watch Options */
              'assumeChangesOnlyAffectDirectDependencies',
            ],
            pathPattern: '^compilerOptions$',
          },
        ],
      },
    },
  ]
}
