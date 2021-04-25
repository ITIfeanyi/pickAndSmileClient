import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faStar,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import cart_img from "../../img/shopping-cart (1).png";
import singleCatImg from "../../img/imgSingleCategory.png";
import CssLoader from "../CssLoader/CssLoader";
import { ProductContext } from "../ProductContext";
import styles from "./singleCategory.module.css";
import { Link, useHistory } from "react-router-dom";
import { ProductCategoryContext } from "../ProductCategoryContext";
import NavFooter from "../NavFooter/NavFooter";

const SingleCategory = () => {
  const history = useHistory();

  const {
    cartItems,
    addItem,
    toggleWishlist,
    wishlist,
    handleSingleProductClick,
  } = useContext(ProductContext);
  const { singleCategory, URLcategory } = useContext(ProductCategoryContext);

  const handleSingleCategoryHistory = () => {
    const categoryHis = "/category/" + URLcategory.toLowerCase();
    history.push(categoryHis);
  };

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.subHeader}>
          <span className={styles.goBack}>
            <Link to='/'>
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
          </span>
          <span>
            {" "}
            <p>{URLcategory}</p>
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
      <section className={styles.hero_container}>
        <img className={styles.hero_img} src={singleCatImg} alt='img' />
      </section>
      <div className={styles.product_header}>
        <h3>{URLcategory} category</h3>
      </div>
      {singleCategory.length === 0 ? (
        <div className={styles.CssLoader_product}>{<CssLoader />}</div>
      ) : (
        <div className={styles.product_container}>
          {singleCategory.map((product) => {
            return (
              <div
                key={product.id}
                className={styles.product_subcontainer}
                onClick={() => handleSingleProductClick(product.id)}
              >
                <div className={styles.product_items}>
                  <Link
                    to={`/product/${product.id}`}
                    onClick={handleSingleCategoryHistory}
                    className={styles.img_container}
                  >
                    <img src={product.image_url} alt='img' />
                  </Link>

                  <div className={styles.product_details}>
                    <Link
                      className={styles.singleprod_link}
                      to={`/product/${product.id}`}
                      onClick={handleSingleCategoryHistory}
                    >
                      {" "}
                      <div className={styles.product_name}>
                        {" "}
                        {product.name}{" "}
                      </div>
                      <div className={styles.shortdesc}>
                        {product.shortDescription}
                      </div>
                      <div className={styles.product_price}>
                        ${product.price.toLocaleString()}{" "}
                      </div>
                      <div className={styles.reviews}>
                        <span className={styles.review_star}>
                          <FontAwesomeIcon icon={faStar} />{" "}
                        </span>
                        <span>4.0 (24 Reviews )</span>
                      </div>
                    </Link>
                    <div className={styles.wishlist_addtoCart}>
                      <div className={styles.wishlist_toggle}>
                        {
                          <FontAwesomeIcon
                            icon={faHeart}
                            onClick={() => toggleWishlist(product)}
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
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <NavFooter />
    </div>
  );
};

export default SingleCategory;
