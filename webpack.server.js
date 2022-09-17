const nodeExternals = require("webpack-node-externals");
const path = require("path");

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
