import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AppConstants } from "../core/app-constants";
import {
  SignInResponse,
  SignUpResponse,
} from "../models/response/auth-response";

export const authService = createApi({
  reducerPath: "authService",
  baseQuery: fetchBaseQuery({
    baseUrl: `${AppConstants.baseUrl}`,
    cache: "no-cache",
  }),
  tagTypes: ["Auth"],
  endpoints: (build) => ({
    signUp: build.mutation<SignUpResponse, FormData>({
      query: (body) => ({
        url: "/users",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Auth"],
    }),
    updateUser: build.mutation<SignUpResponse, FormData>({
      query: (body) => ({
        url: "/user",
        method: "PATCH",
        body: body,
      }),
      invalidatesTags: ["Auth"],
    }),
    signIn: build.mutation<SignInResponse, FormData>({
      query: (body) => ({
        url: "/signin",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Auth"],
    }),
    sendOTP: build.mutation<SignUpResponse, FormData>({
      query: (body) => ({
        url: "/send_otp",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Auth"],
    }),
    verifyOTP: build.mutation<SignUpResponse, FormData>({
      query: (body) => ({
        url: "/verify_otp",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useSendOTPMutation,
  useVerifyOTPMutation,
  useUpdateUserMutation,
} = authService;
