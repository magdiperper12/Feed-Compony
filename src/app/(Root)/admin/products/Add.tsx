// src/app/admin/products/add/page.tsx
'use client';

import React, { useState } from 'react';

export default function AddProduct() {
	const [formData, setFormData] = useState({
		title: '',
		price: '',
		description: '',
		image: '',
		category: '',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const res = await fetch('https://fakestoreapi.com/products', {
			method: 'POST',
			body: JSON.stringify(formData),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await res.json();
		alert('تم إرسال المنتج: ' + JSON.stringify(data));
	};

	return (
		<div className='p-6 max-w-xl mx-auto'>
			<h2 className='text-2xl font-bold mb-4 text-gray-800'>إضافة منتج</h2>
			<form
				onSubmit={handleSubmit}
				className='space-y-4'>
				<input
					name='title'
					onChange={handleChange}
					placeholder='اسم المنتج'
					className='w-full p-2 border rounded'
				/>
				<input
					name='price'
					onChange={handleChange}
					placeholder='السعر'
					type='number'
					className='w-full p-2 border rounded'
				/>
				<textarea
					name='description'
					onChange={handleChange}
					placeholder='الوصف'
					className='w-full p-2 border rounded'
				/>
				<input
					name='category'
					onChange={handleChange}
					placeholder='الفئة'
					className='w-full p-2 border rounded'
				/>
				<input
					name='image'
					onChange={handleChange}
					placeholder='رابط الصورة'
					className='w-full p-2 border rounded'
				/>
				<button
					type='submit'
					className='bg-blue-600 text-white px-4 py-2 rounded'>
					إرسال
				</button>
			</form>
		</div>
	);
}
