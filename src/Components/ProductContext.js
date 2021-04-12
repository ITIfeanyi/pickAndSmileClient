import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [skinCare, setSkinCare] = useState([]);
  const [singleProduct, setSingleProduct] = useState({});
  const [singleProductCount, setSingleProductCount] = useState(0);
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("pickandsmile_wishlist")) || []
  );
  const [wishlistToggler, setWishlistToggler] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("pickAndSmile")) || []
  );

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    discount: "",
    shortDescription: "",
    description: ``,
    image_url: "",
    category: "",
    stock_available: "",
  });
  const [wasProductUploaded, setWasProductUploaded] = useState(null);

  //cartitem localStorage
  useEffect(() => {
    localStorage.setItem("pickAndSmile", JSON.stringify(cartItems));
    localStorage.setItem("pickandsmile_wishlist", JSON.stringify(wishlist));
  });

  const handleNewProduct = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };
  const handleNewProductSubmit = (e) => {
    e.preventDefault();

    const {
      name,
      price,
      category,
      description,
      discount,
      image_url,
      shortDescription,
      stock_available,
    } = newProduct;

    const requestBody = {
      query: `
      mutation{
        createProduct(input:{name:"${name}",description:"${description
        .toString()
        .trim()}",discount:${discount},shortDescription:"${shortDescription}",price:${+price},image_url:"${image_url}",category:"${category}",stock_available:${stock_available}}){
          name  
          category
        }
      }
      `,
    };

    fetch("https://sheltered-basin-40908.herokuapp.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setNewProduct({
            name: "",
            price: "",
            discount: "",
            shortDescription: "",
            description: ``,
            image_url: "",
            category: "",
            stock_available: "",
          });
          setWasProductUploaded(true);
        } else {
          setWasProductUploaded(false);
        }
      });
  };
  useEffect(() => {
    const requestBody = {
      query: `
      query{
        getSkincare{
          id
          name
          description
          price
          image_url
          category
          stock_available
          shortDescription
          discount
        }
      }
      `,
    };
    fetch("https://sheltered-basin-40908.herokuapp.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    })
      .then((res) => {
        if (!res.ok && res.status !== 200) {
          throw new Error(
            "unable to fetch data, please make sure you are connected to the internet"
          );
        }
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        setSkinCare(data.data.getSkincare);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  //wishlist
  const toggleWishlist = (product) => {
    const exist = wishlist.find((x) => x.id === product.id);
    if (exist) {
      setWishlistToggler(!wishlistToggler);
      setWishlist(wishlist.filter((x) => x.id !== product.id));
    } else {
      setWishlistToggler(!wishlistToggler);
      setWishlist([...wishlist, product]);
    }
  };
  //  handleSingleProductClick
  const handleSingleProductClick = (id) => {
    setSingleProductCount(1);
    const requestBody = {
      query: `
      query{
        getSingleProduct(id:"${id}"){
          id
          name
          description
          price
          image_url        
        }
      }
      `,
    };
    fetch("https://sheltered-basin-40908.herokuapp.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    })
      .then((res) => {
        if (!res.ok && res.status !== 200) {
          throw new Error(
            "unable to fetch data, please make sure you are connected to the internet"
          );
        }
        return res.json();
      })
      .then((data) => {
        setSingleProduct(data.data.getSingleProduct);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  //single page add
  const singleProductAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    console.log(exist);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id
            ? { ...exist, qty: exist.qty + singleProductCount }
            : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: singleProductCount }]);
    }
  };
  const singleProductIncrement = () => {
    setSingleProductCount(singleProductCount + 1);
  };

  const singleProductDecrement = () => {
    setSingleProductCount(singleProductCount - 1);
  };
  // cart
  const addItem = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    console.log(exist);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const removeItem = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  useEffect(() => {
    const requestBody = {
      query: `
      query{
        getProducts{
          id
          name
          description
          price
          image_url
          category
          stock_available
          shortDescription
          discount
          
        }
      }
      `,
    };
    fetch("https://sheltered-basin-40908.herokuapp.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    })
      .then((res) => {
        if (!res.ok && res.status !== 200) {
          throw new Error(
            "unable to fetch data, please make sure you are connected to the internet"
          );
        }
        return res.json();
      })

      .then((data) => {
        setIsLoading(false);
        setProducts(data.data.getProducts);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        isLoading,
        error,
        addItem,
        removeItem,
        cartItems,
        newProduct,
        handleNewProduct,
        handleNewProductSubmit,
        wasProductUploaded,
        toggleWishlist,
        wishlistToggler,
        wishlist,
        skinCare,
        handleSingleProductClick,
        singleProduct,
        singleProductAdd,
        singleProductIncrement,
        singleProductDecrement,
        singleProductCount,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
