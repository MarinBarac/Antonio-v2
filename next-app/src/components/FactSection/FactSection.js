import styles from "./FactSection.module.scss";

const FactSection = ({ title, subtitle }) => {
  return (
    <section className="section">
      <div className={styles.container}>
        <p className={`p2 ${styles.subtitle}`}>{subtitle.toUpperCase()}</p>
        <h3 className={`h3 ${styles.title}`}>{title}</h3>
      </div>
    </section>
  );
};

export default FactSection;
