// Adapted from the eslint-plugin-format
// https://github.com/antfu/eslint-plugin-format/blob/acfb3d2d3b8a06e72a5412deb8cd0fee88f05370/src/rules/prettier.ts
// License: https://github.com/antfu/eslint-plugin-format/blob/acfb3d2d3b8a06e72a5412deb8cd0fee88f05370/LICENSE

import { messages, reportDifferences } from 'eslint-formatting-reporter'

import { getPrettierFormatSyncFn } from '../workers'

import type { Rule } from 'eslint'

const rule: Rule.RuleModule = {
  meta: {
    type: 'layout',
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
