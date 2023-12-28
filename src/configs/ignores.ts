import type { FlatESLintConfig } from 'eslint-define-config'

export function ignores(): FlatESLintConfig[] {
  return [
    {
      ignores: [
        '**/node_modules',
        '**/dist',
        '**/out',
        '**/output',
        '**/package-lock.json',
        '**/yarn.lock',
        '**/pnpm-lock.yaml',
        '**/bun.lockb',

        '**/coverage',
        '**/temp',
        '**/.vitepress/cache',
        '**/.nuxt',
        '**/.nitro',
        '**/.vercel',
        '**/.netlify',
        '**/.output',
        '**/.vercel',
        '**/.changeset',
        '**/.idea',
        '**/.vite-inspect',
        '**/.yarn',
        '**/cdk.out',

        '**/CHANGELOG*.md',
        '**/*.min.*',
        '**/LICENSE*',
        '**/__snapshots__',
        '**/auto-import?(s).d.ts',
        '**/components.d.ts',
      ],
    },
  ]
}
