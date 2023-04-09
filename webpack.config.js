const { resolve } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
    entry: './src/index.js',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'ht-m-utils.js',
        // docs: https://webpack.docschina.org/configuration/output/#outputglobalobject
        globalObject: 'this',
        library: 'htMUtils',
        libraryTarget: 'umd'
    },
    plugins: [new CleanWebpackPlugin()]
};

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        // TODO ...
    }

    if (argv.mode === 'production') {
        config.output.filename = 'ht-m-utils.min.js';
    }
    return config;
};
