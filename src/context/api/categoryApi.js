import { api } from "./index";

export const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllCategories: build.query({
      query: (params) => ({
        url: "/category",
        params,
      }),
      providesTags: ["Category"],
    }),
    createCategory: build.mutation({
      query: (body) => ({
        url: "/category",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Category"],
    }),
    deleteCategory: build.mutation({
      query: (id) => ({
        url: `/category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),
    updateCategory: build.mutation({
      query: ({ id, body }) => ({
        url: `/category/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useDeleteCategoryMutation,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
} = categoryApi;
