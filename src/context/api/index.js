import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { logout } from '../slices/authSlice';

const baseQuery = async (args, api, extraOptions) => {
  const { dispatch } = api;
  const rawBaseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:8000",
    prepareHeaders: (headers) => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmJiNDZlMGE5ZjgzZTM5MDQwZmUxOGIiLCJyb2xlIjoib3duZXIiLCJpc0FjdGl2ZSI6dHJ1ZSwiaWF0IjoxNzIzODE0MjMxfQ.81MFFR2owcII96Ujdz9zsFEMit599rTP2HE7w6WTK9A" //localStorage.getItem("x-auth-token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });

  const result = await rawBaseQuery(args, api, extraOptions);

  if (result.error) {
    const { status } = result.error;
    if (status === 401 || status === 403) {
      console.error("Unauthorized access - Redirecting to login...");
      dispatch(logout())
    }
  }
  return result;
};
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

export const api = createApi({
  reducerPath: "myApi",
  baseQuery: baseQueryWithRetry,
  tagTypes: ["Product", "Category"],
  endpoints: () => ({}),
});
