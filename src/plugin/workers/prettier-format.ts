import prettier from 'prettier'
import { runAsWorker } from 'synckit'

export interface PrettierFormatWorkerInput {
  code: string
  // Plugin objects won't pass structuredClone
  prettierOptions: Omit<prettier.Options, 'plugins'> & {
    plugins?: string[]
  }
  filepath: string
}

export type PrettierFormatWorkerFn = (
  input: PrettierFormatWorkerInput,
) => Promise<string>

// TODO: port func-style to ts-eslint
// I hope it will have option that allows typed function expressions
// eslint-disable-next-line func-style
const format: PrettierFormatWorkerFn = async ({
  code,
  prettierOptions,
  filepath,
}) => {
  if (!prettierOptions.parser) {
    const { ignored, inferredParser } = await prettier.getFileInfo(filepath, {
      resolveConfig: false,
      withNodeModules: false,
      ...(prettierOptions.plugins ? { plugins: prettierOptions.plugins } : {}),
    })

    if (!ignored && inferredParser) {
      prettierOptions.parser = inferredParser
    }
  }

  return await prettier.format(code, prettierOptions)
}

runAsWorker(format)
