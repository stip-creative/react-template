const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackNotifierPlugin = require("webpack-notifier");
const webpackConfig = require("./webpack.config");

module.exports = (env, argv) => {
    const buildFolderName = "build";
    const buildPath = path.resolve(__dirname, buildFolderName);

    const watchMode = argv.liveReload || false;
    const modeEnv = argv.mode || "development";
    const config = webpackConfig(modeEnv);

    return {
        mode: modeEnv,
        entry: ["@babel/polyfill", "./src/index.tsx"],
        output: {
            filename: watchMode ? "assets/[name].[hash].js" : "assets/[name].[chunkhash].js",
            path: buildPath,
            publicPath: "./",
            clean: true,
        },
        module: {
            rules: [config.modules.js, config.modules.style, config.modules.glsl, config.modules.files, config.modules.fonts],
        },
        resolve: config.resolve,
        plugins: [
            ...config.plugins,
            new HtmlWebpackPlugin({
                template: "./public/index.html",
            }),
            new WebpackNotifierPlugin({ alwaysNotify: false }),
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
