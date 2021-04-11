import React, { useContext } from "react";
import { ProductContext } from "../ProductContext";
import styles from "./Singlepagecss.module.css";

const SinglePage = () => {
  const { singleProduct, isLoading } = useContext(ProductContext);
  return (
    <div>
      {isLoading ? (
        <div className={styles.singleProduct_container}>
          <div className={styles.singleProduct_subcontainer}>
            <div className={styles.singleProduct_name_price}>
              <span className={styles.singleProduct_name}>
                {singleProduct.name}
              </span>
              <span className={styles.singleProduct_price}>
                {singleProduct.price}
              </span>
            </div>
            <div className={styles.singleProduct_wishlist}>
              <span className={styles.singleProduct_icon}> wishlistIcon </span>
              <span className={styles.singleProduct_title}>Wishlist</span>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SinglePage;
