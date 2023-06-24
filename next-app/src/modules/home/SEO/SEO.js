"use client";

import { useRef, useState, useEffect } from "react";
import clsx from "clsx";
import Button from "@components/Button";
import { SEO_TEXT } from "./contants";

import styles from "./SEO.module.scss";

const SEO = () => {
  const [expand, setExpand] = useState(false);
  const [descriptionHeight, setDescriptionHeight] = useState("auto");
  const btnRef = useRef();
  const descriptionRef = useRef();

  useEffect(() => {
    if (expand) {
      setDescriptionHeight(
        `${descriptionRef.current.children[0].scrollHeight}px`
      );
    } else {
      setDescriptionHeight("50px");
    }
  }, [expand]);

  const handleExpand = () => {
    setExpand((prevState) => !prevState);
    setTimeout(() => {
      btnRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }, 300);
  };

  return (
    <section className={clsx("section", styles.container)}>
      <div className={clsx(styles.text)}>
        <h2>SEO text that you don&apos;t want to read</h2>
        <div
          ref={descriptionRef}
          className={clsx('text', styles.description, {
            [styles.expanded]: expand,
          })}
          style={{ height: `${descriptionHeight}` }}
        >
          {SEO_TEXT}
        </div>
      </div>
      <Button ref={btnRef} onClick={handleExpand}>
        {expand ? "Hide" : "Expand"}
      </Button>
    </section>
  );
};

export default SEO;
