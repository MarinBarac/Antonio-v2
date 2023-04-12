import styles from "./SectionTitle.module.scss";

const SectionTitle = ({ title, description, titleStyle }) => {
  return (
    <div className={styles.container}>
      <h2 style={titleStyle}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default SectionTitle;
