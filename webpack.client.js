const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackNotifierPlugin = require("webpack-notifier");
const webpackConfig = require("./webpack.config");

module.exports = (env, argv) => {
    // Путь к биду
    const buildFolderName = "build";
    const buildPath = path.resolve(__dirname, buildFolderName);
    // Путь к публичной папке
    const publicFolderName = "public";
    const publicPath = path.resolve(__dirname, publicFolderName);

    const watchMode = argv.liveReload || false;
    const modeEnv = argv.mode || "development";
    const config = webpackConfig(modeEnv);

    return {
        mode: modeEnv,
        entry: ["@babel/polyfill", "./src/index.tsx"], // Энтрипоинт-файл, с которого и начнется наша сборка
        output: {
            filename: watchMode ? "assets/[name].[hash].js" : "assets/[name].[chunkhash].js", // небольшое условие, т.к. WDS не будет работать с chunkhash
            path: buildPath, // Весь наш результат складываем в папку dist
            publicPath: "./",
            clean: true, // чистка папки билд
        },
        module: {
            rules: [config.modules.js, config.modules.style, config.modules.glsl, config.modules.files, config.modules.fonts],
        },
        resolve: config.resolve,
        plugins: [
            ...config.plugins,
            new HtmlWebpackPlugin({
                template: "./public/index.html", // Скармливаем наш HTML-темплейт
            }),
            new WebpackNotifierPlugin({ alwaysNotify: false }), // нотификации
        ],
        devServer: {
            devMiddleware: {
                writeToDisk: true,
            },
            client: {
                overlay: false,
            },
            static: {
                directory: buildPath,
            },
            port: 3000,
            open: true,
            historyApiFallback: true,
        },
    };
};
