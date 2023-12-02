import React from "react";
import styles from "../styles/Footer.module.scss";
import { payIcons } from "../utils/data";

const Footer = () => {
  return (
    <footer className={styles.footer__container}>
      <div className={styles.additionally__footer}>
        <div className={styles.store__info}>
          © ИП Ерёмина Татьяна {new Date().getFullYear()}
        </div>
        <div>license</div>
        <div className={styles.warning}>
          Медицинские услуги на данном сайте не предлагаются и не оказываются.
          Психотерапия на сайте, в том числе в дипломах и сертификатах
          специалиста, - это метод/способ психологического консультирования и ни
          при каких условиях не может пониматься как вид медицинской (врачебной)
          деятельности.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
