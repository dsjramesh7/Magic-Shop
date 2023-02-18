import React from "react";
import mstyle from "./Hero.module.css";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "../../../node_modules/react-icons/ri";
import { BsArrowRight } from "../../../node_modules/react-icons/bs";
import { motion } from "framer-motion";
const Hero = () => {
  const transition = { duration: 3, type: "spring" };
  return (
    <div className={mstyle.container}>
      {/* left section of mainbody */}
      <div className={mstyle.h_sides}>
        <span className={mstyle.text1}>Skin protection cream</span>

        <div className={mstyle.text2}>
          <span>Trendy Collection</span>
          <span>
            Seedily say has suitable disposal and boy. Exercise joy man children
            rejoiced.
          </span>
        </div>
      </div>

      {/* Midde section of the body */}
      <div className={mstyle.wrapper}>
        <motion.div
          initial={{ bottom: "2rem" }}
          whileInView={{ bottom: "0rem" }}
          transition={transition}
          className={mstyle.blueCircle}
        ></motion.div>

        <motion.img
          initial={{ bottom: "-2rem" }}
          whileInView={{ bottom: "0rem" }}
          transition={transition}
          src={HeroImg}
        />

        <motion.div
          initial={{ right: "4%" }}
          whileInView={{ right: "2%" }}
          transition={transition}
          className={mstyle.cart2}
        >
          <RiShoppingBagFill />
          <div className={mstyle.signup}>
            <span>Best Signup Offers</span>

            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right section of the body */}
      <div className={mstyle.h_sides}>
        <div className={mstyle.traffic}>
          <span>2M</span>
          <span>Monthly Traffic</span>
        </div>

        <div className={mstyle.customers}>
          <span>100k</span>
          <span>Happy Customer</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
