import { SkeletonProps, TestingAPI } from '@/app/globalStyle';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';


const url = `https://${TestingAPI}/skeleton`;

export const skeletonApi = createApi({
    reducerPath: 'skeletonApi',
    baseQuery: fetchBaseQuery({ 
    baseUrl: url,}),
    endpoints: (builder) => ({
        getMaster: builder.query<SkeletonProps, void>({
            query: () => `/`,
        }),
    }),
});

export const { useGetMasterQuery } = skeletonApi;
export default skeletonApi.reducer;




