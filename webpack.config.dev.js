/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar')
const { merge } = require('webpack-merge')
const webpackBasicConfig = require('./webpack.config.base.js')

module.exports = env => merge(webpackBasicConfig(env), {
    mode: 'development',
    devtool: 'inline-cheap-module-source-map',
    entry: {
        app: './src/app/app',
    },
    devServer: {
        host: '0.0.0.0',
        port: '8889',
        hot: true,
        historyApiFallback: true,
    },
    resolveLoader: {
        modules: ['./node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                        },
                    },
                ],
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: [/node_modules/],
                use: [
                    { loader: 'thread-loader' },
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]-[hash:base64:10]',
                            },
                            importLoaders: 2,
                        },
                    },
                    { loader: 'postcss-loader' },
                    { loader: 'sass-loader' },
                ],
            },
            {
                test: /\.less$/,
                include: [/node_modules\/antd\//],
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader', options: { importLoaders: 2 } },
                    { loader: 'postcss-loader' },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader', options: { importLoaders: 2 } },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            forceHttps: false,
            template: path.join(__dirname, 'index-template.html'),
        }),
        new WebpackBar({ name: '🚀', color: '#08aeab' }),
    ],
})
