import React, { useContext } from "react";
import styles from "../Product/Product.module.css";
import { ProductContext } from "../ProductContext";

const TotalItems_Wishlist = () => {
  const { wishlist } = useContext(ProductContext);
  return (
    <div className={styles.TotalItems_Wishlist_container}>
      <div className={styles.TotalItems_Wishlist_subcontainer}>
        <span className={styles.total_item}>
          Total items ({wishlist.length}){" "}
        </span>
        <span className={styles.sortBy}>Sort by </span>
      </div>
    </div>
  );
};

export default TotalItems_Wishlist;
