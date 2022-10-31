import {
  CategoriesAction,
  CategoriesState,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_SUCCESS,
} from "src/store/categories/categories.types";

const INITIAL_STATE = {
  categories: [""],
  error: null,
};

export const categoriesReducer = (
  state: CategoriesState = INITIAL_STATE,
  action: CategoriesAction
): CategoriesState => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload.categories,
      };

    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
