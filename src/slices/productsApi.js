import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => `products`,
    }),
    getProductById: build.query({
      query: (id) => `products/${id}`,
    }),
    getProductByName: build.query({
      query: (name) => `products/${name}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery, useGetProductByNameQuery } = productsApi;
