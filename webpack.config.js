const path = require("path");

module.exports = env => {
	const modules = {
		js: {
			test: /\.(ts|js)x?$/i,
			exclude: /node_modules/,
			use: [
				{
					loader: "ts-loader",
				},
			],
		},
		stylus: {
			test: /\.styl$/,
			use: [
				{
					loader: "style-loader",
				},
				{
					loader: "css-loader",
				},
			],
		},
	};

	return {
		modules,
	};
};
