'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaLinkedinIn,
} from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Footer() {
	const [login, setLogin] = useState(false);

	useEffect(() => {
		const url = window.location.href.toString();
		setLogin(url.includes('sign-in') || url.includes('sign-up'));
	}, []);

	return (
		!login && (
			<footer className='bg-Background dark:bg-darkBackground text-PrimaryTextColors dark:text-darkPrimaryTextColors py-10'>
				<div className='max-w-7xl mx-auto px-8'>
					<div className='flex flex-col md:flex-row justify-between gap-8'>
						{/* روابط سريعة */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
							className='flex flex-col gap-4'>
							<h3 className='text-xl font-semibold text-LinksElements'>
								روابط سريعة
							</h3>
							<ul className='space-y-2'>
								{[
									{ href: '/', label: 'الرئيسية' },
									{ href: '/articles', label: 'مقالات' },
									{ href: '/prices', label: 'الأسعار' },
									{ href: '/contact', label: 'تواصل معنا' },
								].map((item, i) => (
									<motion.li
										key={item.href}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.2 + i * 0.1 }}>
										<Link
											href={item.href}
											className='hover:text-LinksElements transition-colors duration-300'>
											{item.label}
										</Link>
									</motion.li>
								))}
							</ul>
						</motion.div>

						{/* الشهادات */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
							className='flex flex-col gap-4'>
							<h3 className='text-xl font-semibold text-LinksElements'>
								الشهادات
							</h3>
							<ul className='space-y-2'>
								{[
									{ href: '/certificates', label: 'Certificates' },
									{ href: '/laboratory', label: 'مختبرات' },
									{ href: '/logistics', label: 'اللوجستية' },
									{ href: '/join-us', label: 'التوظيف' },
								].map((item, i) => (
									<motion.li
										key={item.href}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.6 + i * 0.1 }}>
										<Link
											href={item.href}
											className='hover:text-LinksElements transition-colors duration-300'>
											{item.label}
										</Link>
									</motion.li>
								))}
							</ul>
						</motion.div>

						{/* معلومات الاتصال */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
							className='flex flex-col gap-4'>
							<h3 className='text-xl font-semibold text-LinksElements'>
								معلومات الاتصال
							</h3>
							<ul className='space-y-2'>
								{[
									'الهاتف: 123-456-7890',
									'البريد الإلكتروني: info@example.com',
									'العنوان: شارع 123، مدينة، الدولة',
								].map((item, i) => (
									<motion.li
										key={i}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 1 + i * 0.1 }}>
										{item}
									</motion.li>
								))}
							</ul>
						</motion.div>

						{/* تابعنا */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
							className='flex flex-col gap-4'>
							<h3 className='text-xl font-semibold text-LinksElements'>
								تابعنا
							</h3>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 1.3 }}
								className='flex space-x-4'>
								{[
									{
										icon: <FaFacebookF size={24} />,
										href: 'https://facebook.com',
										label: 'Facebook',
									},
									{
										icon: <FaTwitter size={24} />,
										href: 'https://twitter.com',
										label: 'Twitter',
									},
									{
										icon: <FaInstagram size={24} />,
										href: 'https://instagram.com',
										label: 'Instagram',
									},
									{
										icon: <FaLinkedinIn size={24} />,
										href: 'https://linkedin.com',
										label: 'Linkedin',
									},
								].map(({ icon, href, label }, i) => (
									<a
										key={label}
										href={href}
										target='_blank'
										rel='noopener noreferrer'
										aria-label={label}
										className='hover:text-LinksElements transition-colors duration-300'>
										{icon}
									</a>
								))}
							</motion.div>
						</motion.div>
					</div>

					{/* حقوق النشر */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1.4 }}
						className='text-center mt-8'>
						<p className='text-sm'>
							جميع الحقوق محفوظة &copy; 2025 موقع الدواجن تم بواسطة{' '}
							<a
								href='https://cuda.aiotgroups.com/'
								target='_blank'
								className='text-lg text-ButtonColor dark:text-darkButtonColor mx-1'>
								كودا
							</a>
						</p>
					</motion.div>
				</div>
			</footer>
		)
	);
}
