import React, { useContext } from "react";
import { ProductContext } from "../ProductContext";
import styles from "./Singlepagecss.module.css";
import CssLoader from "../CssLoader/CssLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faStar,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory, Link } from "react-router-dom";
import cart_img from "../../img/shopping-cart (1).png";
import NavFooter from "../NavFooter/NavFooter";

const SinglePage = () => {
  const {
    singleProduct,
    toggleWishlist,
    wishlist,
    singleProductAdd,
    singleProductIncrement,
    singleProductDecrement,
    singleProductCount,
    cartItems,
  } = useContext(ProductContext);

  const history = useHistory();

  const handleGoBack = () => {
    history.go(-1);
  };
  const handleCartHistory = () => {
    history.push(`/product/${singleProduct.id}`);
  };
  return (
    <>
      {Object.values(singleProduct).length === 0 ? (
        <CssLoader />
      ) : (
        <div className={styles.singleProduct_container}>
          <div className={styles.backButton_singleproductImg}>
            <span onClick={handleGoBack} className={styles.backButton}>
              <FontAwesomeIcon
                icon={faArrowLeft}
                className={styles.backbtn_icon}
              />
            </span>
            <span className={styles.headerCartContainer}>
              <Link to='/cart' onClick={handleCartHistory}>
                <div className={styles.headerCart}>
                  <img src={cart_img} alt='img' />
                  <span className={styles.headerCartLength}>
                    {cartItems.length}
                  </span>
                </div>
              </Link>
            </span>
            <div className={styles.singleProductimg_container}>
              <img
                src={singleProduct.image_url}
                className={styles.singleProductimg}
                alt='img'
              />
            </div>
          </div>
          <div className={styles.bottom_container}>
            <div className={styles.singleProduct_subcontainer}>
              <div className={styles.singleProduct_name_price}>
                <span className={styles.singleProduct_name}>
                  {singleProduct.name}
                </span>
                <span className={styles.singleProduct_price}>
                  $ {singleProduct.price.toLocaleString()}
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
              </div>
            </div>

            <div className={styles.reviews}>
              {" "}
              <p>
                <FontAwesomeIcon className={styles.star} icon={faStar} /> 3.8
                stars(2 Reviews){" "}
              </p>{" "}
            </div>
            <div className={styles.singleProduct_description_container}>
              <p className={styles.description}>{singleProduct.description}</p>
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
          </div>
        </div>
      )}
      <NavFooter />
    </>
  );
};

export default SinglePage;
