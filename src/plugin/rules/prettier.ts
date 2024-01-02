// Adapted from the eslint-plugin-format
// https://github.com/antfu/eslint-plugin-format/blob/acfb3d2d3b8a06e72a5412deb8cd0fee88f05370/src/rules/prettier.ts
// License: https://github.com/antfu/eslint-plugin-format/blob/acfb3d2d3b8a06e72a5412deb8cd0fee88f05370/LICENSE

import { messages, reportDifferences } from 'eslint-formatting-reporter'

import { getPrettierFormatSyncFn } from '../workers'

import type { AST, Rule } from 'eslint'

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

        try {
          const formatted = format({
            code: sourceCode,
            filepath: context.filename,
            prettierOptions: context.options[0] || {},
          })

          reportDifferences(context, sourceCode, formatted)
        } catch (error) {
          // Source: https://github.com/prettier/eslint-plugin-prettier/blob/f9857187b4d43d2f0d20104a8c94eb4abbd44725/eslint-plugin-prettier.js#L209-L233

          if (!(error instanceof SyntaxError)) {
            throw error
          }

          let message = `Parsing error: ${error.message}`

          // Prettier's message contains a codeframe style preview of the
          // invalid code and the line/column at which the error occurred.
          // ESLint shows those pieces of information elsewhere already so
          // remove them from the message
          if ('codeFrame' in error && error.codeFrame) {
            message = message.replace(`\n${error.codeFrame}`, '')
          }
          if ('loc' in error && error.loc) {
            message = message.replace(/ \(\d+:\d+\)$/, '')
            context.report({
              message,
              loc: error.loc as AST.SourceLocation,
            })
          }
        }
      },
    }
  },
}

export default rule
