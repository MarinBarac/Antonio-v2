import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Button from "@components/Button";

import styles from "./ProjectArticle.module.scss";

const ProjectArticle = ({ images, article, dribbleLink }) => {
  return (
    <section className="section">
      <div className={styles.images}>
        {images.map((image, index) => (
          <Image
            key={`project-image-${index}`}
            src={image.url}
            alt="Project image"
            width={image.width}
            height={image.height}
            className={styles.image}
          />
        ))}
      </div>
      <div className={styles.article}>
        {documentToReactComponents(article.json)}
      </div>
      <Button href={dribbleLink} target="_blank">Read full case study</Button>
    </section>
  );
};

export default ProjectArticle;
