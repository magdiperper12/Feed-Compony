'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaList, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import AImessage from './ChatBot';
import Dark from './theme/Dark';

const navLinks = [
	{ href: '/Contact', label: 'تواصل معنا' },
	{ href: '/Calculator', label: 'حاسبة الشركة' },
	{ href: '/JobOpportunities', label: 'التوظيف' },
	{ href: '/Products', label: 'منتجاتنا' },
	{ href: '/gallery', label: 'معرض' },
	{ href: '/About', label: 'من نحن' },
	{ href: '/', label: 'الرئيسية' },
];

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [login, setLogin] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
				setIsOpen(false);
			}
		};
		if (isOpen) document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [isOpen]);

	useEffect(() => {
		const url = window.location.href.toString();
		setLogin(url.includes('sign-in') || url.includes('sign-up'));
	}, []);

	return (
		!login && (
			<header className='bg-Background dark:bg-darkBackground text-[#333] dark:text-darkPrimaryTextColors shadow-md fixed top-0 w-full z-50'>
				{/* زر الإدارة */}
				<div className='fixed bottom-7 left-7 bg-ButtonColor text-white px-4 py-2 rounded-2xl text-2xl hover:bg-ButtonColoreffect transition'>
					<Link href='/admin'>admin</Link>
				</div>

				{/* رسالة الذكاء الاصطناعي */}
				<div className='fixed bottom-7 right-7'>
					<AImessage />
				</div>

				{/* العنوان الرئيسي */}
				<div className='max-w-7xl mx-auto px-8 py-4 flex justify-between items-center'>
					<Link
						href='/'
						className='text-3xl font-bold bg-white dark:bg-ButtonColor dark:text-white rounded-3xl px-4 py-3 outline-none uppercase tracking-wider hover:text-LinksElements transition-all duration-300'>
						<Image
							src='/images/logo-removebg.png'
							width={30}
							height={30}
							alt='Logo'
						/>
					</Link>

					{/* خيارات سطح المكتب */}
					<div className='hidden lg:flex items-center gap-4'>
						<Dark />
						<Link
							href='/sign-in'
							target='_blank'
							className='border-2 border-ButtonColor text-ButtonColor dark:text-white p-1 px-3 text-lg rounded-xl hover:bg-ButtonColoreffect transition'>
							sign-in
						</Link>
					</div>

					{/* روابط التنقل لسطح المكتب */}
					<motion.nav
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className='hidden md:flex gap-10 text-lg font-medium'>
						{navLinks.map(({ href, label }, i) => (
							<motion.div
								key={href}
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: i * 0.1 }}>
								<Link
									href={href}
									className='hover:text-LinksElements transition-all duration-300'>
									{label}
								</Link>
							</motion.div>
						))}
					</motion.nav>

					{/* زر القائمة للموبايل */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className='md:hidden text-ButtonColor dark:text-white z-40 me-10'
						aria-label='Toggle menu'>
						{isOpen ? <FaTimes size={28} /> : <FaList size={28} />}
					</button>
				</div>

				{/* قائمة الموبايل */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							ref={menuRef}
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{ type: 'spring', stiffness: 300, damping: 30 }}
							className='fixed top-0 right-0 h-full w-64 bg-darkBackground shadow-lg z-10 p-6 md:hidden text-white'>
							<nav className='flex flex-col gap-6 text-lg font-medium'>
								{navLinks.map(({ href, label }, i) => (
									<motion.div
										key={href}
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: i * 0.1 }}>
										<Link
											href={href}
											onClick={() => setIsOpen(false)}
											className='hover:text-LinksElements transition-all duration-300'>
											{label}
										</Link>
									</motion.div>
								))}
								<div className='flex lg:hidden items-center gap-4 mt-4'>
									<Dark />
								</div>
							</nav>
						</motion.div>
					)}
				</AnimatePresence>
			</header>
		)
	);
}
