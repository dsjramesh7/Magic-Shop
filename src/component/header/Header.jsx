import React, { useState } from "react";
import hstyle from "./Header.module.css";
import Logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
import { GoThreeBars } from "react-icons/go";
const Header = () => {
  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };
  return (
    <div className={hstyle.container}>
      <div className={hstyle.left}>
        <img src={Logo} alt="company logo" />
        <span>Magic Shop</span>
      </div>

      <div className={hstyle.right}>
        <div className={hstyle.bars} onClick={toggleMenu}>
          <GoThreeBars />
        </div>

        <ul
          className={hstyle.menu}
          style={{ display: showMenu ? "inherit" : "none" }}
        >
          <li>Collections</li>
          <li>Brands</li>
          <li>New</li>
          <li>Sales</li>
          <li>ENG</li>
        </ul>

        <input
          className={hstyle.searchInput}
          type="text"
          placeholder="Search"
        />

        <CgShoppingBag className={hstyle.cart} />
      </div>
    </div>
  );
};

export default Header;
