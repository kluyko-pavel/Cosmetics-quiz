import { put, takeEvery } from "redux-saga/effects";
import { IProduct } from "../../types";
import {
  LOAD_PRODUCTS,
  SET_PRODUCTS,
} from "../action-types/products-action_types";
import { toggleIsLoading } from "./ui-action_creators";

export const setProducts = (products: IProduct[]) => ({
  type: SET_PRODUCTS,
  products,
});

export const loadProducts = () => ({
  type: LOAD_PRODUCTS,
});

function* fetchProducts(): Generator<any, void, any> {
  try {
    yield put(toggleIsLoading(true));
    const response = yield import("../../products.json");
    const res: IProduct[] = yield response.default;
    yield put(setProducts(res));
    yield put(toggleIsLoading(false));
  } catch (error) {
    console.error("Error loading products:", error);
  }
}

export function* watcherProducts() {
  yield takeEvery(LOAD_PRODUCTS, fetchProducts);
}
