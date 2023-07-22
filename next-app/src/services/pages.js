import { callContentful } from "./contentful";

export const getPage = async (type) => {
  require("dotenv").config();
  const query = `{
        pageCollection(where: { type: "${type}"}) {
        items {
            title,
            description,
            midsectionTitle,
            midsectionSubtitle,
            article {
              json
            },
            imagesCollection {
              items {
                url,
                width,
                height,
              }
            }
        }
      }}`;

  try {
    const response = await callContentful(query);
    return response.data.pageCollection.items[0];
  } catch (error) {
    return null;
  }
};
