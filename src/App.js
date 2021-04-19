import "./App.css";
import { Switch, Route } from "react-router-dom";
import Product from "./Components/Product/Product";
import SignUp from "./Components/SignIn_SignUp/SignUp";
import SignIn from "./Components/SignIn_SignUp/SignIn";
import ProductContextProvider from "./Components/ProductContext";
import UserContextProvider from "./Components/UserContext";
import Cart from "./Components/Cart/Cart";
import NewProduct from "./Components/NewProduct/NewProduct";
import Signout from "./Components/Signout/Signout";
import Wishlist from "./Components/Wishlist/Wishlist";
import SingleCategory from "./Components/SingleCategory/SingleCategory";
import SinglePage from "./Components/Singlepage/SinglePage";
import ProductCategoryContextProvider from "./Components/ProductCategoryContext";

function App() {
  return (
    <UserContextProvider>
      <ProductContextProvider>
        <ProductCategoryContextProvider>
          <div className='App'>
            <Switch>
              <Route exact path='/'>
                <Product />
              </Route>
              <Route path='/cart'>
                <Cart />
              </Route>
              <Route path='/wishlist'>
                <Wishlist />
              </Route>
              <Route path='/sign-in'>
                <SignIn />
              </Route>
              <Route path='/sign-up'>
                <SignUp />
              </Route>
              <Route path='/signout'>
                <Signout />
              </Route>
              <Route path='/category/:id'>
                <SingleCategory />
              </Route>
              <Route path='/new-product'>
                <NewProduct />
              </Route>
              <Route path='/product/:id'>
                <SinglePage />
              </Route>
              <Route path='/contact'></Route>
            </Switch>
          </div>
        </ProductCategoryContextProvider>
      </ProductContextProvider>
    </UserContextProvider>
  );
}

export default App;
