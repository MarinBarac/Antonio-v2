import styles from "./MainSection.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const AboutSection = ({ article, images }) => {
  return (
    <section className={`section ${styles.section}`}>
      <div className={styles.container}>
        <div className={`p3 ${styles.article}`}>{documentToReactComponents(article.json)}</div>
        <ul className={styles.imagesList}>
          {images.map((image, index) => (
            <li
              key={`about image ${++index}`}
              className={styles.imageContainer}
              style={{ backgroundImage: `url(${image.url})` }}
            ></li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
