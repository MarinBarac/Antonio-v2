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
    return null;
  }
};

export const getProject = async (id) => {
  const query = `{
    projectCollection(where: { id: ${id} }) {
        items {
            title,
            description,
            client,
            role,
            duration,
            midsectionTitle,
            aboutClient,
            solutionImagesCollection {
              items {
                url,
                width,
                height
              }
            },
            clientSite,
        }
    }
  }`;

  try {
    const response = await callContentful(query);
    return response.data.projectCollection?.items[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};