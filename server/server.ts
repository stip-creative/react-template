import { renderToString } from "react-dom/server";
import { Helmet } from "react-helmet";
import path from "path";

import { ChunkExtractor } from "@loadable/server";

import template from "./template";
import apollo from "./apollo";
import convertData from "./convertData";
import StaticApp from "./StaticApp";
import { configureStoreWithState } from "../src/store";

const render = async (url: string) => {
    const data = await apollo(url);

    console.log(convertData(data));

    const store = configureStoreWithState(convertData(data));

    const statsFile = path.resolve(__dirname, "./loadable-stats.json");
    // We create an extractor from the statsFile
    const extractor = new ChunkExtractor({ statsFile });
    const html = renderToString(extractor.collectChunks(StaticApp(url, store)));
    const scriptTags = extractor.getScriptTags(); // or extractor.getScriptElements();

    // Render your application
    // Достаем <head> из HTML-строки
    const helmet = Helmet.renderStatic();

    // И передаем в HTML-шаблон
    return template(helmet, html, scriptTags, convertData(data));
};

export default render;