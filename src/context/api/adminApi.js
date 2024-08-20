import { api } from "./index";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // getProducts: build.query({
    //   query: (params) => ({
    //     url: "/products",
    //     params,
    //   }),
    //   providesTags: ["Product"],
    // }),
    signInAdmin: build.mutation({
      query: (body) => ({
        url: "/admins/sign-in",
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

export const { useSignInAdminMutation } = productApi;
