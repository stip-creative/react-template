import { HelmetData } from "react-helmet";

const pretty = require("pretty");

// HTML-шаблон
export default function template(helmet: HelmetData, content: string, bundles: string, styles: string, preloadedState: object) {
    const page = `
              <html lang="en">
              <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">
                <link rel="stylesheet" href="/build/main.css">
                <meta content="summary_large_image" name="twitter:card">
                <meta property="og:type" content="website">

                <!-- Google Tag Manager -->
                    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-T335PR7');</script>
                <!-- End Google Tag Manager -->

                <!-- Meta Pixel Code -->
                <script>
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '417256213810686');
                    fbq('track', 'PageView');
                    </script>
                    <noscript><img height="1" width="1" style="display:none"
                    src="https://www.facebook.com/tr?id=417256213810686&ev=PageView&noscript=1"
                    /></noscript>
                <!-- End Meta Pixel Code -->
              </head>
              <body>
                <!-- Google Tag Manager (noscript) -->
                    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T335PR7"
                    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
                <!-- End Google Tag Manager (noscript) -->
                <div class="content">
                   <div id="root">${content}</div>
                   <style id="jss-server-side">${styles}</style>
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
