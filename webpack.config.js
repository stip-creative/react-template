const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = env => {
    const modules = {
        js: {
            test: /\.(ts|js)x?$/i,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
            },
        },
        style: {
            test: /\.(sa|sc|c)ss$/,
            use: [
                {
                    loader: "style-loader",
                },
                {
                    loader: "css-loader",
                },
                {
                    loader: "sass-loader",
                },
            ],
        },
        glsl: {
            test: /\.glsl$/,
            exclude: /node_modules/,
            use: ["raw-loader", "glslify-loader"],
        },
        files: {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
        },
        fonts: {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: "asset/resource",
        },
    };

    const plugins = [
        new ESLintPlugin({
            files: "src/**/*{ts,tsx}",
            failOnError: false,
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
    ];

    const resolve = {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".glsl", ".jpg", ".png", ".svg"],
    };

    return {
        modules,
        plugins,
        resolve,
    };
};
