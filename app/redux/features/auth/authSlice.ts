'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../../app/store';

export interface LoginInfo {
	email: string | null;
	password: string | null;
	accessToken: string | null;
	vip: boolean;
}

interface LoginInitialState {
	loginInfo: LoginInfo;
	isAuthenticated: boolean;
}

const initialState: LoginInitialState = {
	loginInfo: {
		email: '',
		password: '',
		accessToken: '',
		vip: true,
	},
	isAuthenticated: false,
};

export const authSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setLogout: () => initialState,
		setLogin: (state, action: PayloadAction<LoginInfo>) => {
			state.loginInfo = action.payload;
			state.isAuthenticated = true;
			window.localStorage.setItem(
				'authenticated',
				JSON.stringify(state.isAuthenticated)
			);
		},
	},
});

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
