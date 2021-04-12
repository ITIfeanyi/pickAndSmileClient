import React, { useContext } from "react";
import { ProductContext } from "../ProductContext";
import styles from "./Singlepagecss.module.css";
import CssLoader from "../CssLoader/CssLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faStar,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SinglePage = () => {
  const {
    singleProduct,
    isLoading,
    toggleWishlist,
    wishlist,
    singleProductAdd,
    singleProductIncrement,
    singleProductDecrement,
    singleProductCount,
  } = useContext(ProductContext);
  return (
    <>
      {isLoading ? (
        <CssLoader />
      ) : (
        <div className={styles.singleProduct_container}>
          <div className={styles.backButton_singleproductImg}>
            <span className={styles.backButton}>
              <Link className={styles.back} to='/skincare'>
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className={styles.backbtn_icon}
                />
              </Link>
            </span>
            <div className={styles.singleProductimg_container}>
              {/* <img src={singleProduct.image_url} alt='img' /> */}
            </div>
          </div>
          <div className={styles.singleProduct_subcontainer}>
            <div className={styles.singleProduct_name_price}>
              <span className={styles.singleProduct_name}>
                {singleProduct.name}
              </span>
              <span className={styles.singleProduct_price}>
                $ {singleProduct.price}
              </span>
            </div>
            <div className={styles.singleProduct_wishlist}>
              <span
                className={styles.singleProduct_icon}
                onClick={() => toggleWishlist(singleProduct)}
              >
                {" "}
                <FontAwesomeIcon
                  className={
                    wishlist.find((x) => x.id === singleProduct.id)
                      ? styles.wishlist_red
                      : ""
                  }
                  icon={faHeart}
                />{" "}
              </span>
              <span className={styles.singleProduct_title}>Wishlist</span>
            </div>
          </div>
          <div className={styles.reviews}>
            {" "}
            <p>
              <FontAwesomeIcon className={styles.star} icon={faStar} /> 4.5
              stars(22 Reviews){" "}
            </p>{" "}
          </div>
          <div className={styles.singleProduct_description_container}>
            <p className={styles.description}>{singleProduct.description}</p>
            <span className={styles.readmore}>Read more</span>
            <span className={styles.ArrowRight}>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </div>
          <div className={styles.singleProduct_btn_cart}>
            <div className={styles.singleProduct_inc_dec}>
              <button
                disabled={singleProductCount === 0}
                className={styles.dec}
                onClick={() => singleProductDecrement()}
              >
                -
              </button>
              <span className={styles.qty}>{singleProductCount}</span>
              <button
                className={styles.inc}
                onClick={() => singleProductIncrement()}
              >
                +
              </button>
            </div>
            <div className={styles.singleProduct_addtocart}>
              <span className={styles.ShoppingCart}>
                <FontAwesomeIcon icon={faShoppingCart} />{" "}
              </span>
              <button
                onClick={() => singleProductAdd(singleProduct)}
                className={styles.addtocart}
                disabled={singleProductCount === 0}
              >
                Add to cart
              </button>
            </div>
          </div>
          <hr className={styles.line} />
          <section className={styles.reviews_section}>
            <h3>Reviews</h3>
            <div></div>
          </section>
        </div>
      )}
    </>
  );
};

export default SinglePage;
