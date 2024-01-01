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
    interopDefault(import('eslint-config-flat-gitignore')).then(r => [r()]),
    ignores(),
    imports(),
    javascript(),
    jsonc(),
    node(),
    typescript(),
    unicorn(),
    vue(),
    perfectionist(),
    markdown(),
    format(),
  ]

  return (await Promise.all(configs)).flat()
}
