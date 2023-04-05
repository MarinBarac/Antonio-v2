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
    next: {
      revalidate: 5,
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

export const getLatesProjectPreviews = async () => {
  require("dotenv").config();
  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

  const query = `{
        projectCollection(limit: 3) {
        items {
            projectName,
            description,
            slug,
            previewImage {
                url
                width
                height
            }    
        }
      }}`;

    const fetchOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
      next: {
        revalidate: 10,
      }
    };
  
    try {
      const response = await fetch(fetchUrl, fetchOptions).then((response) =>
        response.json()
      );
      return response.data.projectCollection.items;
    } catch (error) {
      throw new Error("Could not fetch data from Contentful!");
    }
};

export const getProjectPreviews = async () => {
  require("dotenv").config();
  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

  const query = `{
        projectCollection {
        items {
            projectName,
            description,
            slug,
            previewImage {
                url
                width
                height
            }    
        }
      }}`;

    const fetchOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
      next: {
        revalidate: 10,
      }
    };
  
    try {
      const response = await fetch(fetchUrl, fetchOptions).then((response) =>
        response.json()
      );
      return response.data.projectCollection.items;
    } catch (error) {
      throw new Error("Could not fetch data from Contentful!");
    }
};

export const getProjectArticle = async (slug) => {
  require("dotenv").config();
  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

  const query = `{
        projectCollection(where: {
            slug: "${slug}"
        }) {
        items {
            projectName
            description
            dribbleLink
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

    const fetchOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
      next: {
        revalidate: 10,
      }
    };
  
    try {
      const response = await fetch(fetchUrl, fetchOptions).then((response) =>
        response.json()
      );
      return response.data.projectCollection.items[0];
    } catch (error) {
      throw new Error("Could not fetch data from Contentful!");
    }
};
