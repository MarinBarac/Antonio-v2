import Card from "@components/Card";
import { getProjectPreviews } from "@services/projects";

import styles from "./ProjectsSection.module.scss";

const ProjectsList = async () => {
  const projectPreviews = await getProjectPreviews();

  return (
    <ul className={styles.list}>
      {projectPreviews.map((project, index) => (
        <li key={project.title + index}>
          <Card
            title={project.title}
            tags={project.previewTags}
            image={project.previewImage}
            href={`/projects/${project.id}`}
            type={index === 0 && "main"}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProjectsList;
