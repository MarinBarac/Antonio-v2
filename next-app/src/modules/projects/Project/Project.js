import ReadyToTalkSection from "@components/BookACallSection/ReadyToTalkSection";
import FactSection from "@components/FactSection";
import { getProject } from "@services/projects";
import ProjectPageTitle from "./ProjectPageTitle";
import ClientSection from "./ClientSection";
import SolutioSection from "./SolutionSection";

const Project = async ({ id }) => {
  const projectInfo = await getProject(id);
  return (
    <>
      <ProjectPageTitle
        title={projectInfo.title}
        description={projectInfo.description}
        client={projectInfo.client}
        role={projectInfo.role}
        duration={projectInfo.duration}
      />
      <FactSection subtitle="Key task" title={projectInfo.midsectionTitle} />
      <ClientSection
        aboutClient={projectInfo.aboutClient}
        logo={projectInfo.logo}
        link={projectInfo.firstLink}
        linkText={projectInfo.firstLinkText}
      />
      <SolutioSection
        images={projectInfo.solutionImagesCollection.items}
        link={projectInfo.secondLink}
        linkText={projectInfo.secondLinkText}
      />
      <ReadyToTalkSection />
    </>
  );
};

export default Project;
