const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader"
                  }
                ]
            },
            {
                test: /\.s?css$/,
                exclude: /bootstrap/,
                use: [
                    { loader: 'style-loader', options: { sourceMap: true } },
                    { loader: 
                        'css-loader',
                        options: { 
                            sourceMap: true,
                            localIdentName: '[path]__[name]__[local]--[hash:base64:5]',
                            modules: true,
                            camelCase: true
                        }
                    },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                ]
            },
            {
                test: /\.css$/,
                include: /bootstrap/,
                use: [ 
                    'style-loader',
                    'css-loader' 
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, "src")
        ],
        extensions: [".js", ".json", ".jsx", ".css"],
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './build',
        compress: true,
        port: 3000
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        })
    ]
}