import Project from "@modules/projects/Project";
import { getProject } from "@services/projects";
import { openGraph } from "shared/sharedMetadata";

export const generateMetadata = async ({ params: { id } }) => {
  const pageInfo = await getProject(id);
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

const ProjectPage = ({ params: { id } }) => {
  return <Project id={id} />;
};

export default ProjectPage;
