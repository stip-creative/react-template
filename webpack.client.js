const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackNotifierPlugin = require("webpack-notifier");
const Dotenv = require("dotenv-webpack");
const CompressionPlugin = require("compression-webpack-plugin");
const LoadablePlugin = require("@loadable/webpack-plugin");

const webpackConfig = require("./webpack.config");

module.exports = (env, argv) => {
    const buildFolderName = "build";
    const buildPath = path.resolve(__dirname, buildFolderName);

    const watchMode = argv.liveReload || false;
    const modeEnv = argv.mode || "development";
    const config = webpackConfig(modeEnv);

    return {
        mode: modeEnv,
        entry: ["@babel/polyfill", "./src/client.jsx"],
        output: {
            chunkFilename: "[name].bundle.js",
            filename: watchMode ? "assets/[name].[hash].js" : "assets/[name].[chunkhash].js",
            path: buildPath,
            publicPath: "./",
            clean: true,
        },
        module: {
            rules: [
                config.modules.js,
                config.modules.style,
                config.modules.glsl,
                config.modules.files,
                config.modules.fonts,
                config.modules.graphql,
                config.modules.svg,
                config.modules.gltf,
            ],
        },
        resolve: config.resolve,
        plugins: [
            ...config.plugins,
            new LoadablePlugin(),
            new CompressionPlugin(),
            // new HtmlWebpackPlugin({
            //     template: "./public/index.html",
            // }),
            new webpack.ProvidePlugin({
                process: "process/browser",
            }),
            new WebpackNotifierPlugin({ alwaysNotify: false }),
            new Dotenv({
                systemvars: true,
            }),
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
