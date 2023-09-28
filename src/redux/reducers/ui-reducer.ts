import { IUiState } from "../../types";
import { TOGGLE_IS_LOADING } from "../action-types/ui-action_types";

const initialState = {
  isLoading: false,
};

const uiReducer = (state: IUiState = initialState, action: any) => {
  switch (action.type) {
    case TOGGLE_IS_LOADING: {
      const { isLoading } = action;
      return {
        ...state,
        isLoading,
      };
    }
    default: {
      return state;
    }
  }
};

export default uiReducer;
