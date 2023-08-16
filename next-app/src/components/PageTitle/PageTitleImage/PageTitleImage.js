"use client";

import Image from "next/image";
import { GreenArrow } from "shared/assets/icons";
import { CvImage } from "shared/assets/images";

import styles from "./PageTitleImage.module.scss";
import { useEffect, useRef, useState } from "react";

const PageTitleImage = () => {
  const containerRef = useRef(null);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const containerRefCopy = containerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if (isIntersecting && !showAnimation) {
          setShowAnimation(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.65,
      }
    );

    !showAnimation && observer.observe(containerRefCopy);

    return () => observer.disconnect(containerRefCopy);
  }, [showAnimation, containerRef]);

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${
        showAnimation && styles.showAnimation
      }`}
    >
      <div className={styles.textContainer}>
        <p className={styles.text}>Antonio</p>
        <GreenArrow className={styles.svg} />
      </div>
      <Image
        alt="Antonio Vidakovic image"
        src={CvImage.src}
        width={CvImage.width}
        height={CvImage.height}
        className={styles.image}
      />
    </div>
  );
};

export default PageTitleImage;
