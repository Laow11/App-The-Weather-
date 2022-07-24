const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

console.log(devMode)

module.exports = {
    entry: [
        '@babel/polyfill',
        './src/app/index.js'
    ],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/, // Todos los archivos de js que leas, los vas a cargar a traves de un loader(babel)
                loader: 'babel-loader'
            },
            {
                test: /\.css$/, // Comprobar todos los archivos CSS
                use: [
                    devMode ? 'style-loader': MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ]
};