import React, { useContext } from "react";
import { ProductContext } from "../ProductContext";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import NavFooter from "../NavFooter/NavFooter";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const history = useHistory();
  const { cartItems, removeItem, addItem } = useContext(ProductContext);
  const subtotal = cartItems.reduce((acc, cur) => acc + cur.price * cur.qty, 0);

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <>
      <section>
        <span onClick={handleGoBack} className={styles.backButtonCart}>
          <FontAwesomeIcon icon={faArrowLeft} className={styles.backbtn_icon} />
        </span>
        <span className={styles.logo}>
          <Link to='/'>
            <h3>Pick and Smile</h3>
          </Link>
        </span>
      </section>

      {cartItems.length > 0 ? (
        <div className={styles.cartContainer}>
          <div className={styles.cartSubcontainer}>
            {cartItems.map((item) => {
              return (
                <div className={styles.cart_item} key={item.id}>
                  <div className={styles.cart_item_container}>
                    <div className={styles.titlebox}>
                      <div className={styles.name_item}>
                        <p> {item.name} </p>{" "}
                      </div>
                    </div>

                    <div className={styles.qty_inc_dec_container}>
                      <div className={styles.qty_btn_box}>
                        <button onClick={() => removeItem(item)}> - </button>
                        <p> {item.qty} </p>
                        <button onClick={() => addItem(item)}> + </button>
                      </div>
                      <div className={styles.Price_subprice_container}>
                        <p className={styles.Price_subtotal}>
                          ${(item.qty * item.price).toLocaleString()}{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className={styles.total_container}>
              <div className={styles.total}>
                <p>Total</p>
                <p>{subtotal.toLocaleString()}</p>
              </div>
            </div>
            <div className={styles.checkout}>
              <p>Checkout</p>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.cart_empty}>
          <div className={styles.cart_empty}>
            <h4> Your cart is empty </h4>
            <p>
              Go to <Link to='/'>Homepage</Link> and click the "add" button to
              fill the cart
            </p>
          </div>
        </div>
      )}
      <NavFooter />
    </>
  );
};

export default Cart;
