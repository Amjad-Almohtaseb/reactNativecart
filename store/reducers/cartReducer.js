import * as actionTypes from "../actions/types";

const initialState = {
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      const newProduct = action.payload;
      const foundProduct = state.items.find(
        (item) => item.productId === newProduct.productId
      );
      if (foundProduct)
        return {
          ...state,
          items: state.items.map((item) =>
            item === foundProduct ? newProduct : item
          ),
        };
      else
        return {
          ...state,
          items: [...state.items, { ...newProduct }],
        };
    case actionTypes.DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.productId !== action.payload),
      };
    case actionTypes.CHECKOUT:
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
};

export default reducer;
