import { api } from "./index";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query({
      query: (params) => ({
        url: "/admins/profile",
        params,
      }),
      providesTags: ["Profile"],
    }),
    getAdmins: build.query({
      query: (params) => ({
        url: "/admins",
        params,
      }),
      providesTags: ["Profile"],
    }),
    signInAdmin: build.mutation({
      query: (body) => ({
        url: "/admins/sign-in",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Admins", "Profile"],
    }),
    signUpAdmin: build.mutation({
      query: (body) => ({
        url: "/admins/sign-up",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Admins"],
    }),
    // deleteProduct: build.mutation({
    //   query: (id) => ({
    //     url: `/products/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["Product"],
    // }),
    // updateProduct: build.mutation({
    //   query: ({ id, body }) => ({
    //     url: `/products/${id}`,
    //     method: "PUT",
    //     body,
    //   }),
    //   invalidatesTags: ["Product"],
    // }),
  }),
});

export const { useSignInAdminMutation, useGetProfileQuery, useGetAdminsQuery, useSignUpAdminMutation } =
  productApi;
