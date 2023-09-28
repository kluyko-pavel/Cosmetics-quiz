import { IProduct } from "../../../types";
import { FavoriteIcon } from "../../icons";
import "./ProductCard.scss";

export const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div className="product-card">
      <img
        className="product-card__img"
        src={product.image}
        alt="product-img"
      />
      <div className="product-card__info">
        <p className="product-card__title">{product.title}</p>
        <div className="product-card__price">
          {product.oldPrice && (
            <span className="product-card__price-old">{product.oldPrice}</span>
          )}
          <span className="product-card__price-new">{product.price} руб.</span>
        </div>
      </div>
      <button className="product-card__favorite">
        <FavoriteIcon />
      </button>
    </div>
  );
};
