# @auvred/eslint-config

> Some code snippets were taken from these awesome repos: [`@so1ve/eslint-config`](https://github.com/so1ve/eslint-config), [`@antfu/eslint-config`](https://github.com/antfu/eslint-config)

## Features

- Single quotes, no semi, trailing commas
- Formatting with [Prettier](https://github.com/prettier/prettier)
- Typescript and Vue support out-of-box
- Sortable imports
- Lint also for html, json, yaml, markdown

## Usage

### Install

```
pnpm add -D @auvred/eslint-config eslint prettier
```

### Config `.eslintrc`

```jsonc
{
  // don't forget to mark the root config as root
  "root": true,
  "extends": "@auvred"
}
```

> You don't need .eslintignore normally as it has been provided by the preset.

## Extra configs

### `@auvred/eslint-config/pnpm-workspace`

This config is intended to be used in monorepositories based on [`pnpm`](https://github.com/pnpm/pnpm)

It finds `pnpm-workspace.yaml` in the root of the project, resolves the packages listed there and puts:

- found tsconfigs to the [typescript imports resolver](https://github.com/import-js/eslint-import-resolver-typescript) in the [`import/resolver`](https://github.com/import-js/eslint-plugin-import#importresolver)
- project package names scope to the [`import/internal-regex`](https://github.com/import-js/eslint-plugin-import#importinternal-regex)

```jsonc
{
  "extends": ["@auvred", "@auvred/eslint-config/pnpm-workspace"]
}
```

## Configure your editor

### coc.nvim

Install [`coc-eslint`](https://github.com/neoclide/coc-eslint) extension

```jsonc
{
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
  ]
}
```

> It's better to put these settings to workspace settings (`.vim/coc-settings.json`)

### VS Code

Install [`dbaeumer.vscode-eslint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension

```jsonc
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.addMissingImports": true,
    "source.fixAll.eslint": true,
    "source.organizeImports": false
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
  ]
}
```

> It's better to put these settings to workspace settings (`.vscode/settings.json`)

### JetBrains IDEs

> If you're working on project with eslint >= 8.23.0, it'd be better to update your IDE to version >= 2022.2.2 because of [this issue](https://youtrack.jetbrains.com/issue/WEB-57089/ESLint8.23-TypeError-this.libOptions.parse-is-not-a-function)

1. Open ESLint settings ([docs](https://www.jetbrains.com/help/webstorm/eslint.html#ws_eslint_configure_scope))
2. Set linting scope to `{**/*,*}.{js,jsx,ts,tsx,vue,html,md,json,jsonc,yaml,yml}`

## License

MIT
