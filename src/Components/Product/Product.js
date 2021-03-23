import React, { useContext } from "react";
import Header from "../Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Product.module.css";
import NavFooter from "../NavFooter/NavFooter";

import { UserContext } from "../UserContext";
import CssLoader from "../CssLoader/CssLoader";
import { ProductContext } from "../ProductContext";
const Product = () => {
  const { user } = useContext(UserContext);
  const { products, isLoading, addItem } = useContext(ProductContext);

  return (
    <>
      <Header />
      <div className={styles.welcome_container}>
        <div className={styles.welcome_subcontainer}>
          <h4>Welcome {user}</h4>
        </div>
        <div className={styles.help}>What can we help you with today?</div>
      </div>

      <div className={styles.scrollVertical_info}>
        <div>Stores Nearby</div>
        <div>Skincare</div>
        <div>Eletronics</div>
        <div>Appliances</div>
        <div>Toys</div>
        <div>Health</div>
        <div>Kitchen</div>
        <div>Groceries</div>
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
                    <div
                      className={styles.wishlist_addtoCart}
                      onClick={() => addItem(product)}
                    >
                      <div className={styles.wishlist_toggle}>
                        <FontAwesomeIcon icon={faHeart} />
                      </div>
                      <button className={styles.product_addCart}>
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

      <NavFooter />
    </>
  );
};

export default Product;
