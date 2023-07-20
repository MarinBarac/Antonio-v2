import Project from "@modules/projects/Project";

const ProjectPage = ({ params: { id } }) => {
    return <Project id={id}/>
};

export default ProjectPage;
