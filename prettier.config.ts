/** @type {import("prettier").Config} */
const config = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  endOfLine: 'lf',
  jsxBracketSameLine: false,
  jsxSingleQuote: true,
  // 'no-duplicate-variable': [true, 'check-parameters'],
  // 'no-var-keyword': true,
  printWidth: 100,
  quoteProps: 'as-needed',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false,
  plugins: [require.resolve('prettier-plugin-tailwindcss')]
}

module.exports = config
