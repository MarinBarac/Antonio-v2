"use client";

import clsx from "clsx";
import ListItem from "./ListItem";

import styles from "./ListSection.module.scss";

const ListSection = ({ list }) => {
  return (
    <ul className={clsx(styles.list)}>
      {list.map((item) => (
        <ListItem key={item.title} {...item} />
      ))}
    </ul>
  );
};

export default ListSection;
