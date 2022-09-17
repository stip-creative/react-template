require("@babel/register")({
    plugins: ["@babel/plugin-syntax-dynamic-import", "dynamic-import-node", "@loadable/babel-plugin"],
});
require("./app");
