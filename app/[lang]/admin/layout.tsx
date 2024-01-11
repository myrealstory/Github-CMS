import '../../globalStyle';
import Sidebar from '../../component/sidebar/Sidebar';
import { FlexContainer, MainStyle } from '../../globalStyle';
import { Providers } from '../../redux/Provider';
import { getDictionary } from '@/lib/getDictionary';
import { Locale } from '@/i18n-config';

export const metadata = {
	title: 'Dynamic CMS',
	description: 'Dynamic CMS',
};

export default async function AdminLayout({
	children,
	params: { lang },
}: {
	children: React.ReactNode;
	params: { lang: Locale };
}) {
	const dictionary = await getDictionary(lang);
	// const logout = dictionary['Auth'].logout
	return (
		<>
			<Providers>
				<div style={FlexContainer}>
					<Sidebar dictionary={dictionary.Auth} />
					<div style={MainStyle}>{children}</div>
				</div>
			</Providers>
		</>
	);
}
