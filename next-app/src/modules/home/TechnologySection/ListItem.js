import Image from "next/image";

import styles from "./TechnologySection.module.scss";

const ListItem = ({ title, description, image }) => {
  return (
    <li className={styles.listItem}>
      <Image
        src={image.src}
        alt={title}
        width={image.width}
        height={image.height}
      />
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default ListItem;
