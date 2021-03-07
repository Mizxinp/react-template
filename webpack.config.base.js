const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = (env = {}) => ({
    output: {
        path: `${__dirname}/dist`,
        filename: '[name].js',
        chunkFilename: '[name].[contenthash].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            COMMON: path.join(__dirname, 'src/common'),
            FEAT: path.join(__dirname, 'src/features'),
        },
    },
    optimization: {
        runtimeChunk: false,
        minimize: false,
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
                parallel: true,
                extractComments: false,
                terserOptions: {
                    output: {
                        comments: false, // remove all comments
                        // https://www.tiny.cloud/docs/advanced/usage-with-module-loaders/#minificationwithuglifyjs2
                        ascii_only: true,
                    },
                    compress: {
                        warnings: false,
                        collapse_vars: false, // 是否内嵌定义了但是只用到一次的变量，例如把 var x = 5; y = x 转换成 y = 5
                    },
                },
            }),
        ],
    },
})
