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

        if (fullSeo.metaTitle) {
            tags.push(
                {
                    property: "og:title",
                    content: fullSeo.metaTitle,
                },
                {
                    name: "twitter:title",
                    content: fullSeo.metaTitle,
                }
            );
        }
        if (fullSeo.metaDescription) {
            tags.push(
                {
                    name: "description",
                    content: fullSeo.metaDescription,
                },
                {
                    property: "og:description",
                    content: fullSeo.metaDescription,
                },
                {
                    name: "twitter:description",
                    content: fullSeo.metaDescription,
                }
            );
        }
        if (fullSeo.shareImage) {
            const imageUrl = fullSeo.shareImage.url;

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
            title={fullSeo.metaTitle}
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
