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

## Extra configs
### `@auvred/eslint-config/pnpm-workspace`

This config is intended to be used in monorepositories based on [`pnpm`](https://github.com/pnpm/pnpm)

It finds `pnpm-workspace.yml` in the root of the project, resolves the packages listed there and puts:
- found tsconfigs to the [typescript imports resolver](https://github.com/import-js/eslint-import-resolver-typescript) in the [`import/resolver`](https://github.com/import-js/eslint-plugin-import#importresolver) 
- project package names scope to the [`import/internal-regex`](https://github.com/import-js/eslint-plugin-import#importinternal-regex)
```json
{
  "extends": ["@auvred", "@auvred/eslint-config/pnpm-workspace"]
}
```

## License
MIT
