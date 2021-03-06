import React, { useContext } from "react";
import styles from "../Product/Product.module.css";
import { ProductContext } from "../ProductContext";

const TotalItems_Wishlist = () => {
  const { wishlist } = useContext(ProductContext);
  return (
    <>
      {wishlist.length >= 1 && (
        <div className={styles.TotalItems_Wishlist_container}>
          <div className={styles.TotalItems_Wishlist_subcontainer}>
            <span className={styles.total_item}>
              Total items ({wishlist.length}){" "}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default TotalItems_Wishlist;
