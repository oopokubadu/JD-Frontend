import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AppConstants } from "../core/app-constants";
import { SignUpResponse } from "../models/response/auth-response";

export const productService = createApi({
  reducerPath: "productService",
  baseQuery: fetchBaseQuery({
    baseUrl: `${AppConstants.baseUrl}`,
    cache: "no-cache",
  }),
  tagTypes: ["Product"],
  endpoints: (build) => ({
    listAllItems: build.query<SignUpResponse, void>({
      query: () => ({
        url: "/items",
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
  }),
});

export const { useListAllItemsQuery } = productService;