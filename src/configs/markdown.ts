import { mergeProcessors, processorPassThrough } from 'eslint-merge-processors'
import * as parserPlain from 'eslint-parser-plain'

import {
  GLOB_JSTS_IN_MD,
  GLOB_MD,
  GLOB_MD_IN_MD,
  GLOB_VUE_IN_MD,
} from '../globs'
import { pluginMarkdown } from '../plugin-imports'

import type { FlatESLintConfig } from 'eslint-define-config'

export async function markdown(): Promise<FlatESLintConfig[]> {
  return [
    {
      files: [GLOB_MD],
      ignores: [GLOB_MD_IN_MD],
      processor: mergeProcessors([
        pluginMarkdown.processors.markdown,
        processorPassThrough,
      ]),
    },
    {
      files: [GLOB_MD],
      languageOptions: {
        parser: parserPlain,
      },
    },
    {
      files: [GLOB_JSTS_IN_MD, GLOB_VUE_IN_MD],
      rules: {
        'import/newline-after-import': 'off',

        'no-console': 'off',
        'no-lone-blocks': 'off',
        'no-restricted-syntax': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-labels': 'off',
        'no-unused-vars': 'off',

        'node/prefer-global/process': 'off',

        'ts/consistent-type-imports': 'off',
        'ts/no-namespace': 'off',
        'ts/no-redeclare': 'off',
        'ts/no-require-imports': 'off',
        'ts/no-unused-vars': 'off',
        'ts/no-use-before-define': 'off',
        'ts/no-var-requires': 'off',

        'unused-imports/no-unused-imports': 'off',
        'unused-imports/no-unused-vars': 'off',

        'import/no-unresolved': 'off',
      },
    },
  ]
}
