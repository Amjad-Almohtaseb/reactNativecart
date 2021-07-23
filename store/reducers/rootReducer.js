import productReducer from "./productReducer";
import { combineReducers } from "redux";
import shopReducer from "./shopsReducer";
import cartReducer from "./cartReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  user: authReducer,
  items: cartReducer,
  products: productReducer,
  shops: shopReducer,
});

export default rootReducer;
