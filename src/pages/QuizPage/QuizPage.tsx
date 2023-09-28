import { QuizForm } from "../../components";
import "./QuizPage.scss";

export const QuizPage = () => {
  return (
    <section className="quiz-page">
      <div className="container">
        <div className="quiz-page-flex-container">
          <h1 className="quiz-page__title">Онлайн-подбор средств для лица</h1>
          <p className="quiz-page__description">
            Пройдите короткий тест и получите список наиболее подходящих для вас
            косметических продуктов
          </p>
          <QuizForm />
        </div>
      </div>
    </section>
  );
};
