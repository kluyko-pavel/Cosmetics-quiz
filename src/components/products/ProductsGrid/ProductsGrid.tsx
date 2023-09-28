import { useDispatch, useSelector } from "react-redux";
import "./ProductsGrid.scss";
import { IProduct, IStoreState } from "../../../types";
import { useEffect } from "react";
import { loadProducts } from "../../../redux/action-creators/products-action_creator";
import { ProductCard } from "../ProductCard";
import { Loader } from "../../Loader";

export const ProductsGrid = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: IStoreState) => state.products.products);
  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  const isLoading = useSelector((state: IStoreState) => state.ui.isLoading);

  return (
    <div className="products-grid">
      {isLoading ? (
        <Loader />
      ) : (
        products.map((product: IProduct) => (
          <ProductCard product={product} key={product.id} />
        ))
      )}
    </div>
  );
};
