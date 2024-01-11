import { getDictionary } from '@/lib/getDictionary';
import { Locale } from '@/i18n-config';
import dynamic from 'next/dynamic';

const LoginForm = dynamic(() => import('../../../component/auth/LoginForm'));

export default async function Login({
	params: { lang },
}: {
	params: { lang: Locale };
}) {
	const dictionary = await getDictionary(lang);
	return (
		<>
			<LoginForm dictionary={dictionary.Auth} />
		</>
	);
}
