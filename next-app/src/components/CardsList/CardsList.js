import Card from "@components/Card/Card";
import styles from "./CardsList.module.scss";

const CardsList = ({ data }) => {
  return (
    <ul className={styles.list}>
      {data.map((item) => (
        <li key={item.title} className={styles.cardContainer}>
          <Card
            href={item.href}
            image={item.image}
            title={item.title}
            className={`${styles.card} ${item.className}`}
            target={item.target}
          />
        </li>
      ))}
    </ul>
  );
};

export default CardsList;
