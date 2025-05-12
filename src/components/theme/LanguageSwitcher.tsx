'use client';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HiGlobeAlt } from 'react-icons/hi';

export default function LanguageSwitcher() {
	const { i18n } = useTranslation();

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};

	const [isOpen, setIsOpen] = useState(false);
	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='text-darkprimary flex gap-8 dark:text-darkthird relative'>
			<button
				onClick={toggleDropdown}
				aria-label='إعدادات'
				className='flex items-center justify-center gap-1 p-1 transition-transform duration-300 border-2 border-gray-200 rounded-full'>
				<HiGlobeAlt className='text-3xl text-darksecoundry dark:text-darkthird' />
			</button>

			{isOpen && (
				<div className='absolute flex flex-col items-center top-12 right-0 bg-white dark:bg-darkprimary border-2 border-darkthird shadow-lg rounded-lg'>
					<button
						onClick={() => changeLanguage('en')}
						aria-label='إعدادات'
						className='text-darkprimary dark:text-primary w-full px-5 py-2 hover:bg-darkthird dark:hover:bg-darkthird border-b-2 border-darkthird'>
						English
					</button>
					<button
						onClick={() => changeLanguage('ar')}
						aria-label='إعدادات'
						className='text-darkprimary dark:text-primary w-full px-5 py-2 hover:bg-darkthird dark:hover:bg-darkthird'>
						عربي
					</button>
				</div>
			)}
		</div>
	);
}
