import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import ServiceSwiper from "./ServiceSwiper";

import styles from "./ArticleSection.module.scss";

const ArticleSection = ({ article, slides, videoLink }) => {
  return (
    <section className="section">
      <div className={styles.content}>
        <div className={styles.article}>
          {documentToReactComponents(article)}
        </div>
        <ServiceSwiper slides={slides.list} />
        <ul className={styles.slidesList}>
          {slides.list.map((slide) => (
            <li key={slide.title} className={`p3 ${styles.slide}`}>
              <span>{slide.title}</span> {slide.description}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ArticleSection;
