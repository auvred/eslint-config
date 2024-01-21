import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { createSyncFn } from 'synckit'

import type { PrettierFormatWorkerFn } from './prettier-format'
import type { Syncify } from 'synckit'

export const dirWorkers = fileURLToPath(new URL('./workers', import.meta.url))

let prettierSyncFn: Syncify<PrettierFormatWorkerFn> | null = null
export function getPrettierFormatSyncFn(): Syncify<PrettierFormatWorkerFn> {
  return (prettierSyncFn ??= createSyncFn<PrettierFormatWorkerFn>(
    path.join(dirWorkers, 'prettier-format.js'),
  ))
}
