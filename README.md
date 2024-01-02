# @auvred/eslint-config

> Partially based on these awesome configs: [`@so1ve/eslint-config`](https://github.com/so1ve/eslint-prettier-config), [`@antfu/eslint-config`](https://github.com/antfu/eslint-config)

## Features

- Single quotes, no semi, trailing commas
- Formatting with [Prettier](https://github.com/prettier/prettier)
- Typescript and Vue support out-of-box
- Sortable imports

## Usage

### Install

```
pnpm add -D @auvred/eslint-config eslint prettier
```

### Config `eslint.config.js`

In ESM projects:

```js
import { auvred } from '@auvred/eslint-config'

export default auvred()
```

In CJS projects:

```js
module.exports = (async () => {
  const { auvred } = await import('@auvred/eslint-config')

  return auvred()
})()
```

## Configure your editor

### VS Code

Install [`dbaeumer.vscode-eslint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension

```json
{
  "eslint.experimental.useFlatConfig": true,
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml"
  ],
  "eslint.rules.customizations": [
    { "rule": "auvred/prettier", "severity": "off" }
  ]
}
```

> It's better to put these settings to workspace settings (`.vscode/settings.json`)

### coc.nvim

Install [`coc-eslint`](https://github.com/neoclide/coc-eslint) extension

```json
{
  "eslint.experimental.useFlatConfig": true,
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml"
  ],
  "eslint.rules.customizations": [
    { "rule": "auvred/prettier", "severity": "off" }
  ]
}
```

> It's better to put these settings to workspace settings (`.vim/coc-settings.json`)

### JetBrains IDEs

> If you're working on project with eslint >= 8.23.0, it'd be better to update your IDE to version >= 2022.2.2 because of [this issue](https://youtrack.jetbrains.com/issue/WEB-57089/ESLint8.23-TypeError-this.libOptions.parse-is-not-a-function)

1. Open ESLint settings ([docs](https://www.jetbrains.com/help/webstorm/eslint.html#ws_eslint_configure_scope))
2. Set linting scope to `{**/*,*}.{js,jsx,ts,tsx,vue,html,md,json,jsonc,yaml,yml}`

## License

MIT
