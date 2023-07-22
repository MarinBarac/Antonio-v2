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
        {videoLink && (
          <div className={styles.videoContainer}>
            <iframe
              width="560"
              height="315"
              src={videoLink}
              frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
};

export default ArticleSection;
