import Image from "next/image";
import styles from "./SolutioSection.module.scss";
import CustomLink from "@components/CustomLink";

const SolutioSection = ({ images, dribbbleLink }) => {
  return (
    <section className="section">
      <div className={styles.container}>
        <h2 className="h2">Solution</h2>
        <div className={styles.images}>
          {images.map((image, index) => (
            <Image
              key={`Solution image ${index + 1}`}
              alt="Solution image"
              src={image.url}
              width={image.width}
              height={image.height}
              className={styles.image}
            />
          ))}
        </div>
        <CustomLink href={dribbbleLink} type="withArrow" target="_blank" className={styles.link}>
          Visit live solution
        </CustomLink>
      </div>
    </section>
  );
};

export default SolutioSection;
