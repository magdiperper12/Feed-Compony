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
		<div className='p-6 max-w-xl mx-auto bg-Background dark:bg-darkBackground'>
			<h2 className='text-2xl font-bold mb-4 text-PrimaryTextColors dark:text-darkPrimaryTextColors'>
				إضافة منتج
			</h2>
			<form
				onSubmit={handleSubmit}
				className='space-y-4'>
				<input
					name='title'
					onChange={handleChange}
					placeholder='اسم المنتج'
					className='w-full p-2 border rounded text-PrimaryTextColors dark:text-darkPrimaryTextColors dark:bg-darkButtonColor dark:border-darkButtonColor'
				/>
				<input
					name='price'
					onChange={handleChange}
					placeholder='السعر'
					type='number'
					className='w-full p-2 border rounded text-PrimaryTextColors dark:text-darkPrimaryTextColors dark:bg-darkButtonColor dark:border-darkButtonColor'
				/>
				<textarea
					name='description'
					onChange={handleChange}
					placeholder='الوصف'
					className='w-full p-2 border rounded text-PrimaryTextColors dark:text-darkPrimaryTextColors dark:bg-darkButtonColor dark:border-darkButtonColor'
				/>
				<input
					name='category'
					onChange={handleChange}
					placeholder='الفئة'
					className='w-full p-2 border rounded text-PrimaryTextColors dark:text-darkPrimaryTextColors dark:bg-darkButtonColor dark:border-darkButtonColor'
				/>
				<input
					name='image'
					onChange={handleChange}
					placeholder='رابط الصورة'
					className='w-full p-2 border rounded text-PrimaryTextColors dark:text-darkPrimaryTextColors dark:bg-darkButtonColor dark:border-darkButtonColor'
				/>
				<button
					type='submit'
					className='bg-ButtonColor text-white px-4 py-2 rounded hover:bg-ButtonColoreffect dark:bg-darkButtonColor dark:hover:bg-[#FFD366]'>
					إرسال
				</button>
			</form>
		</div>
	);
}
