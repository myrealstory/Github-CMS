'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// export type Lang = 'en' | 'zh';

export interface LangState {
	lang: 'en' | 'zh';
}

const initialState: LangState = {
	lang: 'en',
};

export const langSlice = createSlice({
	name: 'lang',
	initialState,
	reducers: {
		setLangSwitch: (state, action: PayloadAction<LangState>) => {
		console.log('setLangSwitch action:', action.payload);
			state = action.payload;
			console.log('state',state);
			window.localStorage.setItem('lang', JSON.stringify(state));
		},
	},
});

export const { setLangSwitch } = langSlice.actions;
export default langSlice.reducer;
