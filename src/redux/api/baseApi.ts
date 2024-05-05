import { axiosBaseQuery } from "@/app/helpers/axios/axiosBaseQuery";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: "http://localhost:3000/api/v1" }),
  endpoints: () => ({}),
});
