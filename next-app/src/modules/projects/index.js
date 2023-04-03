import CoffeeChat from "@components/CoffeeChat";
import PageTitle from "@components/PageTitle";
import ProjectsList from "./ProjectsList/ProjectsList";
import { getProjectPreviews } from "@services/contentful";

export const revalidate = 24*3600;

const ProjectsPage = async () => {

  const projects = await getProjectPreviews();
  const projectsList = projects.map(project => ({image: project.previewImage, title: project.projectName, description: project.description, href: project.href}))
  return (
    <>
      <PageTitle
        title="Projects"
        description="Well, if you came here looking to see some clients' work say a big thank you to NDAs. 😎"
      />
      <ProjectsList list={projectsList}/>
      <CoffeeChat />
    </>
  );
};

export default ProjectsPage;
