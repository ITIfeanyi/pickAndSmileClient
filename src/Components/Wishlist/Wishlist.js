import React, { useContext } from "react";
import Header from "../Header/Header";
import NavFooter from "../NavFooter/NavFooter";
import { ProductContext } from "../ProductContext";
import styles from "../Product/Product.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import CssLoader from "../CssLoader/CssLoader";
import { Link } from "react-router-dom";
import TotalItemsWishlist from "./TotalItemsWishlist";
import { useHistory } from "react-router-dom";

const Wishlist = () => {
  const history = useHistory();

  const { wishlist, isLoading, addItem, toggleWishlist } = useContext(
    ProductContext
  );
  const handleSingleCategoryHistory = () => {
    const categoryHis = "/wishlist";
    history.push(categoryHis);
  };
  return (
    <div>
      <Header />
      <TotalItemsWishlist />

      {isLoading ? (
        ""
      ) : (
        <div>
          {wishlist.length <= 0 && (
            <div className={styles.wishlist_empty_container}>
              <div className={styles.wishlist_empty_subcontainer}>
                <p className={styles.wishlist_empty_text}>
                  <strong>Your wishlist is empty </strong>
                </p>
                <p>
                  Go to the <Link to='/'>Homepage</Link> to add more item.
                </p>
              </div>
            </div>
          )}
        </div>
      )}
      {!isLoading ? (
        <>
          <div className={styles.product_container}>
            {wishlist.map((product) => {
              return (
                <div key={product.id} className={styles.product_subcontainer}>
                  <div className={styles.product_items}>
                    <div className={styles.img_container}>
                      <img src={product.image_url} alt='img' />
                    </div>

                    <div className={styles.product_details}>
                      {" "}
                      <Link
                        to={`/product/${product.id}`}
                        onClick={handleSingleCategoryHistory}
                        className={styles.singleprod_link}
                      >
                        <div className={styles.product_name}>
                          {product.name}{" "}
                        </div>
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
                      </Link>
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
        </>
      ) : (
        <div className={styles.CssLoader_product}>{<CssLoader />}</div>
      )}
      <NavFooter />
    </div>
  );
};

export default Wishlist;
