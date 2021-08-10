module.exports = {
  extends: [
    'stylelint-config-standard'
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        'mixin',
        'define-mixin',
        'include',
        'content',
        'rules'
      ]
    }]
  }
}
