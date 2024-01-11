import React from 'react';
import { StyleSkeleton } from '@/CMS_Skeleton_Style_V1';
import { ButtonProps, margin } from '../globalStyle';
import { Button, Grid } from '@mui/material';
import { T } from '@/lib/FunctionLibrary';

export default function CustomButton({
	label,
	colors,
	duplicated,
	type,
	onclick
}: ButtonProps) {
	const getColors = StyleSkeleton.style;
	return (
		<Grid item sx={{marginRight:margin.s}}>
			{duplicated}
			<Button
				type={type}
				sx={{
					backgroundColor:
						colors === 'buttonConfirm'
							? getColors.buttonConfirm
							: getColors.buttonReset,
					color: '#fff',
					'&:hover': {
						opacity: 0.8,
						backgroundColor:
							colors === 'buttonConfirm'
								? getColors.buttonConfirm + ' ' + '!important'
								: getColors.buttonReset + ' ' + '!important',
					},
				}}
				onClick={onclick}
			>
				{T(label)}
			</Button>
		</Grid>
	);
}
