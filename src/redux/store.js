import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { userReducer } from "./reducers/userReducer";
import { productDetailsReducer, productListReducer } from "./reducers/productReducer";
// import { cartReducer } from "./reducers/cartReducer";

const rootReducer = combineReducers({
  user: userReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  //   cart: cartReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
