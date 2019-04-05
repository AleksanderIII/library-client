const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + '/src/index.tsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        modules: ['node_modules'],
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [{
                test: /\.ts|\.tsx$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {
                    emitErrors: true,
                    fix: true
                }
            },
            {
                test: /\.ts|\.tsx$/,
                loaders: [
                    'awesome-typescript-loader',
                    'ts-nameof-loader'
                ]
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            },
            {
                test: /\.(jpeg|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?sourceMap'
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: 'src/public/logo.png',
            template: 'src/index.html'
        })
    ],
}