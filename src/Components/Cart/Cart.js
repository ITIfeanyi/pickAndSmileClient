import React, { useContext } from "react";
import { ProductContext } from "../ProductContext";
import styles from "./Cart.module.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import NavFooter from "../NavFooter/NavFooter";

const Cart = () => {
  const { cartItems, removeItem, addItem } = useContext(ProductContext);
  const subtotal = cartItems
    .reduce((acc, cur) => acc + cur.price * cur.qty, 0)
    .toFixed(2);

  return (
    <>
      <Header />
      <div className={styles.goBackHome}>
        <Link to='/'>
          <span>
            <FontAwesomeIcon icon={faLongArrowAltLeft} />
          </span>
        </Link>
      </div>

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
                          ${(item.qty * item.price).toFixed(2)}{" "}
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
                <p>{subtotal}</p>
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
