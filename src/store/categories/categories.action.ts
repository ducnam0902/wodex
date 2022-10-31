import {
  FetchCategoriesRequest,
  FetchCategoriesSuccess,
  FetchCategoriesSuccessPayload,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FetchCategoriesFailure,
  FetchCategoriesFailurePayload,
  FETCH_CATEGORIES_FAILURE,
} from "src/store/categories/categories.types";

export const fetchCategoriesRequest = (): FetchCategoriesRequest => ({
  type: FETCH_CATEGORIES_REQUEST,
});

export const fetchCategoriesSuccess = (
  payload: FetchCategoriesSuccessPayload
): FetchCategoriesSuccess => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload,
});

export const fetchCategoriesFailure = (
  payload: FetchCategoriesFailurePayload
): FetchCategoriesFailure => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload,
});
