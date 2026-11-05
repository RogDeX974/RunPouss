
// webpack.config.js

import path from "path";
import webpack from "webpack";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

const HtmlPlugin = new HtmlWebpackPlugin({
    template: "./frontend/public/index.html",
    filename: "./index.html"
});




const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: './frontend/src/index.js',
    mode: 'development',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/',
        clean: true,
    },
    plugins: [
        HtmlPlugin,
        /*new BundleAnalyzerPlugin(),*/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader:'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: { postcssOptions: { config: path.resolve(__dirname, "postcss.config.cjs") }}
                    }
                ],
            },
            {
                test: /\.(png|jpe?g|webp|svg|gif)$/i,
                include: path.resolve(__dirname, 'frontend/src/assets'),
                type: 'asset/resource',
                generator: { filename: 'images/[name].[hash][ext]' },
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "frontend", "src"),
        },
        open: true,
        hot: true,
        compress: true,
        port: 7000,
        historyApiFallback: true,
    }
};