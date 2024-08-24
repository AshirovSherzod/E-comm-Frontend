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
    deleteCategory: build.mutation({
      query: (id) => ({
        url: `/category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const { useGetAllCategoriesQuery, useDeleteCategoryMutation } =
  categoryApi;
