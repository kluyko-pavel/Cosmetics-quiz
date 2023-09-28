import { IProduct, IProductsState } from "../../types";
import { SET_PRODUCTS } from "../action-types/products-action_types";

const initialState = {
  products: [] as IProduct[],
};

const productsReducer = (state: IProductsState = initialState, action: any) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      const { products } = action;
      return {
        ...state,
        products,
      };
    }

    default: {
      return state;
    }
  }
};

export default productsReducer;
