import React, { useState } from "react";
import css from "./Header.module.css";
import companyLogo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
import { HiMiniBars3 } from "react-icons/hi2";
const Header = () => {
  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={companyLogo} alt="company-logo" />
        <span>Magic Shop</span>
      </div>
      <div className={css.right}>
        <div className={css.bars} onClick={toggleMenu}>
          <HiMiniBars3 />
        </div>
        <ul
          className={css.menu}
          style={{ display: showMenu ? "inherit" : "none" }}
        >
          <li>Collections</li>
          <li>Brands</li>
          <li>New</li>
          <li>Sales</li>
          <li>ENG</li>
        </ul>
        <input className={css.search} type="text" placeholder="Search..." />
        <CgShoppingBag className={css.cart} />
      </div>
    </div>
  );
};

export default Header;
