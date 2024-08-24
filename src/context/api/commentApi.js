import { api } from "./index";

export const commentApi = api.injectEndpoints({
  endpoints: (build) => ({
    getComments: build.query({
      query: (params) => ({
        url: "/comment",
        params,
      }),
      providesTags: ["Comment"],
    }),
    // getProductById: build.query({
    //   query: (id) => ({
    //     url: `/product/${id}`,
    //   }),
    //   providesTags: ["Product"],
    // }),
    // createProduct: build.mutation({
    //   query: (body) => ({
    //     url: "/product",
    //     method: "POST",
    //     body,
    //   }),
    //   invalidatesTags: ["Product"],
    // }),
    // deleteProduct: build.mutation({
    //   query: (id) => ({
    //     url: `/product/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["Product"],
    // }),
    // updateProduct: build.mutation({
    //   query: ({ id, body }) => ({
    //     url: `/product/${id}`,
    //     method: "PUT",
    //     body,
    //   }),
    //   invalidatesTags: ["Product"],
    // }),
  }),
});

export const { useGetCommentsQuery } = commentApi;
