import { renderToString } from "react-dom/server";
import { Helmet } from "react-helmet";
import path from "path";
import { ServerStyleSheet } from "styled-components";

import { ChunkExtractor } from "@loadable/server";

import template from "./template";
import apollo from "./apollo";
import convertData from "./convertData";
import StaticApp from "./StaticApp";
import { configureStoreWithState } from "../src/store";

const render = async (url: string) => {
    const data = await apollo(url);

    const store = configureStoreWithState(convertData(data));
    const sheet = new ServerStyleSheet();
    const statsFile = path.resolve(__dirname, "./loadable-stats.json");

    // We create an extractor from the statsFile
    const extractor = new ChunkExtractor({ statsFile });
    const html = renderToString(extractor.collectChunks(StaticApp(url, sheet, store)));
    const scriptTags = extractor.getScriptTags(); // or extractor.getScriptElements();
    const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();

    // Render your application
    // Достаем <head> из HTML-строки
    const helmet = Helmet.renderStatic();

    // И передаем в HTML-шаблон
    return template(helmet, html, scriptTags, styleTags, convertData(data));
};;

export default render;