import CoffeeChat from "@components/CoffeeChat";
import PageTitle from "@components/PageTitle";
import ProjectArticle from "@modules/projects/ProjectArticle";
import { getProjectArticle } from "@services/contentful";

export const revalidate = 5;

const ProjectPage = async ({ params }) => {
  const { slug } = params;
  const project = await getProjectArticle(slug);
  const { projectName, description, articleImagesCollection, article, dribbleLink } =
    project;

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
