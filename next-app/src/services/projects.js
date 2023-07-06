import { callContentful } from "./contentful";

export const getProjectPreviews = async () => {
  const query = `{
        projectCollection(order: id_ASC) {
            items {
                id,
                title,
                previewImage {
                    url,
                    width,
                    height
                },
                previewTags,
            }
        }
    }`;

  try {
    const response = await callContentful(query);
    return response.data.projectCollection?.items;
  } catch (error) {
    console.log(error);
    return null;
  }
};
