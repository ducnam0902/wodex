export const FETCH_CATEGORIES_REQUEST = "FETCH_CATEGORIES_REQUEST";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_FAILURE = "FETCH_CATEGORIES_FAILURE";

export type CategoriesState = {
  categories: string[];
  error: Error | null;
};

export type FetchCategoriesSuccessPayload = {
  categories: string[];
};

export type FetchCategoriesFailurePayload = {
  error: Error;
};

export type FetchCategoriesRequest = {
  type: typeof FETCH_CATEGORIES_REQUEST;
};

export type FetchCategoriesSuccess = {
  type: typeof FETCH_CATEGORIES_SUCCESS;
  payload: FetchCategoriesSuccessPayload;
};

export type FetchCategoriesFailure = {
  type: typeof FETCH_CATEGORIES_FAILURE;
  payload: FetchCategoriesFailurePayload;
};

export type CategoriesAction =
  | FetchCategoriesRequest
  | FetchCategoriesSuccess
  | FetchCategoriesFailure;
