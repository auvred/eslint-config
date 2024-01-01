import { messages, reportDifferences } from 'eslint-formatting-reporter'

import { getPrettierFormatSyncFn } from '../workers'

import type { Rule } from 'eslint'

const rule: Rule.RuleModule = {
  meta: {
    type: 'layout',
    docs: {
      description: 'Use Prettier to format code',
      category: 'Stylistic',
    },
    fixable: 'whitespace',
    schema: [
      {
        type: 'object',
        properties: {
          parser: {
            type: 'string',
            required: true,
          },
        },
        additionalProperties: true,
      },
    ],
    messages,
  },
  create(context) {
    const format = getPrettierFormatSyncFn()

    return {
      Program(): void {
        const sourceCode = context.sourceCode.text

        const formatted = format({
          code: sourceCode,
          filepath: context.filename,
          prettierOptions: context.options[0] || {},
        })

        reportDifferences(context, sourceCode, formatted)
      },
    }
  },
}

export default rule
