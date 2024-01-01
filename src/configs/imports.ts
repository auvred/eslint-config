import { pluginImport } from '../plugin-imports'

import type { FlatConfigItem, ImportsOptionsOverrides } from '../types'

export function imports({
  overrides,
  internalRegex,
}: ImportsOptionsOverrides = {}): FlatConfigItem[] {
  const config: FlatConfigItem[] = [
    {
      plugins: {
        import: pluginImport,
      },
      rules: {
        'import/export': 'error',
        'import/no-empty-named-blocks': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-absolute-path': 'error',
        'import/no-self-import': 'error',
        'import/no-useless-path-segments': [
          'error',
          {
            noUselessIndex: true,
          },
        ],
        'import/no-webpack-loader-syntax': 'error',
        'import/first': 'error',
        'import/newline-after-import': [
          'error',
          { count: 1, considerComments: true },
        ],
        'import/no-duplicates': 'error',
        'import/no-named-default': 'error',
        // ignoreDeclarationSort because it conflicts with import/order
        'sort-imports': ['error', { ignoreDeclarationSort: true }],
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
              'object',
              'type',
            ],
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
            'newlines-between': 'always',
          },
        ],

        'import/no-unresolved': 'error',

        ...overrides,
      },
    },
  ]

  if (internalRegex) {
    config.push({
      settings: {
        'import/internal-regex': internalRegex,
      },
    })
  }

  return config
}
