import React from "react";
import Logo from "../../assets/logo.png";
import fstyle from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={fstyle.wrapper}>
      <hr />
      <div className={fstyle.footer}>
        <div className={fstyle.logo}>
          <img src={Logo} alt="" />
          <span>Magic Shop</span>
        </div>
        <div className={fstyle.main_chai}>
          Powered by <span className={fstyle.chai}>'CHAI'</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
