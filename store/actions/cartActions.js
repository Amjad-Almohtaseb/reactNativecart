import { ADD_ITEM, CHECKOUT, DELETE_ITEM } from "./types";
import instance from "./instance";

export const addToCart = (newProduct) => ({
  type: ADD_ITEM,
  payload: newProduct,
});
export const deleteFromCart = (productId) => ({
  type: DELETE_ITEM,
  payload: productId,
});
export const checkoutCart = (items) => async (dispatch) => {
  await instance.post("/checkout", items);

  console.log(items);
  dispatch({
    type: CHECKOUT,
    payload: [],
  });
};
