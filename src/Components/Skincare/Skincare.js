import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faStar,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import cart_img from "../../img/shopping-cart (1).png";

import CssLoader from "../CssLoader/CssLoader";
import { ProductContext } from "../ProductContext";
import styles from "./Skin.module.css";
import SkincareNavFooter from "../NavFooter/SkincareNavFooter";
import { Link } from "react-router-dom";

const Skincare = () => {
  const {
    cartItems,
    products,
    isLoading,
    addItem,
    toggleWishlist,
    wishlist,
  } = useContext(ProductContext);
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.subHeader}>
          <span>
            <Link to='/'>
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
          </span>
          <span>
            {" "}
            <p>Skincare</p>
          </span>
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
      </header>
      <div className={styles.scrollVertical_info}>
        <div>Cleaners</div>
        <div>Moisturizers</div>
        <div>Toner</div>
        <div>New-In</div>
      </div>

      <div className={styles.product_header}>
        <h3>From Your Faves!</h3>
      </div>
      {!isLoading ? (
        <div className={styles.product_container}>
          {products.map((product) => {
            return (
              <div key={product.id} className={styles.product_subcontainer}>
                <div className={styles.product_items}>
                  <div className={styles.img_container}>
                    <img src={product.image_url} alt='img' />
                  </div>
                  <div className={styles.product_details}>
                    {" "}
                    <div className={styles.product_name}> {product.name} </div>
                    <div className={styles.shortdesc}>
                      {product.shortDescription}
                    </div>
                    <div className={styles.product_price}>
                      ${product.price}{" "}
                    </div>
                    <div className={styles.reviews}>
                      <span className={styles.review_star}>
                        <FontAwesomeIcon icon={faStar} />{" "}
                      </span>
                      <span>4.5 star (20 Reviews )</span>
                    </div>
                    <div className={styles.wishlist_addtoCart}>
                      <div
                        className={styles.wishlist_toggle}
                        onClick={() => toggleWishlist(product)}
                      >
                        {
                          <FontAwesomeIcon
                            icon={faHeart}
                            className={
                              wishlist.find((x) => x.id === product.id)
                                ? styles.wishlist_red
                                : ""
                            }
                          />
                        }
                      </div>
                      <button
                        className={styles.product_addCart}
                        onClick={() => addItem(product)}
                      >
                        <span>
                          <FontAwesomeIcon icon={faShoppingCart} />
                        </span>
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.CssLoader_product}>{<CssLoader />}</div>
      )}

      <SkincareNavFooter />
    </div>
  );
};

export default Skincare;
