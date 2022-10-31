import { combineReducers } from "redux";

import { categoriesReducer } from "./categories/categories.reducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
