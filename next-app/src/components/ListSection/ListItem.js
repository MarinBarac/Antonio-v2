import Image from "next/image";

import styles from './ListSection.module.scss';

const ListItem = ({ title, description, price, image }) => {
  return (
    <li className={styles.item}>
      <Image
        src={image.src}
        alt={`${title}-image`}
        width={image.width}
        height={image.height}
        className={styles.image}
      />
      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        {price && <p className={styles.price}>{`${price}€/hour*`}</p>}
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  );
};

export default ListItem;
