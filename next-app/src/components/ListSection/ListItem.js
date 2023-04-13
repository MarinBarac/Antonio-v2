import Image from "next/image";
import Link from "next/link";

import styles from "./ListSection.module.scss";
import clsx from "clsx";

const ListItem = ({ title, description, image, slug }) => {
  return (
    <li>
      <Link
        href={`/projects/${slug || ""}`}
        className={clsx(styles.item, { [styles.disabled]: !slug })}
      >
        <div
          className={styles.imageContainer}
          style={{ backgroundImage: `url(${image.url || image.src})` }}
        />
        <div className={styles.text}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </Link>
    </li>
  );
};

export default ListItem;
