'use client'; // if using App Router

import { usePathname } from 'next/navigation';
import SignUpPage from './sign-up/page';
import SignInPage from './sign-in/page';

export default function AuthPage() {
	const pathname = usePathname();

	if (pathname.includes('sign-in')) {
		return <SignInPage />;
	} else {
		return <SignUpPage />;
	}
}
