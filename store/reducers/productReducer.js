import {
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  FETCH_PRODUCTS,
  DELETE_PRODUCT,
} from "../actions/types";
/*  {products:[{},{}],counter}*/

const initialState = {
  products: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      const productToKeep = state.products.filter(
        (product) => product.id !== action.payload.productId
      );
      return {
        ...state,
        products: productToKeep,
      };

    case ADD_PRODUCT:
      // action.payload.product.id=state.products[state.products.length-1].id+1;
      // action.payload.product.slug = slugify(action.payload.product.name);
      const { product } = action.payload;
      return {
        ...state,
        products: [...state.products, product],
      };
    case UPDATE_PRODUCT:
      const { updatedProduct } = action.payload;
      return {
        ...state, //products:[value]
        products: state.products.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        ),
      };
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
