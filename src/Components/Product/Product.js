import React, { useContext } from "react";
import Header from "../Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faStar,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Product.module.css";
import NavFooter from "../NavFooter/NavFooter";

import { UserContext } from "../UserContext";
import CssLoader from "../CssLoader/CssLoader";
import { ProductContext } from "../ProductContext";
import { Link } from "react-router-dom";
import Swiper from "../SwiperBox/SwiperBox";

const Product = () => {
  const { user } = useContext(UserContext);
  const { products, isLoading, addItem, toggleWishlist, wishlist } = useContext(
    ProductContext
  );
  return (
    <>
      <Header />
      <div className={styles.welcome_container}>
        <div className={styles.welcome_subcontainer}>
          <h4>Welcome {user}</h4>
        </div>
        <div className={styles.help}>What can we help you with today?</div>
      </div>

      <Swiper />

      <div className={styles.scrollVertical_info}>
        <div>
          <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
          <span className={styles.storeNearby}> Stores Nearby</span>
        </div>
        <div>
          <Link className={styles.skincareLink} to='/skincare'>
            Skincare
          </Link>{" "}
        </div>
        <div>Eletronics</div>
        <div>Groceries</div>
        <div>Appliances</div>
        <div>Toys</div>
        <div>Health</div>
        <div>Kitchen</div>
      </div>
      <div className={styles.product_header}>
        <h3>Groceries You'll Love</h3>
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

      <NavFooter />
    </>
  );
};

export default Product;
