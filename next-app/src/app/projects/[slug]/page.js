import CoffeeChat from "@components/CoffeeChat";
import PageTitle from "@components/PageTitle";
import ProjectArticle from "@modules/projects/ProjectArticle";
import { getProjectArticle } from "@services/contentful";

const ProjectPage =  async ({ params }) => {
    const { slug } = params;
    const projectParams = await getProjectArticle(slug);
    const {projectName, description, articleImagesCollection, article} = projectParams;

    return <>
        <PageTitle title={projectName} description={description} prevLink/>
        <ProjectArticle images={articleImagesCollection.items} article={article}/>
        <CoffeeChat />
    </>
}

export default ProjectPage;