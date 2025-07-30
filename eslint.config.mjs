// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  files: ['**/*.ts', '**/*.vue'],
  rules: {
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'prettier/prettier': 'error'
  },
  plugins: {
    prettier: require('eslint-plugin-prettier')
  }
})
