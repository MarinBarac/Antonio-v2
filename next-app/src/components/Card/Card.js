"use client";

import Link from "next/link";
import styles from "./Card.module.scss";
import Image from "next/image";
import { ArrowRight } from "shared/assets/icons";
import { useRef } from "react";
import { useShowOnScroll } from "shared/hooks";

const DEFAULT_IMAGE_SIZE = 400;

const Card = ({
  type,
  title,
  tags,
  image,
  href,
  className,
  target = "_self",
}) => {
  const isMain = type === "main";
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const containerOpacity = useShowOnScroll(
    containerRef,
    isMain ? 0 : 0.5,
    isMain ? 0.2 : 1
  );
  const contentOpacity = useShowOnScroll(contentRef, 0, 0.3);

  return (
    <div
      ref={containerRef}
      style={{
        backgroundImage: !isMain
          ? `url(${
              image.src || image.url
            }), linear-gradient(0deg, #030906 10%, rgba(0, 0, 0, 0.00) 100%)`
          : "none",
        backgroundColor: type === "main" ? "#030906" : "none",
        opacity: containerOpacity,
      }}
      className={`${styles.container} ${styles[type]} ${className}`}
    >
      <div
        ref={contentRef}
        style={{ opacity: isMain ? contentOpacity : containerOpacity }}
        className={styles.content}
      >
        <div className={styles.textContainer}>
          <div className={styles.titleContainer}>
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
    </div>
  );
};

export default Card;
