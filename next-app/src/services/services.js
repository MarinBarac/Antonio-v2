import { callContentful } from "./contentful";

export const getServicesPreviews = async () => {
  const query = `{
        serviceCollection(order:id_ASC) {
            items {
                title,
                slug,
                description,
                previewImage {
                    url,
                    width,
                    height
                }
                midsectionTitle,
                articleTitle,
                article {
                    json
                },
                slides,
            }
        }
    }`;

  try {
    const response = await callContentful(query);
    return response.data.serviceCollection.items;
  } catch (error) {
    return null;
  }
};

export const getService = async (slug) => {
  const query = `{
        serviceCollection(where: { slug: "${slug}" }) {
            items {
                id,
                title,
                slug,
                description,
                previewImage {
                    url,
                    width,
                    height
                }
                midsectionTitle,
                articleTitle,
                article {
                    json
                },
                slides,
                videoLink,
            }
        }
    }`;

  try {
    const response = await callContentful(query);
    return response.data.serviceCollection?.items[0];
  } catch (error) {
    return null;
  }
};
