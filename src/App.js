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

function App() {
  return (
    <UserContextProvider>
      <ProductContextProvider>
        <div className='App'>
          <Switch>
            <Route exact path='/'>
              <Product />
            </Route>
            <Route path='/cart'>
              <Cart />
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

            <Route path='/new-product'>
              <NewProduct />
            </Route>

            <Route path='/contact'></Route>
          </Switch>
        </div>
      </ProductContextProvider>
    </UserContextProvider>
  );
}

export default App;
