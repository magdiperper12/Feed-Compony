'use client';

import Link from 'next/link';
import React, { useState } from 'react';

export default function AddProduct() {
	const [formData, setFormData] = useState({
		title: '',
		price: '',
		description: '',
		image: '',
		category: '',
	});
	const [imageFile, setImageFile] = useState<File | null>(null);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setImageFile(file);
			const reader = new FileReader();
			reader.onloadend = () => {
				setFormData((prev) => ({
					...prev,
					image: reader.result as string, // Base64 string
				}));
			};
			reader.readAsDataURL(file);
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const existingProducts = JSON.parse(
			localStorage.getItem('products') || '[]'
		);
		const newProduct = {
			...formData,
			id: Date.now(),
			price: parseFloat(formData.price),
		};
		localStorage.setItem(
			'products',
			JSON.stringify([...existingProducts, newProduct])
		);

		alert('✅ تم حفظ المنتج بنجاح!');
		setFormData({
			title: '',
			price: '',
			description: '',
			image: '',
			category: '',
		});
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
					value={formData.title}
					onChange={handleChange}
					placeholder='اسم المنتج'
					className='w-full p-2 border rounded text-PrimaryTextColors dark:text-darkPrimaryTextColors dark:bg-darkButtonColor dark:border-darkButtonColor'
				/>
				<input
					name='price'
					value={formData.price}
					onChange={handleChange}
					placeholder='السعر'
					type='number'
					className='w-full p-2 border rounded text-PrimaryTextColors dark:text-darkPrimaryTextColors dark:bg-darkButtonColor dark:border-darkButtonColor'
				/>
				<textarea
					name='description'
					value={formData.description}
					onChange={handleChange}
					placeholder='الوصف'
					className='w-full p-2 border rounded text-PrimaryTextColors dark:text-darkPrimaryTextColors dark:bg-darkButtonColor dark:border-darkButtonColor'
				/>
				<input
					name='category'
					value={formData.category}
					onChange={handleChange}
					placeholder='الفئة'
					className='w-full p-2 border rounded text-PrimaryTextColors dark:text-darkPrimaryTextColors dark:bg-darkButtonColor dark:border-darkButtonColor'
				/>
				<input
					type='file'
					accept='image/*'
					onChange={handleImageChange}
					className='w-full p-2 border rounded text-PrimaryTextColors dark:text-darkPrimaryTextColors dark:bg-darkButtonColor dark:border-darkButtonColor'
				/>
				{formData.image && (
					<img
						src={formData.image}
						alt='صورة المنتج'
						className='w-32 h-32 object-cover mt-2 rounded'
					/>
				)}
				<div className='flex justify-end items-center gap-5'>
					<button
						type='submit'
						className='bg-ButtonColor text-white px-4 py-2 rounded hover:bg-ButtonColoreffect dark:bg-darkButtonColor dark:hover:bg-[#FFD366]'>
						إرسال
					</button>
					<Link
						href={'/admin/products/out'}
						type='submit'
						className='bg-ButtonColor text-white px-4 py-2 rounded hover:bg-ButtonColoreffect dark:bg-darkButtonColor dark:hover:bg-[#FFD366]'>
						OutPut
					</Link>
				</div>
			</form>
		</div>
	);
}
