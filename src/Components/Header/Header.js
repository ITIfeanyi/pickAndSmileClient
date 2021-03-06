import React, { useContext } from "react";
import cart_img from "../../img/shopping-cart (1).png";

import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";
import { ProductContext } from "../ProductContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { cartItems } = useContext(ProductContext);
  return (
    <>
      <section className={styles.headerContainerTop}>
        <div className={styles.headerContainer}>
          <div className={styles.headerNav_title}>
            <div className={styles.headerNavbar}>
              <Navbar />
            </div>
            <div className={styles.headerTitle_container}>
              <Link className={styles.header_link} to='/'>
                <h3 className={styles.headerTitle}>Pick and Smile</h3>
              </Link>
            </div>
          </div>

          <div className={styles.headerCartContainer}>
            <Link to='/cart'>
              <div className={styles.headerCart}>
                <img src={cart_img} alt='img' />
                <span className={styles.headerCartLength}>
                  {cartItems.length}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
