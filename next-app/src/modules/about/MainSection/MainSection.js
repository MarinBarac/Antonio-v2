import Image from "next/image";
import { ABOUT_ANTONIO, IMAGES } from "./constants";
import styles from "./MainSection.module.scss";

const AboutSection = () => {
  return (
    <section className="section">
      <div className={styles.container}>
        <p className="p3">{ABOUT_ANTONIO}</p>
        <ul className={styles.imagesList}>
          {IMAGES.map((image, index) => (
            <li
              key={`about image ${++index}`}
              className={styles.imageContainer}
              style={{ backgroundImage: `url(${image.src})` }}
            ></li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
