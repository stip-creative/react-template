const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackNotifierPlugin = require("webpack-notifier");
const webpackConfig = require("./webpack.config");

module.exports = (env, argv) => {
    const watchMode = argv.liveReload || false;
    const modeEnv = argv.mode || "development";
    const config = webpackConfig(modeEnv);

    return {
        entry: "./src/index.tsx",
        output: {
            filename: watchMode
                ? "assets/[name].[hash].js"
                : "assets/[name].[chunkhash].js",
            path: path.resolve(__dirname, "build"),
            publicPath: "/public",
            clean: true,
        },
        module: {
            rules: [config.modules.js, config.modules.stylus],
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html",
            }),
            new WebpackNotifierPlugin({ alwaysNotify: false }),
        ],
    };
};
