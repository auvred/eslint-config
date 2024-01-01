import { defineConfig } from 'tsup'

export default defineConfig([{
  entry: ['src/index.ts'],
  format: 'esm',
  clean: true,
  dts: true,
  shims: true,
}, {
  entry: ['src/plugin/workers/prettier-format.ts'],
  outDir: 'dist/workers',
  format: 'esm',
  shims: true,
}])
