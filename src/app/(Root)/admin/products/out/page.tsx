'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	image: string;
	category: string;
}

export default function pageout() {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		const storedProducts = JSON.parse(localStorage.getItem('products') || '[]');
		setProducts(storedProducts);
	}, []);

	return (
		<div className='p-6 bg-Background dark:bg-darkBackground'>
			<h1 className='text-2xl font-bold mb-4 text-PrimaryTextColors dark:text-darkPrimaryTextColors'>
				المنتجات
			</h1>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
				{products.map((product) => (
					<div
						key={product.id}
						className='bg-white dark:bg-[#2F2F2F] shadow-lg rounded-lg overflow-hidden border border-gray-200 dark:border-darkButtonColor'>
						<div className='relative'>
							{product.image ? (
								<Image
									src={product.image}
									alt={product.title}
									width={300}
									height={200}
									className='w-full h-48 object-cover'
								/>
							) : (
								<div className='w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500'>
									لا توجد صورة
								</div>
							)}
							<div className='absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 text-sm rounded'>
								{product.category}
							</div>
						</div>
						<div className='p-4'>
							<h2 className='text-lg font-semibold text-PrimaryTextColors dark:text-darkPrimaryTextColors'>
								{product.title}
							</h2>
							<p className='text-gray-600 dark:text-[#CCCCCC] text-sm mt-2'>
								{product.description}
							</p>
							<div className='mt-4 flex justify-between items-center'>
								<span className='text-xl font-bold text-PrimaryTextColors dark:text-darkPrimaryTextColors'>
									{product.price} $
								</span>
								<button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition dark:bg-darkButtonColor dark:hover:bg-[#FFD366]'>
									عرض التفاصيل
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
