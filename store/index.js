import { createStore, compose, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { checkForToken } from "./actions/authActions";
// import { checkForToken } from "../action/authActions";
import { fetchProducts } from "./actions/productActions";
import { fetchShops } from "./actions/shopsAction";

import rootReducer from "./reducers/rootReducer";

//const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchProducts());
store.dispatch(fetchShops());
store.dispatch(checkForToken());

export default store;
