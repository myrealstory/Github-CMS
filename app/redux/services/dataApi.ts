import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export interface Data {
  [key: string]: number | string | boolean;
}
// interface DeleteTodoPayload {
//   id: number;
//   title: string;
// }

export const dataApi = createApi({
  reducerPath: 'dataApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://cms-backend-ow3b.onrender.com/table/',
  }),
  endpoints: (builder) => ({
    getData: builder.query<Data[], string>({
      query: (title: string) => `${title}`,
    }),
    // deleteData: builder.mutation<void, DeleteTodoPayload>({
    //   query: ({ id, title }) => ({
    //     url: `${title}/${id}`,
    //     method: 'DELETE',
    //   }),
    // }),
  }),
});

export const { useGetDataQuery } = dataApi;
