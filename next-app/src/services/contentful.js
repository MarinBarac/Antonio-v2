const callContentful = async (query) => {
  require("dotenv").config();
  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

  const fetchOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
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

export const getProjectPreviews = async () => {
  const query = `{
        projectCollection {
        items {
            projectName,
            description,
            href,
            previewImage {
                url
                width
                height
            }    
        }
    }}`;

  const response = await callContentful(query);
  return response?.data?.projectCollection?.items;
};

export const getProjectArticle = async (slug) => {
  const query = `{
        projectCollection(where: {
            href: "${slug}"
        }) {
        items {
            projectName
            description
            articleImagesCollection {
                items {
                  url,
                  width,
                  height
                }
            }
            article {
                json
            }
        }
    }}`;

  const response = await callContentful(query);
  return response?.data?.projectCollection.items[0];
};
