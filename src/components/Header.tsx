'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaList, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import AImessage from './ChatBot';
import Dark from './theme/Dark';
import Lang from './theme/Lang';
import Profile from './header/profile';

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

	return (
		<header className='bg-[#000] shadow-md fixed top-0  w-full z-50'>
			<div className='fixed bottom-7 left-7 bg-blue-500 text-blue-50 px-4 py-2 rounded-2xl text-2xl'>
				<Link href={'/admin'}>admin</Link>
			</div>
			<div className='fixed bottom-7 right-7'>
				<AImessage />
			</div>
			<div className='max-w-7xl mx-auto px-8 py-4 flex justify-between items-center'>
				<Link
					href='/'
					className='text-3xl font-bold bg-white rounded-3xl px-4 py-3  outline-none uppercase tracking-wider hover:text-teal-300 transition-all duration-300'>
					<Image
						src={'/images/logo-removebg.png'}
						width={30}
						height={30}
						alt='Logo'></Image>
				</Link>
				<div className='hidden lg:flex items-center gap-4'>
					<Dark />
					<Lang />
				</div>
				{/* Desktop Nav */}
				<motion.nav
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='hidden md:flex gap-10 text-lg font-medium text-white'>
					{navLinks.map(({ href, label }, i) => (
						<motion.div
							key={href}
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.1 }}>
							<Link
								href={href}
								className='hover:text-teal-300 transition-all duration-300'>
								{label}
							</Link>
						</motion.div>
					))}
				</motion.nav>

				{/* Mobile Menu Toggle */}
				<button
					onClick={() => setIsOpen(!isOpen)}
					className='md:hidden text-white z-40 me-10'
					aria-label='Toggle menu'>
					{isOpen ? (
						<FaTimes
							size={28}
							className='text-white'
						/>
					) : (
						<FaList size={28} />
					)}
				</button>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						ref={menuRef}
						initial={{ x: '100%' }}
						animate={{ x: 0 }}
						exit={{ x: '100%' }}
						transition={{ type: 'spring', stiffness: 300, damping: 30 }}
						className='fixed top-0 right-0 h-full w-64 bg-[#1A1A1A] shadow-lg z-10 p-6 md:hidden'>
						<nav className='flex flex-col gap-6 text-lg text-white font-medium'>
							{navLinks.map(({ href, label }, i) => (
								<motion.div
									key={href}
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: i * 0.1 }}>
									<Link
										href={href}
										onClick={() => setIsOpen(false)}
										className='hover:text-teal-300 transition-all duration-300'>
										{label}
									</Link>
								</motion.div>
							))}
							<div className=' flex lg:hidden items-center gap-4'>
								<Dark />
								<Lang />
							</div>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
