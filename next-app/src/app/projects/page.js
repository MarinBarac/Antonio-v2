const { default: ProjectsPage } = require("@modules/projects")

export const dynamic = 'force-dynamic';

const Projects = async () => {
    
    return <ProjectsPage />
}

export default Projects;