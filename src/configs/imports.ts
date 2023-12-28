import pluginImport from 'eslint-plugin-i'

import type { FlatESLintConfig } from 'eslint-define-config'

export function imports(): FlatESLintConfig[] {
  return [
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
      },
    },
  ]
}
