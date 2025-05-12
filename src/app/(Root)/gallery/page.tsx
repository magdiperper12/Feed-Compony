'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
	'/window.svg',
	'/window.svg',
	'/window.svg',
	'/window.svg',
	'/window.svg',
	'/window.svg',
	'/window.svg',
	'/window.svg',
	'/window.svg',
	'/window.svg',
];

const Gallery = () => {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	return (
		<div className='py-10 px-4 max-w-7xl mx-auto'>
			<h2 className='text-3xl font-bold text-center mb-10 text-gray-800'>
				معرض الصور
			</h2>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
				{images.map((src, idx) => (
					<motion.div
						key={idx}
						className='relative cursor-pointer overflow-hidden rounded-lg shadow-md'
						whileHover={{ scale: 1.03 }}
						onClick={() => setSelectedImage(src)}>
						<Image
							src={src}
							alt={`Gallery Image ${idx + 1}`}
							width={500}
							height={300}
							className='object-cover w-full h-60'
						/>
					</motion.div>
				))}
			</div>

			{/* Lightbox */}
			<AnimatePresence>
				{selectedImage && (
					<motion.div
						className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setSelectedImage(null)}>
						<motion.img
							src={selectedImage}
							alt='Selected'
							className='max-w-full max-h-[80vh] rounded-lg shadow-xl'
							initial={{ scale: 0.8 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0.8 }}
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Gallery;
