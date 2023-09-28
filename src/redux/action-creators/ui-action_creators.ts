import { TOGGLE_IS_LOADING } from "../action-types/ui-action_types";

export const toggleIsLoading = (isLoading: boolean) => ({
  type: TOGGLE_IS_LOADING,
  isLoading,
});
