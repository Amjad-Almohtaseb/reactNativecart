import productReducer from "./productReducer";
import { combineReducers } from "redux";
import shopReducer from "./shopsReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  carts: cartReducer,
  products: productReducer,
  shops: shopReducer,
});

export default rootReducer;
