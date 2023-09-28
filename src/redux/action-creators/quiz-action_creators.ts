import {
  SET_ANSWERS,
  SET_CURRENT_PAGE,
} from "../action-types/quiz-action_types";

export const setCurrentPage = (currentPage: number) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setAnswers = (answers: any[]) => ({
  type: SET_ANSWERS,
  answers,
});
