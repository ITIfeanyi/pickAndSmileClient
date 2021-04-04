import React, { useContext } from "react";
import Header from "../Header/EmptyHeader";
import styles from "./NewProduct.module.css";
import { ProductContext } from "../ProductContext";

const NewProduct = () => {
  const { handleNewProduct, handleNewProductSubmit } = useContext(
    ProductContext
  );
  return (
    <>
      <div className={styles.newProduct_container}>
        <Header />
        <h3>Add new product</h3>
        <div className={styles.form_container}>
          <form onSubmit={handleNewProductSubmit}>
            <div className={styles.form_inputContainer}>
              <label htmlFor='name'>Name</label>
              <input
                name='name'
                type='text'
                placeholder='name'
                required
                onChange={handleNewProduct}
              />
            </div>
            <div className={styles.form_inputContainer}>
              <label htmlFor='price'>Price</label>
              <input
                name='price'
                type='number'
                step='0.01'
                placeholder='price'
                required
                onChange={handleNewProduct}
              />
            </div>
            <div className={styles.form_inputContainer}>
              <label htmlFor='discount'>Discount</label>
              <input
                name='discount'
                type='text'
                placeholder='discount'
                required
                onChange={handleNewProduct}
              />
            </div>
            <div className={styles.form_inputContainer}>
              <label htmlFor='shortDescription'>Short description</label>
              <input
                type='text'
                name='shortDescription'
                placeholder='Short description btw 5- 15 words'
                required
                onChange={handleNewProduct}
              />
            </div>
            <div className={styles.form_inputContainer}>
              <label htmlFor='stock available'>Stock Available</label>
              <input
                name='stock_available'
                type='text'
                placeholder='40 '
                required
                onChange={handleNewProduct}
              />
            </div>

            <div className={styles.form_inputContainer}>
              <label htmlFor='image url'>Image URL</label>
              <input
                type='url'
                name='image_url'
                required
                onChange={handleNewProduct}
                placeholder='https://image.url'
              />
            </div>
            <div className={styles.form_inputContainer}>
              <label htmlFor='product-category'>
                Choose the product category:
              </label>
              <select name='category' required onChange={handleNewProduct}>
                <option>Please select a category</option>

                <option value='Groceries'>Groceries</option>
                <option value='Skincare'>Skincare</option>
                <option value='Appliances'>Appliances</option>
                <option value='Phones'>Phones</option>
                <option value='Clothes'>Clothes</option>
                <option value='Computers'>Computers</option>
                <option value='Toys'>Toys</option>
                <option value='Kitchen'>Kitchen</option>
                <option value='Toys'>Toys</option>
                <option value='Health'>Health</option>
                <option value='Funiture'>Funiture</option>
              </select>
            </div>
            <div className={styles.form_inputContainer}>
              <label htmlFor='description'>Description</label>
              <textarea
                className={styles.textarea}
                name='description'
                required
                placeholder='Please add more descriptive words about this product.'
                onChange={handleNewProduct}
              ></textarea>
            </div>
            <div className={styles.form_submit_container}>
              <button className={styles.form_submit} type='submit'>
                Submit new product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewProduct;
