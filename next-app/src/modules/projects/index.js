import CoffeeChat from "@components/CoffeeChat";
import PageTitle from "@components/PageTitle";
import ProjectsList from "./ProjectsList/ProjectsList";

const ProjectsPage = () => {
  return (
    <>
      <PageTitle
        title="Projects"
        description="Well, if you came here looking to see some clients' work say a big thank you to NDAs. 😎"
      />
      <ProjectsList />
      <CoffeeChat />
    </>
  );
};

export default ProjectsPage;
