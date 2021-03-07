module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'subject-case': [0],
        'subject-min-length': [2, 'always', 6],
    },
}
