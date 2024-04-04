import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { Platform, Game } from "./useGames";

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
  return useQuery<Game[], Error>({
    queryKey: ["games", requestConfig],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>(endpoint, {
          params,
        })
        .then((res) => res.data.results),
  });
};

export default useDataQuery;
