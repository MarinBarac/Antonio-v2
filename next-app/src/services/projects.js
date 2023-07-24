import { callContentful } from "./contentful";

export const getProjectPreviews = async () => {
  const query = `{
        projectCollection(order: id_ASC) {
            items {
                title,
                slug,
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

export const getProject = async (slug) => {
  const query = `{
    projectCollection(where: { slug: "${slug}" }) {
        items {
            title,
            slug,
            description,
            client,
            role,
            duration,
            midsectionTitle,
            aboutClient,
            logo {
              url,
              width,
              height,
            },
            solutionImagesCollection {
              items {
                url,
                width,
                height
              }
            },
            firstLink,
            firstLinkText,
            secondLink,
            secondLinkText,
        }
    }
  }`;

  try {
    const response = await callContentful(query);
    return response.data.projectCollection?.items[0];
  } catch (error) {
    return null;
  }
};
