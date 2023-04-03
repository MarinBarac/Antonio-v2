import Image from "next/image";
import Link from "next/link";

import styles from './ListSection.module.scss';

const ListItem = ({ title, description, price, image, href }) => {
  return (
    <li className={styles.item}>
      <Image
        src={image.url || image.src}
        alt={`${title}-image`}
        width={image.width}
        height={image.height}
        className={styles.image}
      />
      <div className={styles.text}>
        <Link href={`/projects/${href || ''}`}><h3 className={styles.title}>{title}</h3></Link>
        {price && <p className={styles.price}>{`${price}€/hour*`}</p>}
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  );
};

export default ListItem;
