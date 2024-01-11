import React from 'react';
import { SwitchProps } from '../globalStyle';
import {
	FormControlLabel,
	FormGroup,
	Grid,
	Switch,
	Typography,
} from '@mui/material';
import { T } from '@/lib/FunctionLibrary';

export default function CustomSwitch({ label, grid,translateKey, ...rest }: SwitchProps) {
	return (
		<Grid item xs={grid} key={translateKey}>
			<FormGroup row sx={{ alignItems: 'center', gap: 2 }}>
				<Typography>{T(label)}</Typography>
				<FormControlLabel
					control={<Switch defaultChecked />}
					label=''
					{...rest}
				/>
			</FormGroup>
		</Grid>
	);
}
