import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
});
export const metadata: Metadata = {
	title: 'United Feed Products',
	description: 'United Feed Products for poultry',
	icons: {
		icon: '/images/logo-removebg.png',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${inter.variable} antialiased custom-scroll bg-white dark:bg-black`}>
				<Header />
				<div className=' '>{children}</div>
				<Footer />
			</body>
		</html>
	);
}
