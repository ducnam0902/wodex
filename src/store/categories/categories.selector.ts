import { createSelector } from "reselect";
import { ELECTRONICS } from "src/constants";

import { RootState } from "src/store/rootReducer";
import { getImageCategories } from "src/utils/other";

const getCategories = (state: RootState) => {
  return state.categories;
};

export const getCategoriesSelector = createSelector(
  getCategories,
  (categoriesSlice) => {
    const { categories } = categoriesSlice;
    const currentCategories = categories.filter(
      (category) => category !== ELECTRONICS
    );
    return currentCategories.map((category) => ({
      title: category,
      image: getImageCategories(category),
    }));
  }
);
