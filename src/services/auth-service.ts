import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import queryString from "query-string";

export const authService = createApi({
  reducerPath: "authService",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    cache: "no-cache",
  }),
  tagTypes: ["Auth"],
  endpoints: (build) => ({
    getDeliveries: build.query<any, any>({
      query: (params) => ({
        url: `/auth?${queryString.stringify(params)}`,
        method: "GET",
      }),
      providesTags: ["Auth"],
    }),
  }),
});

export const { useGetDeliveriesQuery } = authService;
