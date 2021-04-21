import React, { useContext } from "react";
import Header from "../Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import styles from "./Product.module.css";
import NavFooter from "../NavFooter/NavFooter";

import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";
import { ProductCategoryContext } from "../ProductCategoryContext";
import img1 from "../../img/hero1.png";
import img2 from "../../img/hero2.png";

import smaple1 from "../../img/lens2_homepage.jpg";
import smaple2 from "../../img/lens_homepage.jpg";
import smaple3 from "../../img/len_homepage.jpg";
import smaple4 from "../../img/canon1_home.jpg";
import smaple5 from "../../img/theter_home.jpg";
import smaple6 from "../../img/washingmachine_home.jpg";
import smaple7 from "../../img/freezer_home.jpg";
import smaple8 from "../../img/tv_home.jpg";

import { useHistory } from "react-router-dom";
const Product = () => {
  const history = useHistory();

  const { user } = useContext(UserContext);

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
          <h4>Hello, {user}</h4>
        </div>
      </div>
      <div className={styles.ProductDeliver}>
        <p className={styles.ProductDeliverText}>
          <FontAwesomeIcon
            icon={faLocationArrow}
            className={styles.ProductDeliverIcon}
          />
          Find your cheap and quality products
        </p>
      </div>
      <div className={styles.hero_container}>
        <img className={styles.hero} src={img1} alt='img' />
      </div>

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
      <article className={styles.product_content_container}>
        <div className={styles.product_content_grid}>
          <div className={styles.product_img_container}>
            <img src={smaple1} alt='img' className={styles.product_content} />
          </div>
          <div className={styles.product_img_container}>
            <img src={smaple2} alt='img' className={styles.product_content} />
          </div>
        </div>
        <div></div>
        <div className={styles.product_content_grid}>
          <div className={styles.product_img_container}>
            <img src={smaple3} alt='img' className={styles.product_content} />
          </div>
          <div className={styles.product_img_container}>
            <img src={smaple4} alt='img' className={styles.product_content} />
          </div>
        </div>
        <div className={styles.seeMore}>
          <Link
            onClick={() => handleSetURLcategory("Camera")}
            to='/category/camera'
            className={styles.Link_category}
          >
            See more Cameras & Lens
          </Link>
        </div>
      </article>

      <div className={styles.hero_container}>
        <img className={styles.hero} src={img2} alt='img' />
      </div>

      <article className={styles.product_content_container}>
        <div className={styles.product_content_grid}>
          <div className={styles.product_img_container}>
            <img src={smaple5} alt='img' className={styles.product_content} />
          </div>
          <div className={styles.product_img_container}>
            <img src={smaple6} alt='img' className={styles.product_content} />
          </div>
        </div>
        <div></div>
        <div className={styles.product_content_grid}>
          <div className={styles.product_img_container}>
            <img src={smaple7} alt='img' className={styles.product_content} />
          </div>
          <div className={styles.product_img_container}>
            <img src={smaple8} alt='img' className={styles.product_content} />
          </div>
        </div>
        <div className={styles.seeMore}>
          <Link
            onClick={() => handleSetURLcategory("Camera")}
            to='/category/camera'
            className={styles.Link_category}
          >
            See more Appliances
          </Link>
        </div>
      </article>

      <NavFooter />
    </>
  );
};

export default Product;
