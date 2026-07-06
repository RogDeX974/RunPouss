
// webpack.config.js

import path from "path";
import webpack from "webpack";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

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
        filename: '[name].js'
    },
    plugins: [HtmlPlugin],
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
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "frontend", "src"),
        },
        compress: true,
        port: 7000,
        historyApiFallback: true,
    }
};