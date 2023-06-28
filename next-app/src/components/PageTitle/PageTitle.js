import styles from "./PageTitle.module.scss";
import PageTitleImage from "./PageTitleImage";

const PageTitle = ({ title, description, withImage }) => {
  return (
    <section className={`${styles.container} ${withImage && styles.withImage}`}>
      <h1 className="h1">{title}</h1>
      <p className={`h3 ${styles.description}`}>{description}</p>
      {withImage && (
        <PageTitleImage />
      )}
    </section>
  );
};

export default PageTitle;
