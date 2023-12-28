import { FlatESLintConfig } from "eslint-define-config";
import pluginVue from "eslint-plugin-vue";
import parserVue from "vue-eslint-parser";
import parserTs from "@typescript-eslint/parser";
import { GLOB_VUE } from "../globs";

export function vue(): FlatESLintConfig[] {
  return [
    {
      plugins: {
        vue: pluginVue,
      },
    },
    {
      files: [GLOB_VUE],
      languageOptions: {
        parser: parserVue,
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          parser: parserTs,
        },
      },
      processor: pluginVue.processors[".vue"],
      rules: {
        ...pluginVue.configs.base.rules,
        ...pluginVue.configs["vue3-essential"].rules,

        // vue3-strongly-recommended
        "vue/attribute-hyphenation": "error",
        "vue/component-definition-name-casing": "error",
        "vue/html-self-closing": "error",
        "vue/no-template-shadow": "error",
        "vue/one-component-per-file": "error",
        "vue/prop-name-casing": "error",
        "vue/require-default-prop": "error",
        "vue/require-explicit-emits": "error",
        "vue/require-prop-types": "error",
        "vue/v-bind-style": "error",
        "vue/v-on-event-hyphenation": [
          "error",
          "always",
          {
            autofix: true,
          },
        ],
        "vue/v-on-style": "error",
        "vue/v-slot-style": "error",

        // vue3-recommended
        "vue/attributes-order": [
          "error",
          {
            order: [
              "DEFINITION",
              "LIST_RENDERING",
              "CONDITIONALS",
              "RENDER_MODIFIERS",
              "TWO_WAY_BINDING",
              "OTHER_DIRECTIVES",
              ["UNIQUE", "SLOT"],
              "GLOBAL",
              "OTHER_ATTR",
              "EVENTS",
              "CONTENT",
            ],
            alphabetical: true,
          },
        ],
        "vue/no-lone-template": "error",
        "vue/no-multiple-slot-args": "error",
        "vue/this-in-template": "error",

        // uncategorized
        "vue/block-lang": [
          "error",
          {
            script: {
              lang: ["js", "ts"],
            },
            template: {
              lang: ["html"],
            },
            style: {
              lang: ["css", "sass", "scss", "less", "stylus", "postcss"],
            },
          },
        ],
        "vue/block-order": [
          "error",
          { order: ["script", "template", "style"] },
        ],
        "vue/component-api-style": "error",
        "vue/component-name-in-template-casing": [
          "error",
          "PascalCase",
          { registeredComponentsOnly: false },
        ],
        "vue/custom-event-name-casing": ["error", "kebab-case"],
        "vue/define-emits-declaration": ["error", "type-based"],
        "vue/define-macros-order": [
          "error",
          {
            order: [
              "defineOptions",
              "defineProps",
              "defineEmits",
              "defineSlots",
            ],
          },
        ],
        "vue/define-props-declaration": ["error", "type-based"],
        "vue/no-boolean-default": ["error", "default-false"],
        "vue/no-empty-component-block": "error",
        "vue/no-multiple-objects-in-class": "error",
        "vue/no-ref-object-reactivity-loss": "error",
        "vue/no-required-prop-with-default": "error",
        "vue/no-restricted-v-bind": ["error", "/^v-/"],
        "vue/no-setup-props-reactivity-loss": "error",
        "vue/no-unused-emit-declarations": "error",
        "vue/no-use-v-else-with-v-for": "error",
        "vue/no-useless-mustaches": "error",
        "vue/no-useless-v-bind": "error",
        "vue/no-v-text": "error",
        "vue/padding-line-between-blocks": ["error", "always"],
        "vue/prefer-define-options": "error",
        "vue/prefer-true-attribute-shorthand": "error",
        "vue/require-macro-variable-name": "error",
        "vue/require-typed-ref": "error",
        "vue/v-for-delimiter-style": "error",
        "vue/v-on-handler-style": [
          "error",
          ["method", "inline-function"],
          { ignoreIncludesComment: false },
        ],

        // extensions
        "vue/dot-notation": ["error", { allowKeywords: true }],
        "vue/eqeqeq": ["error", "always"],
        "vue/no-console": ["error", { allow: ["error", "warn"] }],
        "vue/no-constant-condition": "error",
        "vue/no-empty-pattern": "error",
        "vue/no-useless-concat": "error",
        "vue/object-shorthand": "error",
        "vue/prefer-template": "error",
      },
    },
  ];
}
