module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-html'],
    plugins: ['stylelint-use-logical'],
    rules: {
      'csstools/use-logical': 'always',
      'value-keyword-case': ['lower', { camelCaseSvgKeywords: true }],
      'font-family-name-quotes': 'always-where-recommended',
      'function-url-quotes': 'never',
      'selector-class-pattern': null,
    },
    overrides: [
      {
        files: ['*.html', '**/*.html'],
        customSyntax: 'postcss-html',
      },
    ],
  };