const prettierConfig = {
  semi: false,
  singleQuote: true,
  arrowParens: 'avoid',
  vueIndentScriptAndStyle: true,
  endOfLine: 'lf',
  singleAttributePerLine: true,

  plugins: ['prettier-plugin-jsdoc'],
  tsdoc: true,
}

/** @type {import('eslint').ESLint.ConfigData} */
const config = {
  env: {
    node: true,
    es2022: true,
    browser: true,
  },
  reportUnusedDisableDirectives: true,
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:markdown/recommended',
    'plugin:yml/standard',
    'plugin:yml/prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint', 'n', 'unused-imports', 'unicorn'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  ignorePatterns: [
    '*.min.*',
    '*.d.ts',
    'CHANGELOG.md',
    'dist*',
    'release',
    'LICENSE*',
    'coverage',
    'temp',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    // ignore for in lint-staged
    '*.png',
    '*.ico',
    '*.patch',
    '*.txt',
    '*.crt',
    '*.key',
    // force include
    '!.github',
    '!.vitepress',
    '!.vscode',
    '!.eslintrc*',
    // force exclude
    '.vitepress/cache',
  ],
  rules: {
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'default-case-last': 'error',
    eqeqeq: ['error', 'smart'],
    'no-alert': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-multi-str': 'error',
    'object-shorthand': ['error', 'always'],

    // ignoreDeclarationSort because it will conflict with import/order
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    'import/no-unresolved': 'error',
    'import/first': ['error'],
    'import/no-mutable-exports': 'error',
    'import/no-absolute-path': 'off',
    'import/namespace': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true,
      },
    ],
    'import/newline-after-import': ['error', { count: 1 }],

    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-string-starts-ends-with': 'error',
    'unicorn/throw-new-error': 'error',

    'n/no-deprecated-api': 'error',
    'n/no-exports-assign': 'error',
    'n/no-new-require': 'error',
    'n/no-path-concat': 'error',
    'n/process-exit-as-throw': 'error',

    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
      },
    ],
    'unused-imports/no-unused-imports': 'error',

    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
        'ts-check': false,
        minimumDescriptionLength: 3,
      },
    ],
  },
  overrides: [
    {
      files: ['*.js', '*.cjs', '*.jsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-require-imports': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
      excludedFiles: ['**/*.md/*.*'],
      parser: '@typescript-eslint/parser',
      rules: {
        'no-undef': 'off',
      },
    },
    {
      files: [
        '*.ts',
        '*.tsx',
        '*.mts',
        '*.cts',

        '*.js',
        '*.mjs',
        '*.cjs',
        '*.jsx',

        '*.json',
        '*.jsonc',

        '*.yaml',
        '*.yml',

        '*.md',
      ],
      plugins: ['@so1ve/prettier'],
      rules: {
        '@so1ve/prettier/prettier': ['error', prettierConfig],
      },
    },
    {
      files: ['*.vue'],
      extends: [
        'plugin:vue/vue3-recommended',
        'plugin:prettier-vue/recommended',
      ],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'no-undef': 'off',
        'prettier-vue/prettier': ['error', prettierConfig],
        'vue/html-quotes': ['error', 'double', { avoidEscape: false }],
        'vue/max-attributes-per-line': [
          'error',
          {
            singleline: 1,
            multiline: 1,
          },
        ],
        'vue/one-component-per-file': 'off',
        'vue/padding-line-between-blocks': ['error', 'always'],
        'vue/component-tags-order': [
          'error',
          {
            order: ['script', 'template', 'style'],
          },
        ],

        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/custom-event-name-casing': ['error', 'camelCase'],
        'vue/define-macros-order': [
          'error',
          {
            order: [
              'defineOptions',
              'defineProps',
              'defineEmits',
              'defineSlots',
            ],
          },
        ],
        'vue/no-boolean-default': ['error', 'default-false'],
        'vue/no-empty-component-block': 'error',
      },
    },
    {
      files: ['**/*.md/*.*'],
      rules: {
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-require-imports': 'off',
        'import/no-unresolved': 'off',
        'unused-imports/no-unused-imports': 'off',
        'unused-imports/no-unused-vars': 'off',
        'no-alert': 'off',
        'no-console': 'off',
        'no-restricted-imports': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      },
    },
    {
      files: ['*.json', '*.json5', '*.jsonc', '.eslintrc'],
      parser: 'jsonc-eslint-parser',
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'name',
              'displayName',
              'private',
              'preview',
              'version',
              'packageManager',
              'publisher',
              'author',
              'contributors',
              'type',
              'description',
              'keywords',
              'homepage',
              'repository',
              'bugs',
              'funding',
              'categories',
              'license',
              'sideEffects',
              'exports',
              'bin',
              'main',
              'module',
              'unpkg',
              'jsdelivr',
              'types',
              'typesVersions',
              'icon',
              'files',
              'engines',
              'activationEvents',
              'contributes',
              'eslintConfig',
              'publishConfig',
              'scripts',
              'husky',
              'simple-git-hooks',
              'lint-staged',
              'dependencies',
              'devDependencies',
              'optionalDependencies',
              'peerDependencies',
              'peerDependenciesMeta',
              'pnpm',
              'overrides',
              'resolutions',
            ],
          },
          {
            pathPattern: '^(scripts|exports)$',
            order: { type: 'asc' },
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' },
          },
          {
            pathPattern: '^exports.*$',
            order: ['types', 'require', 'import'],
          },
        ],
      },
    },
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser',
    },
  ],
}

module.exports = config
