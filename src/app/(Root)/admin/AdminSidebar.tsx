'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
	{ name: 'لوحة التحكم', href: '/admin/dashboard' },
	{ name: 'المنتجات', href: '/admin/products' },
	{ name: 'الطلبات', href: '/admin/orders' },
	{ name: 'الاعدادات', href: '/admin/Settings' },
];

export default function AdminSidebar() {
	const pathname = usePathname();
	const [isSidebarVisible, setIsSidebarVisible] = useState(false);

	// Toggle sidebar visibility
	const toggleSidebar = () => {
		setIsSidebarVisible((prevState) => !prevState);
	};

	return (
		<>
			{/* Button to toggle sidebar visibility on mobile */}
			<button
				onClick={toggleSidebar}
				aria-label='إعدادات'
				className='md:hidden absolute top-20 left-8 bg-blue-600 text-white p-2 rounded-md z-50'>
				{isSidebarVisible ? 'إغلاق القائمة' : 'فتح القائمة'}
			</button>

			{/* Sidebar container */}
			<aside
				className={`absolute md:relative h-80 md:h-screen w-full md:w-64 pt-20 md:pt-3 bg-white shadow-md p-4 ${
					isSidebarVisible ? 'block' : 'hidden'
				} md:block`}>
				<h2 className='text-2xl font-bold text-center mb-6 pt-2'>
					لوحة التحكم
				</h2>
				<nav className='flex flex-col gap-2'>
					{links.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className={`p-2 rounded hover:bg-gray-100 ${
								pathname === link.href ? 'bg-gray-200 font-semibold' : ''
							}`}>
							{link.name}
						</Link>
					))}
				</nav>
			</aside>
		</>
	);
}
