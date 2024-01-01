// eslint-disable-next-line import/no-useless-path-segments
import { auvred } from './dist/index.js'

export default auvred({
  typescript: {
    overrides: {
      'ts/no-restricted-imports': [
        'error',
        {
          name: 'eslint-define-config',
          importNames: ['FlatESLintConfig'],
          message: 'Use FlatConfigItem from types.ts instead',
        },
      ],
    },
  },
})
