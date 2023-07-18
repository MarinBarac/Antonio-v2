import ReadyToTalkSection from "@components/BookACallSection/ReadyToTalkSection";
import FactSection from "@components/FactSection";
import PageTitle from "@components/PageTitle";
import { getProject } from "@services/projects";

const ProjectPage = async ({ id }) => {
    const projectInfo = await getProject(id);
    return <>
        <PageTitle title={projectInfo.title} description={projectInfo.description} />
        <FactSection subtitle="Key task" title={projectInfo.midsectionTitle}/>
        
        <ReadyToTalkSection />
    </>
}

export default ProjectPage;