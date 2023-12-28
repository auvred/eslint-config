import {
  ignores,
  format,
  imports,
  javascript,
  jsonc,
  typescript,
  vue,
  node,
  unicorn,
} from "./configs";

import type { FlatESLintConfig } from "eslint-define-config";

export function auvred(): FlatESLintConfig[] {
  const configs: FlatESLintConfig[][] = [
    [
      {
        linterOptions: {
          reportUnusedDisableDirectives: true,
        },
      },
    ],
    ignores(),
    format(),
    imports(),
    javascript(),
    jsonc(),
    node(),
    typescript(),
    unicorn(),
    vue(),
  ];

  return configs.flat();
}
