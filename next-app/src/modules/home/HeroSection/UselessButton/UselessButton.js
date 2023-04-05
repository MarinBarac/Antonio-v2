import clsx from "clsx";
import { useState } from "react";
import { useMedia } from "use-media";
import Button from "@components/Button";

import styles from "./UselessButton.module.scss";

const UselessButton = () => {
  const mobileView = useMedia({maxWidth: "768px"});
  const [moveRight, setMoveRight] = useState(false);

  const toggleMove = () => {
    !mobileView && setMoveRight((prevState) => !prevState);
  };

  const moveBack = () => {
    !mobileView && setMoveRight(false);
  };

  const handleClick = () => {
    if(!moveRight) {
      setMoveRight(true);
      setTimeout(() => setMoveRight(false), 1100);
    }
  }

  return (
    <div style={{position: "relative"}} onMouseLeave={moveBack} onClick={handleClick}>
      <div
        onMouseEnter={toggleMove}
        className={clsx({ [styles.container]: true, [styles.right]: moveRight })}
      >
        <Button variant="secondary">
          Useless button
        </Button>
      </div>
    </div>
  );
};

export default UselessButton;
