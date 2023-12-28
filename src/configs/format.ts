import type { FlatESLintConfig } from "eslint-define-config";
import type * as prettier from "prettier";
import {
  GLOB_JSTS,
  GLOB_VUE,
  GLOB_POSTCSS,
  GLOB_JSON,
  GLOB_HTML,
  GLOB_YAML,
  GLOB_STYLE,
  GLOB_GRAPHQL,
} from "../globs";
import * as parserPlain from "eslint-parser-plain";
import pluginPrettier from "eslint-plugin-prettier";
import prettierPluginJsdoc from "prettier-plugin-jsdoc";

export function format(): FlatESLintConfig[] {
  return [
    {
      files: [
        GLOB_STYLE,
        GLOB_POSTCSS,
        GLOB_YAML,
        GLOB_GRAPHQL,
      ],
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
        "prettier/prettier": [
          "error",
          {
            semi: false,
            singleQuote: true,
            arrowParens: "avoid",
            vueIndentScriptAndStyle: true,
            endOfLine: "lf",
            singleAttributePerLine: true,
            htmlWhitespaceSensitivity: "ignore",

            plugins: ["prettier-plugin-jsdoc"],
            tsdoc: true,
          } satisfies prettier.Options & prettierPluginJsdoc.Options,
        ],
      },
    },
  ];
}
