import CardsList from "@components/CardsList";
import styles from "./ArticlesSection.module.scss";

const ArticlesSection = async ({ articles }) => {
  const formatedArticles = articles.slice(0, 4).map((article) => ({
    title: article.title,
    href: article.link,
    image: { src: article.thumbnail },
    className: styles.card,
    target: '_blank',
  }));

  return (
    <section className="section">
      <div className={styles.container}>
        <h2 className="h2">Latest articles</h2>
        <CardsList data={formatedArticles} />
      </div>
    </section>
  );
};

export default ArticlesSection;
