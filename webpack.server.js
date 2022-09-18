const path = require("path");

const nodeExternals = require("webpack-node-externals");

module.exports = env => {
    return {
        name: "server",
        entry: {
            server: path.resolve(__dirname, "server/index.ts"),
        },
        mode: "production",
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "[name].js",
        },
        resolve: {
            extensions: [".ts", ".tsx"],
        },
        externals: [nodeExternals()],
        target: "node",
        node: {
            __dirname: false,
        },
        module: {
            rules: [
                {
                    test: /\.(ts|js)x?$/i,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: {
                                plugins: ["@loadable/babel-plugin"],
                            },
                        },
                    ],
                },
            ],
        },
    };
};
