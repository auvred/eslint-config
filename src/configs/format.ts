import * as parserPlain from 'eslint-parser-plain'

import {
  GLOB_GRAPHQL,
  GLOB_HTML,
  GLOB_JSON,
  GLOB_JSTS,
  GLOB_MD,
  GLOB_POSTCSS,
  GLOB_STYLE,
  GLOB_VUE,
  GLOB_YAML,
} from '../globs'
import pluginAuvred from '../plugin'

import type { FlatConfigItem } from '../types'
import type * as prettier from 'prettier'
import type prettierPluginJsdoc from 'prettier-plugin-jsdoc'

export function format(): FlatConfigItem[] {
  const basePrettierOptions: prettier.Options = {
    semi: false,
    singleQuote: true,
    arrowParens: 'avoid',
    vueIndentScriptAndStyle: true,
    endOfLine: 'lf',
    singleAttributePerLine: true,
    htmlWhitespaceSensitivity: 'ignore',
  }

  return [
    {
      plugins: {
        auvred: pluginAuvred,
      },
    },
    {
      files: [GLOB_MD],
      languageOptions: {
        parser: parserPlain,
      },
      rules: {
        'auvred/prettier': [
          'error',
          {
            ...basePrettierOptions,
            parser: 'markdown',
            embeddedLanguageFormatting: 'off',
          } satisfies prettier.Options,
        ],
      },
    },
    {
      files: [GLOB_STYLE, GLOB_POSTCSS, GLOB_YAML, GLOB_GRAPHQL, GLOB_HTML],
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
      rules: {
        'auvred/prettier': [
          'error',
          {
            ...basePrettierOptions,
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
