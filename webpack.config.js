const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "production",
    devtool: "source-map",

    entry: {
        index: './src/index.tsx'
    },

    output: {
        path: __dirname + '/dist',
        filename: 'main.js',
        publicPath: "/"
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        modules: ['node_modules'],
    },

    devServer: {
        historyApiFallback: true,
        hot: true,
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
            test: /\.(ico)$/,
            loader: 'url-loader'
        },
        {
            test: /\.(jpeg|jpg|gif|svg|woff|woff2|ttf|eot|ico|png)$/,
            loader: 'file-loader?name=assets/[name].[hash].[ext]'
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader?sourceMap'
        },
        {
            test: /\.less$/,
            loader: "style-loader!css-loader!less-loader"
        },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: 'src/public/logo.ico',
            template: 'src/index.html'
        })
    ],
}