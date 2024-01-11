import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type User = {
	email: string;
	password: string;
	token: string;
	id: string;
};

export const userApi = createApi({
	reducerPath: 'userApi',
	refetchOnFocus: true,
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://cms-backend-ow3b.onrender.com/auth/signin',
	}),
	endpoints: (builder) => ({
		getUser: builder.query<User[], null>({
			query: () => 'user',
		}),
	}),
});

export const { useGetUserQuery } = userApi;
