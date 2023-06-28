import Card from "@components/Card";
import styles from "./ProjectsList.module.scss";
import { PROJECTS } from "./constants";

const ProjectsList = () => {
  return (
    <ul className={styles.list}>
      {PROJECTS.map((project, index) => (
        <li key={project.title}>
          <Card {...project} type={index === 0 && "main"} />
        </li>
      ))}
    </ul>
  );
};

export default ProjectsList;
