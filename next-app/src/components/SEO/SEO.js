"use client";

import { useRef, useState } from "react";
import clsx from "clsx";
import SectionTitle from "@components/SectionTitle/SectionTitle";
import Button from "@components/Button";
import { SEO_TEXT } from "./contants";

import styles from "./SEO.module.scss";

const SEO = () => {
  const [expand, setExpand] = useState(false);
  const btnRef = useRef();

  const handleExpand = () => {
    setExpand((prevState) => !prevState);
    setTimeout(() => {
      btnRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }, 300);
  };

  return (
    <section className={clsx("section", styles.container)}>
        <SectionTitle
          title="SEO text that you don’t want to read"
          description={SEO_TEXT.expand}
          descriptionClass="expandable"
          expanded={expand}
        />
        <Button
          ref={btnRef}
          onClick={handleExpand}
        >
          {expand ? 'Hide' : 'Expand'}
        </Button>
    </section>
  );
};

export default SEO;
