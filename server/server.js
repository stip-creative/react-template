import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import path from "path";

import { ChunkExtractor } from "@loadable/server";

import App from "../src/app/App";
import template from "./template";

export default function render(url) {
    //Объект хранит в себе результат рендера
    const reactRouterContext = {};

    const statsFile = path.resolve(__dirname, "../build/loadable-stats.json");
    // We create an extractor from the statsFile
    const extractor = new ChunkExtractor({ statsFile });
    const html = renderToString(
        extractor.collectChunks(() => (
            <StaticRouter location={url} context={reactRouterContext}>
                <App />
            </StaticRouter>
        ))
    );
    const scriptTags = extractor.getScriptTags(); // or extractor.getScriptElements();

    // Render your application
    // Достаем <head> из HTML-строки
    const helmet = Helmet.renderStatic();

    // И передаем в HTML-шаблон
    return template(helmet, html, scriptTags);
}
