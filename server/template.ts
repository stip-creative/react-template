import { HelmetData } from "react-helmet";

const pretty = require("pretty");

// HTML-шаблон
export default function template(helmet: HelmetData, content: string, bundles: string) {
    const page = `
              <html lang="en">
              <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <meta name="theme-color" content="#810051">
                <link rel="shortcut icon" href="/assets/logos/favicon.ico" type="image/x-icon">
                <link rel="icon" href="/assets/logos/favicon.ico" type="image/x-icon">
                <link rel="stylesheet" href="/assets/global.css">
              </head>
              <body>
                <div class="content">
                   <div id="app">${content}</div>
                   ${bundles}
                </div>
              </body>
              </html>`;

    return pretty(page);
}
