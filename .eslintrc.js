module.exports = {
    extends: ['airbnb', 'plugin:react-hooks/recommended'],
    plugins: ['react', 'jsx-a11y'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    parser: 'babel-eslint',
    settings: {
        // 解决别名问题：eslint-import-resolver-webpack
        'import/resolver': { webpack: { config: './webpack.config.dev.js' } }
    },
    rules: {
        semi: ['error', 'never'],
        'arrow-parens': 'off',
        'max-len': ['error', { 'code': 120, 'tabWidth': 4 }],
        indent: ['error', 4],
        'jsx-a11y/anchor-is-valid': ['off'],
        'react/forbid-prop-types': ['off'],
        // 取消强制声明PropTypes数据类型
        'react/prop-types': ['off'],
        // 允许在一个js文件中声明多个class
        'react/no-multi-comp': ['off'],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        // 部分列表有显示重复项的需求，这种场景目前还没有为重项配置唯一 id，
        // 只能用 array index 作为列表 key 值。
        'react/no-array-index-key': 'warn',
        'react/destructuring-assignment': ['off'],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-props-no-spreading': ['off'],
        'linebreak-style': [0, 'error', 'windows']
    },
}