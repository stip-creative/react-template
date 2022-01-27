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
                // Создает узлы `style` из строк JS
                {
                    loader: "style-loader",
                },
                // Переводит CSS в CommonJS
                {
                    loader: "css-loader",
                },
                // SASS в CSS
                {
                    loader: "sass-loader",
                },
            ],
        },
    };

    const plugins = [
        new ESLintPlugin({
            files: "src/**/*{ts,tsx}", // Файлы для проверки
            failOnError: false, // Не падать на ошибкахcc
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
    ];

    const resolve = {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    };

    return {
        modules,
        plugins,
        resolve,
    };
};
