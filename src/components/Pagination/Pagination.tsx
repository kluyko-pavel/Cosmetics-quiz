import { useDispatch, useSelector } from "react-redux";
import "./Pagination.scss";
import { useNavigate } from "react-router-dom";
import { setCurrentPage } from "../../redux/action-creators/quiz-action_creators";
import { IStoreState } from "../../types";
import { questions } from "../../constants";

export const Pagination = () => {
  const currentPage = useSelector(
    (state: IStoreState) => state.quiz.currentPage
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSwitchNextPage = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };
  const handleSwitchPrevPage = () => {
    dispatch(setCurrentPage(currentPage - 1));
  };

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button
          className="pagination__el pagination__el-prev"
          type="button"
          onClick={handleSwitchPrevPage}
        >
          Назад
        </button>
      )}

      <button
        className="pagination__el pagination__el-next"
        type="button"
        onClick={
          currentPage === questions.length
            ? () => navigate("/results")
            : handleSwitchNextPage
        }
      >
        {currentPage === questions.length ? "Узнать результат" : "Дальше"}
      </button>
    </div>
  );
};
