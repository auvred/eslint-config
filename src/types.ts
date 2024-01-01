/* eslint perfectionist/sort-interfaces: "error" */

import type {
  // eslint-disable-next-line ts/no-restricted-imports
  FlatESLintConfig,
  Rules,
} from 'eslint-define-config'

export type FlatConfigItem = Omit<FlatESLintConfig, 'plugins' | 'rules'> & {
  // eslint-disable-next-line ts/no-explicit-any
  plugins?: Record<string, any>
  // eslint-disable-next-line ts/no-explicit-any
  rules?: Rules | Record<string, any>
}

export interface OptionsOverrides {
  overrides?: FlatConfigItem['rules']
}

export type ImportsOptionsOverrides = OptionsOverrides & {
  internalRegex?: string
}

export interface Options {
  imports?: ImportsOptionsOverrides
  typescript?: boolean | OptionsOverrides
  vue?: boolean | OptionsOverrides
}
