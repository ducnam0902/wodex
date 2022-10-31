import { FETCH_CATEGORIES_REQUEST } from "./categories.types";
import { fetchCategoriesSuccess, fetchCategoriesFailure } from "./categories.action";
import { getAllCategories } from "src/constants/api";
import { all, call, put, takeLatest } from "typed-redux-saga";

function* fetchCategories() {
  try {
    const response = yield* call(getAllCategories);
    const categories = response.data;
    yield put(
      fetchCategoriesSuccess({
        categories,
      })
    );
  } catch (error) {
    yield put(
      fetchCategoriesFailure({
        error: error as Error,
      })
    );
  }
}

function* categoriesSaga() {
  yield all([takeLatest(FETCH_CATEGORIES_REQUEST, fetchCategories)]);
}

export default categoriesSaga;
