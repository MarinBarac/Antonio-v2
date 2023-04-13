import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Button from "@components/Button";

import styles from "./ProjectArticle.module.scss";
import ImageSwiper from "./ImageSwiper";

const ProjectArticle = ({ images, article, dribbleLink }) => {

  return (
    <section className="section">
      <ImageSwiper images={images} />
      <div className={styles.article}>
        {documentToReactComponents(article.json)}
      </div>
      <Link href={dribbleLink} target="_blank">
        <Button>Read full case study</Button>
      </Link>
    </section>
  );
};

export default ProjectArticle;
