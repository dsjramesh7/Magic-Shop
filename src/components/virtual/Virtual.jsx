import React from "react";
import css from "./Virtual.module.css";
import blueshade from "../../assets/shade.png";
import ReactCompareImage from "react-compare-image";
import Before from "../../assets/before.png";
import After from "../../assets/after.png";

const Virtual = () => {
  return (
    <div className={css.virtual}>
      <div className={css.virtual_left}>
        <span>VIRTUAL TRY-ON</span>
        <span>NEVER BUY THE WRONG SHADE AGAIN!</span>
        <span>Try Now!</span>
        <img src={blueshade} alt="" />
      </div>

      <div className={css.virtual_right}>
        <div className={css.wrapper}>
          <ReactCompareImage leftImage={After} rightImage={Before} />
        </div>
      </div>
    </div>
  );
};

export default Virtual;
