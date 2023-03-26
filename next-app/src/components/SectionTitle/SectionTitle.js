import { useRef, useState, useEffect } from "react";
import clsx from "clsx";
import styles from "./SectionTitle.module.scss";

const SectionTitle = ({
  title,
  description,
  titleStyle,
  descriptionClass,
  expanded,
}) => {
  const descriptionRef = useRef();
  const [descriptionHeight, setDescriptionHeight] = useState("auto");

  useEffect(() => {
    if (expanded && descriptionClass === "expandable") {
      setDescriptionHeight(
        `${descriptionRef.current.children[0].scrollHeight}px`
      );
    } else {
      descriptionClass === "expandable" && setDescriptionHeight("50px");
    }
  }, [expanded, descriptionClass]);

  return (
    <div className={styles.container}>
      <h2 style={titleStyle}>{title}</h2>
      <p
        ref={descriptionRef}
        className={clsx(styles.description, {
          [styles.expandable]: descriptionClass,
          [styles.expanded]: expanded,
        })}
        style={{ height: `${descriptionHeight}` }}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
