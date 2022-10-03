import path from "path";
import gql from "graphql-tag";
import dotenv from "dotenv";
import fetch from "node-fetch";

import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createPrismicLink } from "apollo-link-prismic";
import { loadDocuments } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";

dotenv.config();

const client = new ApolloClient({
    link: createPrismicLink({
        repositoryName: process.env.REPOSITORY_NAME,
        accessToken: process.env.PRISMIC_API_KEY,
        fetch,
    }),
    cache: new InMemoryCache(),
});

const queries = {
    "/contact": "../src/queries/home.graphql",
    "/course": "../src/queries/course.graphql",
    "/": "../src/queries/home.graphql",
    "/results": "../src/queries/home.graphql",
    "/teachers": "../src/queries/home.graphql",
};

function isCourse(url: string) {
    return url.indexOf("course") > 0;
}

async function query(url: string) {
    let gqlQuery;
    let variables = {};

    gqlQuery = await loadDocuments(path.resolve(__dirname, queries["/"]), {
        loaders: [new GraphQLFileLoader()],
    });

    try {
        const result = await client.query({
            query: gql(gqlQuery[0].rawSDL),
            variables,
        });

        return result.data;
    } catch (err) {
        console.log(err);
    }
}

const apollo = async (url: string) => {
    if (queries[url] || isCourse(url)) {
        return await query(url);
    }
};

export default apollo;
