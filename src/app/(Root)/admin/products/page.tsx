'use client';

import React, { useEffect, useState } from 'react';
import AddProduct from './Add';

interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	image: string;
	category: string;
}

export default function ProductsPage() {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((json) => setProducts(json));
	}, []);

	return (
		<div className='p-6'>
			<h1 className='text-2xl font-bold mb-4 text-gray-800'>المنتجات</h1>
			{/* Product Cards Layout */}
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
				{products.map((product) => (
					<div
						key={product.id}
						className='bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200'>
						{/* Product Image */}
						<div className='relative'>
							<img
								src={product.image}
								alt={product.title}
								className='w-full h-48 object-cover'
							/>
							<div className='absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 text-sm rounded'>
								{product.category}
							</div>
						</div>
						{/* Product Info */}
						<div className='p-4'>
							<h2 className='text-lg font-semibold text-gray-800'>
								{product.title}
							</h2>
							<p className='text-gray-600 text-sm mt-2'>
								{product.description}
							</p>
							<div className='mt-4 flex justify-between items-center'>
								<span className='text-xl font-bold text-gray-900'>
									{product.price} $
								</span>
								<button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'>
									عرض التفاصيل
								</button>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Add Product Section */}
			<div className='min-h-screen p-5'>
				<AddProduct />
			</div>
		</div>
	);
}
