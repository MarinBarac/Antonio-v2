"use client";

import ThemeContext from "@context/context";
import clsx from "clsx";
import { useContext } from "react";
import ListItem from "./ListItem";

import styles from "./ListSection.module.scss";

const ListSection = ({ list }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <ul
      className={clsx(styles.list, {
        [styles.dark]: isDark,
      })}
    >
        {list.map(item => <ListItem key={item.title} {...item}/>)}
    </ul>
  );
};

export default ListSection;
