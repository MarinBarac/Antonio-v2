import { getProjectPreviews } from "@services/contentful";

const { default: ProjectsPage } = require("@modules/projects")

export async function generateStaticParams() {
    const projects = await getProjectPreviews();
  
    return projects.map((project) => ({
      slug: project.slug,
    }));
  }

const Projects = async () => {
    const projects = await getProjectPreviews();
    
    return <ProjectsPage />
}

export default Projects;