import * as parserPlain from 'eslint-parser-plain'
import pluginPrettier from 'eslint-plugin-prettier'

import {
  GLOB_GRAPHQL,
  GLOB_HTML,
  GLOB_JSON,
  GLOB_JSTS,
  GLOB_POSTCSS,
  GLOB_STYLE,
  GLOB_VUE,
  GLOB_YAML,
} from '../globs'

import type { FlatESLintConfig } from 'eslint-define-config'
import type * as prettier from 'prettier'
import type prettierPluginJsdoc from 'prettier-plugin-jsdoc'

export function format(): FlatESLintConfig[] {
  return [
    {
      files: [GLOB_STYLE, GLOB_POSTCSS, GLOB_YAML, GLOB_GRAPHQL],
      languageOptions: {
        parser: parserPlain,
      },
    },
    {
      files: [
        GLOB_JSTS,
        GLOB_VUE,
        GLOB_HTML,
        GLOB_STYLE,
        GLOB_POSTCSS,
        GLOB_JSON,
        GLOB_YAML,
        GLOB_GRAPHQL,
      ],
      plugins: {
        prettier: pluginPrettier,
      },
      rules: {
        'prettier/prettier': [
          'error',
          {
            semi: false,
            singleQuote: true,
            arrowParens: 'avoid',
            vueIndentScriptAndStyle: true,
            endOfLine: 'lf',
            singleAttributePerLine: true,
            htmlWhitespaceSensitivity: 'ignore',

            plugins: ['prettier-plugin-jsdoc'],
            tsdoc: true,
          } satisfies prettier.Options &
            // TODO: use just Options after https://github.com/hosseinmd/prettier-plugin-jsdoc/pull/222 is resoved
            Partial<prettierPluginJsdoc.JsdocOptions>,
        ],
      },
    },
  ]
}
