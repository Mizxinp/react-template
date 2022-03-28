module.exports = (api) => {
    api.cache(true)
    const presets = [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript',
    ]
    // const presets = ['@babel/preset-typescript', '@babel/preset-react', '@babel/preset-env']
    const plugins = [
        // '@babel/plugin-syntax-dynamic-import',
        // 'babel-plugin-lodash',
        ['import', { libraryName: 'antd', style: true }, 'antd'],
        [
            'import',
            {
                libraryName: 'elephant-ui',
                style: (name) => `${name}/index.css`,
            },
            'elephant-ui',
        ],
    ]
    return {
        presets,
        plugins,
    }
}
