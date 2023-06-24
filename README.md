# @auvred/eslint-config

> Some code snippets were taken from these awesome repos: [`@so1ve/eslint-config`](https://github.com/so1ve/eslint-config), [`@antfu/eslint-config`](https://github.com/antfu/eslint-config)

## Features
- Single quotes, no semi, trailing commas
- Formatting with [Prettier](https://github.com/prettier/prettier) and [Vue Prettier](https://github.com/meteorlxy/eslint-plugin-prettier-vue)
- Typescript and Vue support out-of-box
- Sortable imports
- Lint also for json, yaml, markdown

## Usage
### Install
```
pnpm add -D @auvred/eslint-config eslint prettier
```

### Config `.eslintrc`
```json
{
  "extends": "@auvred"
}
```
> You don't need .eslintignore normally as it has been provided by the preset.

### Some must have settings
To help [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import) properly work with typescript paths, etc., list all tsconfigs for [`eslint-import-resolver-typescript`](https://github.com/import-js/eslint-import-resolver-typescript)

If you're using `"references"` in some tsconfig, you should include referenced tsconfigs to this list too
```json
{
  "settings": {
    "import/resolver": {
      "typescript": {
        "project": [
          "tsconfig.json",
          "packages/*/tsconfig.json",
          "packages/*/tsconfig.referenced.json"
        ]
      }
    }
  }
}
```

For monorepos, it's recommended to [specify a package scope](https://github.com/import-js/eslint-plugin-import#importinternal-regex). This will allow to split and move internal imports to separated import group
```json
{
  "settings": {
    "import/internal-regex": "^@your-package-scope/"
  }
}
```

## License
MIT
