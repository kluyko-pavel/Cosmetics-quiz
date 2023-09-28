import { useDispatch, useSelector } from "react-redux";
import "./QuizForm.scss";
import { IStoreState } from "../../types";
import { Pagination } from "../Pagination";
import { questions } from "../../constants";
import { setAnswers } from "../../redux/action-creators/quiz-action_creators";

export const QuizForm = () => {
  const currentPage = useSelector(
    (state: IStoreState) => state.quiz.currentPage
  );
  const answers = useSelector((state: IStoreState) => state.quiz.answers);
  const dispatch = useDispatch();

  const handleRadioChange = (e: any) => {
    const selectedOptions = [...answers[currentPage - 1]];
    if (e.target.checked) {
      selectedOptions.push(e.target.value);
    } else {
      const indexToRemove = selectedOptions.indexOf(e.target.value);
      selectedOptions.splice(indexToRemove, 1);
    }
    const updatedAnswers = [...answers];
    updatedAnswers[currentPage - 1] = selectedOptions;
    dispatch(setAnswers(updatedAnswers));
  };

  return (
    <form className="quiz-form" name="quiz-form" action="#">
      <div className="quiz-indication">
        <div className="quiz-indication__rounds">
          <div
            className={
              currentPage === 1
                ? "quiz-indication__round active"
                : "quiz-indication__round"
            }
          ></div>
          <div
            className={
              currentPage === 2
                ? "quiz-indication__round active"
                : "quiz-indication__round"
            }
          ></div>
          <div
            className={
              currentPage === 3
                ? "quiz-indication__round active"
                : "quiz-indication__round"
            }
          ></div>
        </div>
        <span className="quiz-indication__text">
          Вопрос {currentPage} из {questions.length}
        </span>
      </div>
      <h3 className="quiz-question">{questions[currentPage - 1].question}</h3>
      <div className="quiz-answers">
        {questions[currentPage - 1].options.map(
          (option: string, index: number) => (
            <div className="quiz-answers__answer" key={index}>
              <input
                type="radio"
                name="question"
                value={option}
                checked={answers[currentPage - 1].includes(option)}
                onChange={(e: any) => handleRadioChange(e)}
              />
              <label>{option}</label>
            </div>
          )
        )}
      </div>

      <Pagination />
    </form>
  );
};
