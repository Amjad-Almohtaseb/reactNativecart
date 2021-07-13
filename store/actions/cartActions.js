import { ADD_ITEM, CHECKOUT, DELETE_ITEM } from "./types";

export const addToCart = (newProduct) => ({
  type: ADD_ITEM,
  payload: newProduct,
});
export const deleteFromCart = (productId) => ({
  type: DELETE_ITEM,
  payload: productId,
});
export const checkoutCart = () => ({
  type: CHECKOUT,
});
