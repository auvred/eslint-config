import {
  format,
  ignores,
  imports,
  javascript,
  jsonc,
  node,
  typescript,
  unicorn,
  vue,
} from './configs'

import type { Awaitable } from './utils'
import type { FlatESLintConfig } from 'eslint-define-config'

export async function auvred(): Promise<FlatESLintConfig[]> {
  const configs: Awaitable<FlatESLintConfig[]>[] = [
    [
      {
        linterOptions: {
          reportUnusedDisableDirectives: true,
        },
      },
    ],
    ignores(),
    format(),
    imports(),
    javascript(),
    jsonc(),
    node(),
    typescript(),
    unicorn(),
    vue(),
  ]

  return (await Promise.all(configs)).flat()
}
