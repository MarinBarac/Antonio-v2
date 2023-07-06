import PageTitle from "@components/PageTitle";
import { getPage } from "@services/pages";
import ReadyToTalkSection from "@components/BookACallSection/ReadyToTalkSection";
import ProjectsSection from "./ProjectsSection";

const ProjectsPage = async () => {
  const pageInfo = await getPage('projects');

  return (
    <>
      <PageTitle
        title={pageInfo.title}
        description={pageInfo.description}
      />
      <ProjectsSection />
      <ReadyToTalkSection />
    </>
  );
};

export default ProjectsPage;
