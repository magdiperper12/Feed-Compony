'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
	'/images/all animal.jpg',
	'/images/animal.png',
	'/images/background.jpg',
	'/images/calculator.png',
	'/images/contact us.png',
	'/images/doctor.jpg',
	'/images/hand.jpg',
	'/images/man.jpg',
	'/images/mwashi.png',
	'/images/number 1.jpg',
	'/images/poultry.jpg',
	'/images/poultryimage.png',
];

const certificates = [
	'/images/cirtificate.png',
	'/images/cirtificate2.png',
	'/images/cirtificate3.png',
	'/images/cirtificate4.png',
];

const Gallery = () => {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	return (
		<div className='py-24 px-4 max-w-7xl mx-auto space-y-14'>
			{/* شهادات */}
			<div className='border-green-400 border-b-2 pb-24'>
				<h2 className='text-3xl font-bold text-center mb-10 text-darkButtonColor dark:text-darkPrimaryTextColors'>
					الشهادات
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
					{certificates.map((src, idx) => (
						<motion.div
							key={idx}
							className='relative cursor-pointer overflow-hidden rounded-lg shadow-md'
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: idx * 0.05 }}
							viewport={{ once: true, amount: 0.3 }}
							whileHover={{ scale: 1.03 }}
							onClick={() => setSelectedImage(src)}>
							<Image
								src={src}
								alt={`Certificate ${idx + 1}`}
								width={500}
								height={300}
								className='object-contain w-full h-60'
							/>
						</motion.div>
					))}
				</div>
			</div>

			{/* معرض الصور */}
			<div>
				<h2 className='text-3xl font-bold text-center mb-10 text-darkButtonColor dark:text-darkPrimaryTextColors'>
					معرض الصور
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
					{images.map((src, idx) => (
						<motion.div
							key={idx}
							className='relative cursor-pointer overflow-hidden rounded-lg shadow-md bg-white dark:bg-[#2A2A2A]'
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: idx * 0.1 }}
							viewport={{ once: true, amount: 0.3 }}
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
							width={80}
							height={30}
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
