// src/app/admin/layout.tsx
import { ReactNode } from 'react';
import AdminSidebar from './AdminSidebar';

export default function AdminLayout({ children }: { children: ReactNode }) {
	return (
		<div className='flex min-h-screen bg-green-50 dark:bg-[#000000] pt-16'>
			<AdminSidebar />
			<main className='flex-1 p-6 text-PrimaryTextColors dark:text-darkPrimaryTextColors'>
				{children}
			</main>
		</div>
	);
}
