import Link from "next/link";
import styles from "./Card.module.scss";
import Image from "next/image";
import { ArrowRight } from "shared/assets/icons";

const DEFAULT_IMAGE_SIZE = 400;

const Card = ({ type, title, tags, image, href, className, target = '_self' }) => {
  return (
    <div
      style={{
        backgroundImage:
          type !== "main"
            ? `url(${
                image.src || image.url
              }), linear-gradient(0deg, #030906 10%, rgba(0, 0, 0, 0.00) 100%)`
            : "none",
        backgroundColor: type === "main" ? "#030906" : "none",
      }}
      className={`${styles.container} ${styles[type]} ${className}`}
    >
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h3 className="h3">{title}</h3>
          {tags && (
            <ul className={styles.tags}>
              {tags.map((tag) => (
                <li key={tag} className={`p1 ${styles.tag}`}>
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>
        <Link href={href} className={styles.arrowContainer} target={target}>
          <ArrowRight className={styles.arrow} />
        </Link>
      </div>
      <div className={styles.imageContainer}>
        <Image
          alt="Card image"
          src={image.src || image.url}
          width={image.width || DEFAULT_IMAGE_SIZE}
          height={image.height || DEFAULT_IMAGE_SIZE}
          className={styles.image}
        />
      </div>
      <Link href={href} className={styles.arrowContainer}>
        <ArrowRight className={styles.arrow} />
      </Link>
    </div>
  );
};

export default Card;
