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
			<footer className='bg-[#1A1A1A] text-white py-10'>
				<div className='max-w-7xl mx-auto px-8'>
					<div className='flex flex-col md:flex-row justify-between gap-8'>
						{/* Quick Links */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
							className='flex flex-col gap-4'>
							<h3 className='text-xl font-semibold text-teal-300'>
								روابط سريعة
							</h3>
							<ul className='space-y-2'>
								<motion.li
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.2 }}>
									<Link
										href='/'
										className='hover:text-teal-300 transition-colors duration-300'>
										الرئيسية
									</Link>
								</motion.li>
								<motion.li
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.3 }}>
									<Link
										href='/articles'
										className='hover:text-teal-300 transition-colors duration-300'>
										مقالات
									</Link>
								</motion.li>
								<motion.li
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.4 }}>
									<Link
										href='/prices'
										className='hover:text-teal-300 transition-colors duration-300'>
										الأسعار
									</Link>
								</motion.li>
								<motion.li
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.5 }}>
									<Link
										href='/contact'
										className='hover:text-teal-300 transition-colors duration-300'>
										تواصل معنا
									</Link>
								</motion.li>
							</ul>
						</motion.div>

						{/* New Sections */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
							className='flex flex-col gap-4'>
							<h3 className='text-xl font-semibold text-teal-300'>الشهادات</h3>
							<ul className='space-y-2'>
								<motion.li
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.6 }}>
									<Link
										href='/certificates'
										className='hover:text-teal-300 transition-colors duration-300'>
										Certificates
									</Link>
								</motion.li>
								<motion.li
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.7 }}>
									<Link
										href='/laboratory'
										className='hover:text-teal-300 transition-colors duration-300'>
										مختبرات
									</Link>
								</motion.li>
								<motion.li
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.8 }}>
									<Link
										href='/logistics'
										className='hover:text-teal-300 transition-colors duration-300'>
										اللوجستية
									</Link>
								</motion.li>
								<motion.li
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.9 }}>
									<Link
										href='/join-us'
										className='hover:text-teal-300 transition-colors duration-300'>
										التوظيف
									</Link>
								</motion.li>
							</ul>
						</motion.div>

						{/* Contact Info */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
							className='flex flex-col gap-4'>
							<h3 className='text-xl font-semibold text-teal-300'>
								معلومات الاتصال
							</h3>
							<ul className='space-y-2'>
								<motion.li
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 1 }}>
									الهاتف: 123-456-7890
								</motion.li>
								<motion.li
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 1.1 }}>
									البريد الإلكتروني: info@example.com
								</motion.li>
								<motion.li
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 1.2 }}>
									العنوان: شارع 123، مدينة، الدولة
								</motion.li>
							</ul>
						</motion.div>

						{/* Social Media */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
							className='flex flex-col gap-4'>
							<h3 className='text-xl font-semibold text-teal-300'>تابعنا</h3>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 1.3 }}
								className='flex space-x-4'>
								<a
									href='https://facebook.com'
									target='_blank'
									rel='noopener noreferrer'>
									<FaFacebookF
										size={24}
										className='hover:text-teal-300 transition-colors duration-300'
										aria-label='Facebook'
									/>
								</a>
								<a
									href='https://twitter.com'
									target='_blank'
									rel='noopener noreferrer'>
									<FaTwitter
										size={24}
										className='hover:text-teal-300 transition-colors duration-300'
										aria-label='Twitter'
									/>
								</a>
								<a
									href='https://instagram.com'
									target='_blank'
									rel='noopener noreferrer'>
									<FaInstagram
										size={24}
										className='hover:text-teal-300 transition-colors duration-300'
										aria-label='Instagram'
									/>
								</a>
								<a
									href='https://linkedin.com'
									target='_blank'
									rel='noopener noreferrer'>
									<FaLinkedinIn
										size={24}
										className='hover:text-teal-300 transition-colors duration-300'
										aria-label='Linkedin'
									/>
								</a>
							</motion.div>
						</motion.div>
					</div>

					{/* Copyright */}
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
								className='text-lg text-blue-300 mx-1'>
								كودا
							</a>
						</p>
					</motion.div>
				</div>
			</footer>
		)
	);
}
