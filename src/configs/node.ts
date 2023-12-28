// @ts-expect-error - missing types
import pluginNode from 'eslint-plugin-n'

import type { FlatESLintConfig } from 'eslint-define-config'

export function node(): FlatESLintConfig[] {
  return [
    {
      plugins: {
        node: pluginNode,
      },
    },
    {
      rules: {
        'node/no-deprecated-api': 'error',
        'node/no-exports-assign': 'error',
        'node/no-new-require': 'error',
        'node/no-path-concat': 'error',
      },
    },
  ]
}
