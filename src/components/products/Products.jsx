import React, { useState } from "react";
import css from "./Products.module.css";
import heartArrow from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Products = () => {
  const parent = useAutoAnimate();
  const [menuProducts, setMenuProducts] = useState(ProductsData);

  const filter = (type) => {
    setMenuProducts(ProductsData.filter((product) => product.type === type));
  };
  return (
    <div className={css.container}>
      <img src={heartArrow} alt="arrow" />
      <h1>Our Feature Products</h1>

      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={() => setMenuProducts(ProductsData)}>All</li>
          <li onClick={() => filter("skin care")}>Skin Care</li>
          <li onClick={() => filter("conditioner")}>Conditioner</li>
          <li onClick={() => filter("foundation")}>Foundation</li>
        </ul>

        <div className={css.list} ref={parent}>
          {menuProducts && menuProducts.length > 0 ? (
            menuProducts.map((product, i) => (
              <div className={css.product} key={i}>
                <div className="left-s">
                  <div className="name">
                    <span>{product.name}</span>
                    <span>{product.detail}</span>
                  </div>
                  <span>{product.price}₹</span>
                  <div>Show Now</div>

                  <img src={product.img} alt="product" className="img-p" />
                </div>
              </div>
            ))
          ) : (
            <p>Products data not fetched</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
