import { ProductsGrid } from "../../components";
import "./ResultPage.scss";

export const ResultPage = () => {
  return (
    <section className="result-page">
      <div className="container">
        <h2 className="result-page__title">Результат</h2>
        <p className="result-page__description">
          Мы подобрали для вас наиболее подходящие средства
        </p>
        <ProductsGrid />
      </div>
    </section>
  );
};
