import PageTitle from "@components/PageTitle";

import styles from "./ProjectPageTitle.module.scss";
import Image from "next/image";
import { ClockIcon, SettingsIcon, UserIcon } from "@components/icons";

const ProjectPageTitle = ({ title, description, client, role, duration }) => {
  return (
    <PageTitle
      title={title}
      description={description}
      href="/projects"
      backLinkText="Back to projects"
    >
      <div className={styles.projectInfo}>
        <div key='client' className={styles.projectInfoItem}>
            <UserIcon />
            <p>Client: {client}</p>
        </div>
        <div key='role' className={styles.projectInfoItem}>
            <SettingsIcon />
            <p>Role: {role}</p>
        </div>
        <div key='duration' className={styles.projectInfoItem}>
            <ClockIcon />
            <p>Duration: {duration}</p>
        </div>
      </div>
    </PageTitle>
  );
};

export default ProjectPageTitle;
