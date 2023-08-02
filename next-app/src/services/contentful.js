import config from "@config/site";

export const callContentful = async (query) => {
  require("dotenv").config();
  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${config.conentfulSpaceId}`;

  const fetchOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.contentfulAccessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
    next: {
      revalidate: 60,
    },
  };

  try {
    const data = await fetch(fetchUrl, fetchOptions).then((response) =>
      response.json()
    );
    return data;
  } catch (error) {
    throw new Error("Could not fetch data from Contentful!");
  }
};
