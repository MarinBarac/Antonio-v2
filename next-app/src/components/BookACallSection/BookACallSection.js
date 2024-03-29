"use client";

import Button from "@components/Button";
import styles from "./BookACallSection.module.scss";
import Link from "next/link";
import CustomLink from "@components/CustomLink";
import { useEffect, useRef, useState } from "react";

const BookACallSection = ({
  title,
  description,
  type,
  firstLink,
  firstLinkText,
  secondLink,
  secondLinkText,
  secondLinkBlank,
  secondLinkType,
  showAnimation,
}) => {
  const containerRef = useRef(null);
  const [runAnimation, setRunAnimation] = useState(false);

  useEffect(() => {
    const containerRefCopy = containerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if (isIntersecting && !runAnimation) {
          setRunAnimation(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.35,
      }
    );

    !runAnimation && showAnimation && observer.observe(containerRefCopy);

    return () => observer.disconnect(containerRefCopy);
  }, [showAnimation, containerRef, runAnimation]);

  return (
    <section className="section">
      <div
        ref={containerRef}
        className={`${styles.container} ${
          showAnimation && styles.showAnimation
        } ${runAnimation && styles.runAnimation}`}
      >
        <h2
          className={`${type === "largeText" ? "h2" : "h3"} ${
            type === "largeText" && styles.large
          }`}
        >
          {title}
        </h2>
        {description && (
          <div
            className={`${type === "largeText" ? "h3" : "p2"} ${
              styles.description
            } ${type === "largeText" && styles.large}`}
          >
            {description}
          </div>
        )}
        <div className={styles.buttons}>
          {firstLink && (
            <Link href={firstLink} target="_blank">
              <Button>{firstLinkText}</Button>
            </Link>
          )}
          {secondLink && (
            <CustomLink
              href={secondLink}
              type={secondLinkType || "white-underline"}
              target={secondLinkBlank ? "_blank" : "_self"}
              withArrow
            >
              {secondLinkText}
            </CustomLink>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookACallSection;
