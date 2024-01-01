import { GLOB_JSTS, GLOB_VUE } from '../globs'
import { pluginPerfectionist } from '../plugin-imports'

import type { FlatConfigItem } from '../types'

export function perfectionist(): FlatConfigItem[] {
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
