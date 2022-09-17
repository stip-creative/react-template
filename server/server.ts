import { renderToString } from "react-dom/server";
import { Helmet } from "react-helmet";
import path from "path";

import { ChunkExtractor } from "@loadable/server";

import template from "./template";
import StaticApp from "./StaticApp";

export default function render(url: string) {
    // //Объект хранит в себе результат рендера
    // const reactRouterContext = {};

    const statsFile = path.resolve(__dirname, "./loadable-stats.json");
    // We create an extractor from the statsFile
    const extractor = new ChunkExtractor({ statsFile });
    const html = renderToString(extractor.collectChunks(StaticApp(url)));
    const scriptTags = extractor.getScriptTags(); // or extractor.getScriptElements();

    // Render your application
    // Достаем <head> из HTML-строки
    const helmet = Helmet.renderStatic();

    // И передаем в HTML-шаблон
    return template(helmet, html, scriptTags);
}
