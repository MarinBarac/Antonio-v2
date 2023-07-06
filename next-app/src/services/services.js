import { callContentful } from "./contentful";

export const getServicesPreviews = async () => {
  const query = `{
        serviceCollection(order:id_ASC) {
            items {
                id,
                title,
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
    console.log(error);
    return null;
  }
};

export const getService = async (id) => {
  const query = `{
        serviceCollection(where: { id: ${id} }) {
            items {
                id,
                title,
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
    return response.data.serviceCollection?.items[0];
  } catch (error) {
    return null;
  }
};
