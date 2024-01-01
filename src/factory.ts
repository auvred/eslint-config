import { isPackageExists } from 'local-pkg'

import {
  format,
  ignores,
  imports,
  javascript,
  jsonc,
  markdown,
  node,
  perfectionist,
  typescript,
  unicorn,
  vue,
} from './configs'
import { type Awaitable, interopDefault } from './utils'

import type { Options, OptionsOverrides } from './types'
import type { FlatESLintConfig } from 'eslint-define-config'

export async function auvred(
  options: Options = {},
): Promise<FlatESLintConfig[]> {
  const {
    vue: enableVue = ['vue', 'nuxt', 'vitepress', '@slidev/cli'].some(i =>
      isPackageExists(i),
    ),
    typescript: enableTypeScript = isPackageExists('typescript'),
  } = options

  const configs: Awaitable<FlatESLintConfig[]>[] = [
    [
      {
        linterOptions: {
          reportUnusedDisableDirectives: true,
        },
      },
    ],
    interopDefault(import('eslint-config-flat-gitignore')).then(r => [r()]),
    ignores(),
    imports(),
    javascript(),
    jsonc(),
    node(),
    unicorn(),
    perfectionist(),
    markdown(),
    format(),
  ]

  if (enableVue) {
    configs.push(
      vue({
        overrides: getOverrides(options, 'vue'),
      }),
    )
  }

  if (enableTypeScript) {
    configs.push(
      typescript({
        overrides: getOverrides(options, 'typescript'),
      }),
    )
  }

  return (await Promise.all(configs)).flat()
}

function getOverrides<K extends keyof Options>(
  options: Options,
  key: K,
): OptionsOverrides['overrides'] {
  const value = options[key]

  if (typeof value === 'boolean') {
    return {}
  }

  return {
    ...value?.overrides,
  }
}
