import React, { useContext } from "react";
import { ProductCategoryContext } from "../ProductCategoryContext";

import styles from "./ScrollverticalCategory.module.css";
import { Link, useHistory } from "react-router-dom";

const ScrollverticalCategory = () => {
  const { setURLcategory } = useContext(ProductCategoryContext);
  const history = useHistory();

  const handleSetURLcategory = (url) => {
    setURLcategory(url);
    history.push("/");
  };

  return (
    <div>
      <div className={styles.scrollVertical_info}>
        <div>
          <Link
            className={styles.skincareLink}
            onClick={() => handleSetURLcategory("Camera")}
            to='/category/camera'
          >
            Cameras
          </Link>{" "}
        </div>
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
          <Link
            onClick={() => handleSetURLcategory("Kitchen")}
            className={styles.skincareLink}
            to={"/category/kitchen"}
          >
            Kitchen
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default ScrollverticalCategory;
