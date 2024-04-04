import { useQuery } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import APIClient from "../services/api-client";
import { Game } from "./useGames";

const apiClient = new APIClient<Game>("/games");

// "T" is the generic type parameter
export interface FetchResponse<T> {
  count: number;
  results: T[];
}

// for fetching data with different endpoints
// takes endpoint as a parameter
const useDataQuery = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig
) => {
  const params = requestConfig?.params;
  console.log("params", params);
  return useQuery<Game[], Error>({
    queryKey: ["games", params],
    queryFn: () =>
      apiClient.getAll({
        params,
      }),
  });
};

export default useDataQuery;
