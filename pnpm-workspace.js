const { resolveImportSettingsForPnpmWorkspace } = require('./utils')

/** @type {import('eslint').ESLint.ConfigData} */
const config = {
  settings: {
    ...resolveImportSettingsForPnpmWorkspace(),
  },
}

module.exports = config
