import CoffeeChat from "@components/CoffeeChat";
import PageTitle from "@components/PageTitle";
import ProjectsText from "./ProjectsText/ProjectsText";
import { AreaOfExpertise } from "@components/AreaOfExpertise";

export const revalidate = 24 * 3600;

const ProjectsPage = async () => {
  //const projects = await getProjectPreviews();
  // const projectsList = projects.map((project) => ({
  //   image: project.previewImage,
  //   title: project.projectName,
  //   description: project.description,
  //   slug: project.slug,
  // }));

  return (
    <>
      <PageTitle
        title="Projects"
        description="Well, if you came here looking to see some clients' work say a big thank you to NDAs. 😎"
      />
      <ProjectsText />
      <AreaOfExpertise title='Area of expertise in B2B SaaS' titleClass='small'/>
      <CoffeeChat />
    </>
  );
};

export default ProjectsPage;
