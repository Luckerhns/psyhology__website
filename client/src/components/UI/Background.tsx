import React, { useState } from "react";
import styles from "../../styles/UI/Background.module.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Background = () => {
  const { theme } = useTypedSelector((state) => state.theme);
  const cases: any = {
    "LIGHT": false,
    "DARK": true,
  };
  const visible = theme;
  console.log(theme);
  return (
    <div
      className={
        cases[theme]
          ? `${styles.main__background} ${styles.active__background}`
          : styles.main__background
      }
    ></div>
  );
};

export default Background;
