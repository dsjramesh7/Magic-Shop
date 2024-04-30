import React from "react";
import css from "./Footer.module.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <p className={css.cFooterSentence}>
          Powered by "<span>CHAI☕</span>".
        </p>
      </div>
    </div>
  );
};

export default Footer;
