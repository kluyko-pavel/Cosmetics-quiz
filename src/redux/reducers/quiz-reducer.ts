import { questions } from "../../constants";
import { IQuizState } from "../../types";
import {
  SET_ANSWERS,
  SET_CURRENT_PAGE,
} from "../action-types/quiz-action_types";

const initialState = {
  currentPage: 1,
  answers: Array(questions.length).fill([]),
};

const quizReducer = (state: IQuizState = initialState, action: any) => {
  switch (action.type) {
    case SET_CURRENT_PAGE: {
      const { currentPage } = action;
      return {
        ...state,
        currentPage,
      };
    }
    case SET_ANSWERS: {
      const { answers } = action;
      return {
        ...state,
        answers,
      };
    }

    default: {
      return state;
    }
  }
};

export default quizReducer;
