import { ADD_SHOPS, FETCH_SHOPS } from "../actions/types";

const initialState = {
  shops: [],
  loading: true,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SHOPS:
      // action.payload.product.id=state.products[state.products.length-1].id+1;
      // action.payload.product.slug = slugify(action.payload.product.name);
      const { shop } = action.payload;
      return {
        ...state,
        shops: [...state.shops, shop],
      };
    case FETCH_SHOPS:
      return {
        ...state,
        shops: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default shopReducer;
