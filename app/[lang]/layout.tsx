import { Providers } from '../redux/Provider';

interface RootLayoutProps {
	children: React.ReactNode;
	params: {
		lang: string;
	};
}

const languages = ['en', 'zh'];

export async function generateStaticParams(){
	return languages.map((lang) => ({
		lang 
	}));
}


export const metadata = {
	title: 'Login to CMS',
	description: 'Login CMS',
};

export default function LoginLayout({
	children,
	params:{lang}
	}:RootLayoutProps) {
	return (
		<html lang={lang} >
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
