// import { useTranslation } from 'react-i18next';
import { T } from '@/lib/FunctionLibrary';
import { CustomSearchProps, margin } from '../globalStyle';
import { TextField, Grid, FormControl } from '@mui/material';

function CustomSearch({ grid, label,customkey, ...rest }: CustomSearchProps) {
	return (
		<Grid item xs={grid} sx={{ mt: margin.ss, mb: margin.s }}>
			<FormControl fullWidth>
				<TextField
					fullWidth
					id=	{customkey}
					label={T(label)}
					name={customkey}
					autoFocus
					size='small'
					{...rest}
				/>
			</FormControl>
		</Grid>
	);
}

export default CustomSearch;
