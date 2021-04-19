import React, { useState, createContext, useEffect } from "react";

export const ProductCategoryContext = createContext();
const ProductCategoryContextProvider = ({ children }) => {
  const [URLcategory, setURLCategory] = useState(
    JSON.parse(localStorage.getItem("pickandsmile_URLCategory")) || ""
  );
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [singleCategory, setSingleCategory] = useState(
    JSON.parse(localStorage.getItem("pickandsmile_singleCategory")) || []
  );

  //cartitem localStorage
  useEffect(() => {
    localStorage.setItem(
      "pickandsmile_singleCategory",
      JSON.stringify(singleCategory)
    );
    localStorage.setItem(
      "pickandsmile_URLCategory",
      JSON.stringify(URLcategory)
    );
    setIsLoading(false);
  });

  const setURLcategory = (url) => {
    setURLCategory(url);
    setSingleCategory([]);
    setIsLoading(true);

    const requestBody = {
      query: `
        query{
            getProductCategory(category:${url}){
              id
              name
              description
              shortDescription
              price
              image_url
              category
              stock_available
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
        setSingleCategory(data.data.getProductCategory);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <ProductCategoryContext.Provider
      value={{ setURLcategory, isLoading, error, URLcategory, singleCategory }}
    >
      {children}
    </ProductCategoryContext.Provider>
  );
};

export default ProductCategoryContextProvider;
