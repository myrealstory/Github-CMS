import { Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

import React from 'react';
import { customSelectorProps, margin } from '../globalStyle';
import { T } from '@/lib/FunctionLibrary';

export default function CustomSelector({
	label,
	data,
	grid,
	style,
	translateKey,
	customkey,
	...rest
}: customSelectorProps) {
	return (
		<Grid item xs={grid} sx={{ mt: margin.s, mb: margin.s }} key={translateKey}>
			<FormControl sx={style} fullWidth size='small'>
				<InputLabel id={translateKey}>{T(label)}</InputLabel>
				<Select label={T(label)} name={customkey} id={translateKey} value={T(label)} {...rest}>
					{data?.map((item, index) => (
						<MenuItem value={item} key={index}>
							{item}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Grid>
	);
}
