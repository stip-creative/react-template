import { HelmetData } from "react-helmet";

const pretty = require("pretty");

// HTML-шаблон
export default function template(helmet: HelmetData, content: string, bundles: string, preloadedState: object) {
    const page = `
              <html lang="en">
              <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <meta name="theme-color" content="#810051">
                <link rel="shortcut icon" href="/public/favicon.ico" type="image/x-icon">
                <link rel="icon" href="/public/favicon.ico" type="image/x-icon">
              </head>
              <body>
                <div class="content">
                   <div id="app">${content}</div>
                   <script>
                        // WARNING: See the following for security issues around embedding JSON in HTML:
                        // https://redux.js.org/usage/server-rendering#security-considerations
                        window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, "\\u003c")}
                    </script>
                   ${bundles}
                </div>
              </body>
              </html>`;

    return pretty(page);
}
