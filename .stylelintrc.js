module.exports = {
    extends: ['stylelint-config-standard'],
    rules: {
        "indentation": 4,
        // SCSS语法支持
        'at-rule-no-unknown': [ true, {
    		ignoreAtRules: [ 'extend', 'at-root', 'warn', 'error', 'if', 'else', 'for', 'each', 'while', 'mixin', 'include', 'content', 'return', 'function' ],
        } ],
        "selector-pseudo-class-no-unknown": [true, {
            "ignorePseudoClasses": ["global","local"]
        }]
    },
    ignoreFiles: ['**/*.js'],
}
