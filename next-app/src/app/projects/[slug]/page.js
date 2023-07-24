import Project from "@modules/projects/Project";
import { getProject } from "@services/projects";
import { openGraph } from "shared/sharedMetadata";

export const generateMetadata = async ({ params: { slug } }) => {
  const pageInfo = await getProject(slug);
  return {
    title: `Antonio Vidakovic - Projects | ${pageInfo.title}`,
    description: pageInfo.description,
    openGraph: {
      ...openGraph,
      title: `Antonio Vidakovic - Projects | ${pageInfo.title}`,
      description: pageInfo.description,
    },
  };
};

const ProjectPage = ({ params: { slug } }) => {
  return <Project slug={slug} />;
};

export default ProjectPage;
