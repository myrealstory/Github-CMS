'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function IndexPage() {
	const router = useRouter();

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const isAuthenticated: string | null =
				localStorage.getItem('authenticated');
			if (isAuthenticated) {
				router.push('/admin');
			} else {
				router.push('/login');
			}
		}
	}, [router]);

 return null;

}