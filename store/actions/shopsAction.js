import { ADD_SHOPS, FETCH_SHOPS } from "./types";

import instance from "./instance";
export const fetchShops = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/shops");
      console.log(res.data);
      dispatch({
        type: FETCH_SHOPS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const addShop = (shop) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in shop) formData.append(key, shop[key]);

      const res = await instance.post("/shops", formData);

      dispatch({
        type: ADD_SHOPS,
        payload: {
          shop: res.data,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
