import { GLOB_JSTS, GLOB_VUE } from '../globs'
import { pluginPerfectionist } from '../plugin-imports'

import type { FlatESLintConfig } from 'eslint-define-config'

export function perfectionist(): FlatESLintConfig[] {
  return [
    {
      plugins: {
        perfectionist: pluginPerfectionist,
      },
    },
    {
      files: [GLOB_JSTS, GLOB_VUE],
      rules: {
        'perfectionist/sort-named-exports': 'error',
      },
    },
  ]
}
