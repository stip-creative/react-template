import React, { FunctionComponent } from "react";
import { Helmet } from "react-helmet";

import ISeo from "../../models/ISeo";

export interface ISeoProps {
    seo: ISeo;
    defaultSeo: ISeo;
}

const SEO: FunctionComponent<ISeoProps> = ({ defaultSeo, seo }) => {
    const fullSeo = { ...defaultSeo, ...seo };

    const getMetaTags = () => {
        const tags = [];

        if (fullSeo.metatitle) {
            tags.push(
                {
                    property: "og:title",
                    content: fullSeo.metatitle,
                },
                {
                    name: "twitter:title",
                    content: fullSeo.metatitle,
                }
            );
        }
        if (fullSeo.metadescription) {
            tags.push(
                {
                    name: "description",
                    content: fullSeo.metadescription[0].text,
                },
                {
                    property: "og:description",
                    content: fullSeo.metadescription[0].text,
                },
                {
                    name: "twitter:description",
                    content: fullSeo.metadescription[0].text,
                }
            );
        }
        if (fullSeo.shareimage) {
            const imageUrl = fullSeo.shareimage.url;

            tags.push(
                {
                    name: "image",
                    content: imageUrl,
                },
                {
                    property: "og:image",
                    content: imageUrl,
                },
                {
                    name: "twitter:image",
                    content: imageUrl,
                }
            );
        }
        tags.push({ name: "twitter:card", content: "summary_large_image" });

        return tags;
    };

    const metaTags = getMetaTags();

    return (
        <Helmet
            title={fullSeo.metatitle}
            titleTemplate="%s"
            link={[
                {
                    rel: "icon",
                    href: fullSeo.favicon.url,
                },
            ]}
            script={
                [
                    // {
                    //     src: "url",
                    // },
                ]
            }
            meta={metaTags}
        />
    );
};

export default SEO;
