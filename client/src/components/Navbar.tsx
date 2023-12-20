import burger from "../icons/burger.png";
import favorites from "../icons/favorites.png";
import loop from "../icons/loop.png";
import order from "../icons/order.png";
import login from "../icons/login.png";

import React, { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.scss";
import { useActions } from "../hooks/useActions";
import { PublicRoutesEnum } from "../utils/consts";
import { Link, useNavigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import ReactFlagsSelect from "react-flags-select";
import { Switch } from "@mui/material";
import { themes } from "../utils/colors";

const Navbar = () => {
  const { openModal, setLightTheme, setDarkTheme } = useActions();
  const navigate = useNavigate();
  //   const navigator = (path: string) => {
  //     navigate(path);
  //   };
  const openPage = (route: string, toProfile?: boolean) => {
    if (toProfile) {
      if (localStorage.getItem("isAuth")) {
        setDarkTheme();
        setTimeout(() => {
          navigate(PublicRoutesEnum.UserPath);
          setLightTheme();
        }, 1000);
      } else {
        openModal();
      }
    } else {
      setDarkTheme();
      setTimeout(() => {
        navigate(route);
        setLightTheme();
      }, 1000);
    }
  };
  const { theme } = useTypedSelector((state) => state.theme);
  const [flag, setFlag] = useState("RU");
  return (
    <header className={styles.header}>
      <div className={styles.second__header}>
        <div className={styles.second__grid}>
          <span>Психолог-психотерапевт</span>
          <span className={styles.header__logo}>Татьяна Ерёмина</span>
        </div>
      </div>
      <div className={styles.main__header}>
        <div className={styles.header__container}>
          <a onClick={() => openPage(PublicRoutesEnum.MainPath)}>Главная</a>
          <a onClick={() => openPage(PublicRoutesEnum.AboutMePath)}>Обо мне</a>
          <a onClick={() => openPage(PublicRoutesEnum.TherapyPath)}>
            Консультация и терапия
          </a>
          <a>Семейная терапия</a>
          <a>Материалы</a>
          <a onClick={() => openPage(PublicRoutesEnum.UserPath, true)}>
            Профиль
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
