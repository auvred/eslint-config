import type { FlatESLintConfig } from "eslint-define-config";
import { default as configsJs } from "@eslint/js";
import { GLOB_JSTS, GLOB_JSTS_EXT } from "../globs";

export function javascript(): FlatESLintConfig[] {
  return [
    {
      rules: {
        ...configsJs.configs.recommended.rules,

        "array-callback-return": "error",
        "no-constructor-return": "error",
        "no-self-compare": "error",
        "no-template-curly-in-string": "error",
        "no-unmodified-loop-condition": "error",
        "no-unreachable-loop": "error",

        curly: ["error", "all"],
        "default-case-last": "error",
        "dot-notation": ["error", { allowKeywords: true }],
        eqeqeq: ["error", "always"],
        "func-names": "error",
        "func-style": ["error", "declaration"],
        "no-caller": "error",
        "no-console": ["error", { allow: ["error", "warn"] }],
        "no-iterator": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        "no-negated-condition": "error",
        "no-proto": "error",
        "no-restricted-globals": [
          "error",
          { name: "global", message: "Use `globalThis` instead." },
          { name: "self", message: "Use `globalThis` instead." },
          { name: "isNaN", message: "Use `Number.isNaN` instead" },
          { name: "isFinite", message: "Use `Number.isFinite` instead" },
          { name: "parseFloat", message: "Use `Number.parseFloat` instead" },
          { name: "parseInt", message: "Use `Number.parseInt` instead" },
        ],
        "no-restricted-properties": [
          "error",
          {
            object: "globalThis",
            property: "isNaN",
            message: "Use `Number.isNaN` instead",
          },
          {
            object: "globalThis",
            property: "isFinite",
            message: "Use `Number.isFinite` instead",
          },
          {
            object: "globalThis",
            property: "parseFloat",
            message: "Use `Number.parseFloat` instead",
          },
          {
            object: "globalThis",
            property: "parseInt",
            message: "Use `Number.parseInt` instead",
          },
          {
            object: "window",
            property: "isNaN",
            message: "Use `Number.isNaN` instead",
          },
          {
            object: "window",
            property: "isFinite",
            message: "Use `Number.isFinite` instead",
          },
          {
            object: "window",
            property: "parseFloat",
            message: "Use `Number.parseFloat` instead",
          },
          {
            object: "window",
            property: "parseInt",
            message: "Use `Number.parseInt` instead",
          },
        ],
        "no-sequences": "error",
        "no-shadow": "error",
        "no-throw-literal": "error",
        "no-undefined": "error",
        "no-unneeded-ternary": ["error", { defaultAssignment: false }],
        "no-useless-call": "error",
        "no-useless-catch": "error",
        "no-useless-concat": "error",
        "no-useless-constructor": "error",
        "no-useless-return": "error",
        "no-var": "error",
        "no-void": "error",
        "no-with": "error",
        "object-shorthand": "error",
        "operator-assignment": "error",
        "prefer-const": ["error", { destructuring: "all" }],
        "prefer-destructuring": "error",
        "prefer-object-spread": "error",
        "prefer-promise-reject-errors": "error",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
      },
    },
    {
      files: [`**/scripts/${GLOB_JSTS}`, `**/cli.${GLOB_JSTS_EXT}`],
      rules: {
        "no-console": "off",
      },
    },
  ];
}
