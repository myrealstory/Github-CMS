'use client';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import CircularProgress from '@mui/material/CircularProgress';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import useAuth from '@/app/hooks/useAuth';
import { FormEvent, useState } from 'react';
import { margin } from '@/app/globalStyle';
import { IconButton, InputAdornment } from '@mui/material';

const Copyright = () => {
	return (
		<Typography
			variant='body2'
			color='text.secondary'
			align='center'
			sx={{ pt: margin.s, pb: margin.s }}
		>
			{'Copyright © '}
			<Link color='inherit' href='/localhost:3000/login'>
				Ringus Solution Enterprise Limited
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
};

export default function LoginForm({
	dictionary,
}: {
	dictionary: {
		login: string;
		logout: string;
		emailAddress: string;
		password: string;
		rememberMe: string;
		forgotPassword: string;
	};
}) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { login, isLoading, hasError } = useAuth();
	const [showPassword, setShowPassword] = useState(false);

	const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		login(email, password);
	};

	return (
		<Container
			component='main'
			maxWidth='xs'
			sx={{ backgroundColor: '#fafafa' }}
		>
			<CssBaseline />
			<Box
				sx={{
					marginTop: 20,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					padding: '1rem',
				}}
			>
				<Avatar sx={{ m: margin.ss, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					{dictionary.login}
				</Typography>
				<Box component='form' noValidate sx={{ mt: margin.ss }}>
					<TextField
						margin='normal'
						required
						fullWidth
						id='email'
						label={dictionary.emailAddress}
						name='email'
						autoComplete='email'
						autoFocus
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						error={hasError ? true : false}
					/>
					<TextField
						margin='normal'
						required
						fullWidth
						name='password'
						label={dictionary.password}
						type={showPassword ? 'text' : 'password'}
						id='password'
						autoComplete='current-password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						error={hasError ? true : false}
						InputProps={{
							endAdornment: (
								<InputAdornment position='end'>
									<IconButton
										aria-label='toggle password visibility'
										onClick={() => setShowPassword(!showPassword)}
									>
										{showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
					<FormControlLabel
						control={<Checkbox value='remember' color='primary' />}
						label={dictionary.rememberMe}
					/>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						sx={{ mt: margin.s, mb: margin.ss }}
						onClick={handleSubmit}
					>
						{dictionary.login}
					</Button>
					{isLoading && (
						<Box sx={{ display: 'flex', py: 2 }}>
							<CircularProgress sx={{ mx: 'auto' }} />
						</Box>
					)}
					{hasError && (
						<Typography sx={{ py: 2, textAlign: 'center', color: 'red' }}>
							{hasError}
						</Typography>
					)}
				</Box>
			</Box>
			<Copyright />
		</Container>
	);
}
