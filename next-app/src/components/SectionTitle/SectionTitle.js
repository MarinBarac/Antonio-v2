import { useRef, useState, useEffect, useContext } from "react";
import clsx from "clsx";
import styles from "./SectionTitle.module.scss";
import ThemeContext from "@context/context";

const SectionTitle = ({
  title,
  description,
  titleStyle,
  descriptionClass,
  expanded,
}) => {
  const { isDark } = useContext(ThemeContext);
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
    <div className={clsx(styles.container, { [styles.dark]: isDark })}>
      <h2 style={titleStyle}>{title}</h2>
      <div
        ref={descriptionRef}
        className={clsx(styles.description, {
          [styles.expandable]: descriptionClass,
          [styles.expanded]: expanded,
        })}
        style={{ height: `${descriptionHeight}` }}
      >
        {description}
      </div>
    </div>
  );
};

export default SectionTitle;
