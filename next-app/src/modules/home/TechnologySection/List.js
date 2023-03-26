import ListItem from "./ListItem";
import styles from "./TechnologySection.module.scss";

const List = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map((item, index) => (
        <ListItem key={`technology-${index}`} {...item} />
      ))}
    </ul>
  );
};

export default List;
