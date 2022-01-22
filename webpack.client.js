const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackNotifierPlugin = require("webpack-notifier");
const webpackConfig = require("./webpack.config");

module.exports = (env, argv) => {
    const watchMode = argv.liveReload || false;
    const modeEnv = argv.mode || "development";
    const config = webpackConfig(modeEnv);

    return {
        entry: "./src/index.tsx", // Энтрипоинт-файл, с которого и начнется наша сборка
        output: {
            filename: watchMode
                ? "assets/[name].[hash].js"
                : "assets/[name].[chunkhash].js", // небольшое условие, т.к. WDS не будет работать с chunkhash
            path: path.resolve(__dirname, "build"), // Весь наш результат складываем в папку dist
            publicPath: "/public",
            clean: true, // чистка папки билд
        },
        module: {
            rules: [config.modules.js, config.modules.stylus],
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"], // разрешения модулей
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html", // Скармливаем наш HTML-темплейт
            }),
            new WebpackNotifierPlugin({ alwaysNotify: false }), // нотификации
        ],
    };
};
