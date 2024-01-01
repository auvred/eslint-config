import pluginTs from '@typescript-eslint/eslint-plugin'
import parserTs from '@typescript-eslint/parser'

import { GLOB_TS, GLOB_TSX, GLOB_VUE } from '../globs'
import { autoRenameRules } from '../utils'

import type { OptionsOverrides } from '../types'
import type { FlatConfigItem } from '../types'

export function typescript({
  overrides,
}: OptionsOverrides = {}): FlatConfigItem[] {
  return [
    {
      plugins: {
        ts: pluginTs,
      },
    },
    {
      files: [GLOB_TS, GLOB_TSX],
      languageOptions: {
        parser: parserTs,
      },
    },
    {
      files: [GLOB_TS, GLOB_TSX, GLOB_VUE],
      rules: {
        'import/no-unresolved': 'off',

        ...autoRenameRules(
          pluginTs.configs['eslint-recommended']!.overrides![0]!.rules!,
        ),
        ...autoRenameRules(pluginTs.configs.recommended!.rules!),

        // handled by unused-imports
        'ts/no-unused-vars': 'off',

        'ts/adjacent-overload-signatures': 'error',
        'ts/consistent-type-assertions': [
          'error',
          {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'allow-as-parameter',
          },
        ],
        'ts/consistent-type-definitions': ['error', 'interface'],
        'ts/consistent-type-imports': 'error',
        'default-param-last': 'off',
        'ts/default-param-last': 'error',
        'ts/explicit-function-return-type': 'error',
        'ts/explicit-module-boundary-types': 'error',
        'ts/method-signature-style': 'error',
        'ts/no-dynamic-delete': 'error',
        'ts/no-empty-interface': 'error',
        'ts/no-inferrable-types': 'error',
        'ts/no-invalid-void-type': 'error',
        'no-loop-func': 'off',
        'ts/no-loop-func': 'error',
        'ts/no-non-null-asserted-nullish-coalescing': 'error',
        'no-shadow': 'off',
        'ts/no-shadow': 'error',
        'no-useless-constructor': 'off',
        'ts/no-useless-constructor': 'error',
        'ts/no-useless-empty-export': 'error',
        'ts/prefer-for-of': 'error',
        'ts/prefer-function-type': 'error',
        'ts/prefer-ts-expect-error': 'error',
        'ts/unified-signatures': 'error',

        ...overrides,
      },
    },
  ]
}
