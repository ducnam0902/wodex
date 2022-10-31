import { all, call } from "typed-redux-saga";

import categoriesSaga from "src/store/categories/categories.sagas";

export function* rootSaga() {
  yield* all([call(categoriesSaga)]);
}
