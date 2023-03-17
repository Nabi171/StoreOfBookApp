import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000",
    }),
    tagTypes: ["Books", "Book"],
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => "/books",
            keepUnusedDataFor: 600,
            providesTags: ["books"],
        }),
        getBook: builder.query({
            query: (bookId) => `/books/${bookId}`,
            providesTags: (result, error, arg) => [{ type: "Book", id: arg }],
        }),
        addBook: builder.mutation({
            query: (data) => ({
                url: "/books",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["books"],
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Books"],
        }),
        editBook: builder.mutation({
            query: ({ id, data }) => ({
                url: `/books/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: (result, error, arg) => [
                "Books",
                { type: "Book", id: arg.id },

            ],
        }),
    }),
});

export const {
    useGetBooksQuery,
    useGetBookQuery,
    useAddBookMutation,
    useDeleteBookMutation,
    useEditBookMutation,

} = apiSlice;