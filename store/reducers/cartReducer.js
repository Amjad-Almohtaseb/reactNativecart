import * as actionTypes from "../actions/types";

const initialState = {
  items: [
    {
      itemId: 19,
      quantity: 1,
    },
    {
      itemId: 20,
      quantity: 2,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
