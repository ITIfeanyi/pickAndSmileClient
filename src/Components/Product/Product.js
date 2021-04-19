import React, { useContext } from "react";
import Header from "../Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./Product.module.css";
import NavFooter from "../NavFooter/NavFooter";

import { UserContext } from "../UserContext";
import CssLoader from "../CssLoader/CssLoader";
import { ProductContext } from "../ProductContext";
import { Link } from "react-router-dom";
import Swiper from "../SwiperBox/SwiperBox";
import { ProductCategoryContext } from "../ProductCategoryContext";

import { useHistory } from "react-router-dom";
const Product = () => {
  const history = useHistory();

  const { user } = useContext(UserContext);
  const { products, isLoading, addItem, toggleWishlist, wishlist } = useContext(
    ProductContext
  );
  const { setURLcategory } = useContext(ProductCategoryContext);

  const handleSetURLcategory = (url) => {
    setURLcategory(url);
    history.push("/");
  };
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
          <Link
            className={styles.skincareLink}
            onClick={() => handleSetURLcategory("Skincare")}
            to='/category/skincare'
          >
            Skincare
          </Link>{" "}
        </div>
        <div>
          <Link
            className={styles.skincareLink}
            onClick={() => handleSetURLcategory("Clothes")}
            to={"/category/clothes"}
          >
            Clothes
          </Link>{" "}
        </div>
        <div>
          <Link
            className={styles.skincareLink}
            onClick={() => handleSetURLcategory("Groceries")}
            to={"/category/groceries"}
          >
            Groceries
          </Link>{" "}
        </div>
        <div>
          <Link
            className={styles.skincareLink}
            onClick={() => handleSetURLcategory("Appliances")}
            to={"/category/appliances"}
          >
            Appliances
          </Link>{" "}
        </div>
        <div>
          <Link
            className={styles.skincareLink}
            onClick={() => handleSetURLcategory("Computers")}
            to={"/category/computers"}
          >
            Computers
          </Link>{" "}
        </div>
        <div>
          <Link
            className={styles.skincareLink}
            onClick={() => handleSetURLcategory("Health")}
            to={"/category/health"}
          >
            Health
          </Link>{" "}
        </div>
        <div>
          <Link className={styles.skincareLink} to='/kitchen'>
            Kitchen
          </Link>{" "}
        </div>
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
