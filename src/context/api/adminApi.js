import { api } from "./index";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query({
      query: (params) => ({
        url: "/admin/profile",
        params,
      }),
      providesTags: ["Profile"],
    }),
    getAdmins: build.query({
      query: (params) => ({
        url: "/admin",
        params,
      }),
      providesTags: ["Profile"],
    }),
    signInAdmin: build.mutation({
      query: (body) => ({
        url: "/admin/sign-in",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Admins", "Profile"],
    }),
    signUpAdmin: build.mutation({
      query: (body) => ({
        url: "/admin/sign-up",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Admins"],
    }),
    deleteAdmin: build.mutation({
      query: (id) => ({
        url: `/admin/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Admins"],
    }),
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

export const {
  useSignInAdminMutation,
  useGetProfileQuery,
  useGetAdminsQuery,
  useSignUpAdminMutation,
  useDeleteAdminMutation
} = productApi;
