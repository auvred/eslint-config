import { pluginUnicorn } from '../plugins'

import type { FlatESLintConfig } from 'eslint-define-config'

export function unicorn(): FlatESLintConfig[] {
  return [
    {
      plugins: {
        unicorn: pluginUnicorn,
      },
      rules: {
        'unicorn/better-regex': 'error',
        'unicorn/consistent-function-scoping': 'error',
        'unicorn/custom-error-definition': 'error',
        'unicorn/error-message': 'error',
        'unicorn/escape-case': 'error',
        'unicorn/explicit-length-check': 'error',
        'unicorn/no-array-for-each': 'error',
        'unicorn/no-array-push-push': 'error',
        'unicorn/no-console-spaces': 'error',
        'unicorn/no-instanceof-array': 'error',
        'unicorn/no-lonely-if': 'error',
        'unicorn/no-negated-condition': 'error',
        'unicorn/no-useless-fallback-in-spread': 'error',
        'unicorn/no-useless-length-check': 'error',
        'unicorn/no-useless-promise-resolve-reject': 'error',
        'unicorn/no-useless-switch-case': 'error',
        'unicorn/no-zero-fractions': 'error',
        'unicorn/prefer-array-find': 'error',
        'unicorn/prefer-array-flat': 'error',
        'unicorn/prefer-array-flat-map': 'error',
        'unicorn/prefer-array-index-of': 'error',
        'unicorn/prefer-array-some': 'error',
        'unicorn/prefer-at': 'error',
        'unicorn/prefer-date-now': 'error',
        'unicorn/prefer-modern-dom-apis': 'error',
        'unicorn/prefer-modern-math-apis': 'error',
        'unicorn/prefer-node-protocol': 'error',
        'unicorn/prefer-number-properties': 'error',
        'unicorn/prefer-string-replace-all': 'error',
        'unicorn/prefer-string-slice': 'error',
        'unicorn/prefer-string-starts-ends-with': 'error',
        'unicorn/prefer-string-trim-start-end': 'error',
        'unicorn/prefer-switch': 'error',
        'unicorn/template-indent': [
          'error',
          {
            tags: ['outdent', 'dedent', 'gql', 'sql', 'html', 'styled'],
            functions: ['dedent', 'stripIndent'],
            selectors: [],
            comments: ['HTML', 'indent'],
          },
        ],
        'unicorn/throw-new-error': 'error',
      },
    },
  ]
}
