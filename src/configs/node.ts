import { pluginNode } from '../plugin-imports'

import type { FlatConfigItem } from '../types'

export function node(): FlatConfigItem[] {
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
        'node/prefer-global/buffer': ['error', 'never'],
        'node/prefer-global/console': ['error', 'always'],
        'node/prefer-global/process': ['error', 'never'],
        'node/process-exit-as-throw': 'error',
      },
    },
  ]
}
