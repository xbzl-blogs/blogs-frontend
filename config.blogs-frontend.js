/**
 * webpack配置文件
 * 开发模式配置
 * 配置静态html与主js
 * @type {*|Import}
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');

// 负责将html文档虚拟到根目录下
let htmlWebpackPlugin = new HtmlWebpackPlugin({
    // 虚拟的html文件名 index.html
    filename: 'index.html',
    // 虚拟html的模板为 src下的index.html
    //路由页面
    template: path.resolve(__dirname, './apps/blogs-frontend/public/index.html')
    //练习页面
    // template: path.resolve(__dirname, './apps/blogs-frontend/index.html')
});

var key = "blogs-frontend";
var imageFileName = '/build/[name].[ext]';
var fontFileName = '/build/[name].[ext]?[hash]';




module.exports = {
    // 开发模式
    mode: 'development',
    // 配置入口文件
    entry: './index-blogs-frontend.js',
    // 配置出口文件
    output: {
        path: path.join(__dirname, 'blogs') //编译后的输出路径
        , filename: '[name]/build/bundle.js',
        // publicPath:  'blogs' //服务端的路径
        // , chunkFilename: "/build/[name]_[hash].chunk.js"
    },
    // 配置开发服务器, 并配置自动刷新
    devServer: {
        // 根目录下dist为基本目录
        // contentBase: path.join(__dirname, 'blogs'),
        // 设置是否自动压缩
        // compress: true,
        // 服务端口为1208（可随意设置，但不要跟其他项目的相同）
        port: 1209,
        // 是否自动打开浏览器
        // open: true
    },
    resolve: {
        extensions:  ['', '.js', '.jsx', '.json'],
    },
    module: {
        // 根据文件后缀匹配规则
        loaders: [
            // 在这里添加 react-hot，注意这里使用的是loaders，所以不能用 query，应该把presets参数写在 babel 的后面
                {
                    test: /\.(js|jsx)?$/,
                    exclude: /node_modules/,
                    loaders: [
                        'react-hot-loader/webpack',
                        'babel?compact=false,presets[]=react,presets[]=es2015,presets[]=stage-0'
                    ]
                },
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract("style-loader", "css-loader")
                }, //"style-loader!css-loader"
                {
                    test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") },
                {
                    test: /\.json$/,
                    loader: 'json-loader'
                },
                // {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}, // inline base64 URLs for <=8k images, direct URLs for the rest
                {
                    test: /\.(png|jpg|gif)$/,
                    loader: 'file-loader?name=' + imageFileName
                },
                {
                    test: /\.(ttf\??|eot\??|svg\??|woff\??|woff2\??)/,
                    loader: "file-loader?name=" + fontFileName
                }
            ]
    },
    // 装载虚拟目录插件
    plugins: [
        htmlWebpackPlugin,
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
        new webpack.DefinePlugin({ 'process.env': {
                YYLIB_ENV: JSON.stringify(process.env.NODE_ENV)
            } }),
        new ExtractTextPlugin("build/css/[name].css"),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            names: ["jquery-3.2.1.min.js","plugins.js"], //注意：最后的一个文件，在html中必须第一个加载
            filename: "build/[name].js"
        })
    ],
};
