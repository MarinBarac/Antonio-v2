import CoffeeChat from "@components/CoffeeChat";
import PageTitle from "@components/PageTitle";
import ProjectArticle from "@modules/projects/ProjectArticle";
import { getProjectArticle } from "@services/contentful";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const project = await getProjectArticle(slug);

  require("dotenv").config();
  return {
    title: project.projectName,
    description: project.description,
    openGraph: {
      url: `${process.env.SITE_URL}${slug}`,
      title: project.projectName,
      description: project.description,
    },
  };
}

export const revalidate = 5;

const ProjectPage = async ({ params }) => {
  const { slug } = params;
  const {
    projectName,
    description,
    articleImagesCollection,
    article,
    dribbleLink,
  } = await getProjectArticle(slug);
 

  return (
    <>
      <PageTitle title={projectName} description={description} prevLink />
      <ProjectArticle
        images={articleImagesCollection.items}
        article={article}
        dribbleLink={dribbleLink}
      />
      <CoffeeChat />
    </>
  );
};

export default ProjectPage;
