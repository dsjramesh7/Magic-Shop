import React, { useState } from "react";
import pstyle from "./Products.module.css";
import plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Products = () => {
  const [parent] = useAutoAnimate();
  const [menuProducts, setMenuProducts] = useState(ProductsData);

  const filtered = (type) => {
    setMenuProducts(ProductsData.filter((product) => product.type === type));
  };

  return (
    <div className={pstyle.container}>
      <img src={plane} alt="a plane logo" />
      <h1>Our Featured Products</h1>

      <div className={pstyle.products}>
        <ul className={pstyle.menu}>
          <li onClick={() => setMenuProducts(ProductsData)}>All</li>
          <li onClick={() => filtered("skin care")}>Skin Care</li>
          <li onClick={() => filtered("conditioner")}>Condititoners</li>
          <li onClick={() => filtered("foundation")}>Foundations</li>
        </ul>

        <div className={pstyle.list} ref={parent}>
          {menuProducts.map((product, i) => (
            <div key={i} className={pstyle.product}>
              <div className="left-s">
                <div className="name">
                  <span>{product.name}</span>
                  <span>{product.detail}</span>
                </div>

                <span>{product.price}$</span>
                <div>Shop Now</div>
              </div>

              <img className="img-p" src={product.img} alt="products" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
