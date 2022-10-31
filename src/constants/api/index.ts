import { apiUrl } from "./api-urls";
import axios from "axios";

type callApiType = {
  method: string;
  url: string;
};

type callApiResponse<T> = {
  data: T;
};

export const callApi = async <T>({
  method,
  url,
  ...rest
}: callApiType): Promise<callApiResponse<T>> => {
  return axios({
    method,
    url,
    ...rest,
  });
};

export const getAllCategories = async () => {
  const { getCategories } = apiUrl;
  return callApi<string[]>(getCategories);
};
