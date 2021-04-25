import React, { useContext } from "react";
import Header from "../Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import styles from "./Product.module.css";
import NavFooter from "../NavFooter/NavFooter";

import { UserContext } from "../UserContext";
import { Link, useHistory } from "react-router-dom";
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
import ScrollverticalCategory from "../ScrollVerticalCategory/ScrollverticalCategory";
import { ProductContext } from "../ProductContext";
import CssLoader1 from "../CssLoader/CssLoader1";

const Product = () => {
  const history = useHistory();

  const handleSingleFrontHistory = () => {
    history.push("/");
  };

  const { user } = useContext(UserContext);

  const { singleFrontItem, handleSingleProductClick } = useContext(
    ProductContext
  );
  console.log(singleFrontItem, "baby");
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

      <ScrollverticalCategory />

      <section className={styles.singleFrontItem_container}>
        <div className={styles.singleFrontItem_subcontainer}>
          {singleFrontItem.length > 1 ? (
            singleFrontItem.map((item) => {
              return (
                <article
                  key={item.id}
                  className={styles.singleFrontItem_singleItem}
                >
                  <div
                    onClick={() => handleSingleProductClick(item.id)}
                    className={styles.singleFrontItem_box}
                  >
                    <Link
                      onClick={handleSingleFrontHistory}
                      to={`/product/${item.id}`}
                      className={styles.singleFrontItem_link}
                    >
                      <div className={styles.singleFrontItem_img}>
                        <img src={item.image_url} alt='img' />
                      </div>
                      <div className={styles.singleFrontItem_details}>
                        <p className={styles.product_name}>{item.name}</p>
                        <p className={styles.shortdesc}>
                          {item.shortDescription}
                        </p>
                        <p className={styles.singleFrontItem_price_ava}>
                          <span className={styles.product_price}>
                            ${item.price}
                          </span>
                        </p>
                      </div>
                      <button className={styles.singleFrontItem_btn}>
                        View More details
                      </button>
                    </Link>
                  </div>
                </article>
              );
            })
          ) : (
            <CssLoader1 />
          )}
        </div>
      </section>

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

      <article className={styles.product_content_container_bottom}>
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
      </article>
      <div className={styles.navFooter_container}>
        <NavFooter />
      </div>
    </>
  );
};

export default Product;
