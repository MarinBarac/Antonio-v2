import clsx from "clsx";
import { useContext } from "react";
import styles from "./Hamburger.module.scss";

const Hamburger = ({ active, onClick }) => {
  return (
    <div
      className={clsx(styles.container, {
        [styles.active]: active,
      })}
      onClick={onClick}
    >
      <div className={clsx(styles.bar, styles.first)} />
      <div className={clsx(styles.bar, styles.second)} />
      <div className={clsx(styles.bar, styles.last)} />
    </div>
  );
};

export default Hamburger;
