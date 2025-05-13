'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FeedCalculator = () => {
	const [animalType, setAnimalType] = useState<string>('');
	const [daysCount, setDaysCount] = useState<number>(0);
	const [animalsCount, setAnimalsCount] = useState<number>(0);
	const [weightPerAnimal, setWeightPerAnimal] = useState<number>(0);
	const [feedAmount, setFeedAmount] = useState<number | null>(null);

	const calculateFeed = () => {
		if (daysCount > 0 && animalsCount > 0 && weightPerAnimal > 0) {
			const feedPerKg = 0.05;
			const totalWeight = animalsCount * weightPerAnimal;
			const totalFeedRequired = totalWeight * feedPerKg * daysCount;
			setFeedAmount(totalFeedRequired);
		}
	};

	return (
		<motion.div
			className='bg-Background dark:bg-darkBackground min-h-screen py-12'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}>
			<div className='max-w-7xl mx-auto px-6'>
				<div className='text-center mb-8'>
					<Image
						src='/window.svg'
						alt='Vision Logo'
						width={60}
						height={80}
						className='mx-auto'
					/>
				</div>

				<motion.div
					className='text-center mb-12'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}>
					<h1 className='text-4xl font-bold text-[#333] dark:text-darkPrimaryTextColors'>
						حاسبة أعلاف المتحدة
					</h1>
					<p className='text-xl text-[#555] dark:text-[#ccc] mt-4'>
						هذه الحاسبة الخاصة بشركة المتحدة لصناعة الأعلاف تسهل على عملائنا
						تحديد البرنامج والكمية التي يحتاجها وخيارات التغذية حسب البرنامج
						الذي يرغب به المربي.
					</p>
				</motion.div>

				<motion.div
					className='bg-white dark:bg-[#2A2A2A] p-8 shadow-lg rounded-lg'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3 }}>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						{/* Feeding Program */}
						<div>
							<label className='block text-[#333] dark:text-darkPrimaryTextColors text-lg'>
								برنامج التغذية
							</label>
							<select
								value={animalType}
								onChange={(e) => setAnimalType(e.target.value)}
								className='w-full p-3 mt-2 border border-gray-300 rounded-md bg-white dark:bg-[#333] text-[#333] dark:text-darkPrimaryTextColors'>
								<option value=''>اختر برنامج التغذية</option>
								<option value='Poultry'>دواجن</option>
								<option value='Cattle'>أبقار</option>
								<option value='Sheep'>أغنام</option>
							</select>
						</div>

						{/* Animal Type */}
						<div>
							<label className='block text-[#333] dark:text-darkPrimaryTextColors text-lg'>
								نوع الحيوان
							</label>
							<select
								value={animalType}
								onChange={(e) => setAnimalType(e.target.value)}
								className='w-full p-3 mt-2 border border-gray-300 rounded-md bg-white dark:bg-[#333] text-[#333] dark:text-darkPrimaryTextColors'>
								<option value=''>اختر نوع الدواجن</option>
								<option value='Poultry'>دواجن</option>
								<option value='Cattle'>أبقار</option>
								<option value='Sheep'>أغنام</option>
							</select>
						</div>

						{/* Days Count */}
						<div>
							<label className='block text-[#333] dark:text-darkPrimaryTextColors text-lg'>
								عدد الأيام
							</label>
							<input
								type='number'
								className='w-full p-3 mt-2 border border-gray-300 rounded-md bg-white dark:bg-[#333] text-[#333] dark:text-darkPrimaryTextColors'
								value={daysCount}
								onChange={(e) => setDaysCount(Number(e.target.value))}
							/>
						</div>

						{/* Animals Count */}
						<div>
							<label className='block text-[#333] dark:text-darkPrimaryTextColors text-lg'>
								عدد الحيوانات
							</label>
							<input
								type='number'
								className='w-full p-3 mt-2 border border-gray-300 rounded-md bg-white dark:bg-[#333] text-[#333] dark:text-darkPrimaryTextColors'
								value={animalsCount}
								onChange={(e) => setAnimalsCount(Number(e.target.value))}
							/>
						</div>

						{/* Weight per Animal */}
						<div>
							<label className='block text-[#333] dark:text-darkPrimaryTextColors text-lg'>
								معدل وزن الحيوان الواحد (بالكيلو)
							</label>
							<input
								type='number'
								className='w-full p-3 mt-2 border border-gray-300 rounded-md bg-white dark:bg-[#333] text-[#333] dark:text-darkPrimaryTextColors'
								value={weightPerAnimal}
								onChange={(e) => setWeightPerAnimal(Number(e.target.value))}
							/>
						</div>

						{/* Button */}
						<div className='col-span-2'>
							<button
								onClick={calculateFeed}
								className='w-full p-3 text-white text-lg rounded-md mt-4 bg-ButtonColor hover:bg-ButtonColoreffect dark:bg-darkButtonColor dark:hover:bg-[#FFD366] transition-colors'>
								احسب كمية العلف
							</button>
						</div>
					</div>
				</motion.div>

				{/* Result */}
				{feedAmount !== null && (
					<motion.div
						className='mt-8 bg-white dark:bg-[#2A2A2A] p-8 shadow-lg rounded-lg'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4 }}>
						<h2 className='text-2xl font-semibold text-[#333] dark:text-darkPrimaryTextColors mb-4'>
							نتيجة الحسبة
						</h2>
						<p className='text-lg text-[#555] dark:text-[#ccc]'>
							بناءً على المدخلات الخاصة بك، كمية العلف المطلوبة هي:
						</p>
						<p className='text-2xl font-bold text-[#333] dark:text-darkPrimaryTextColors mt-4'>
							{feedAmount.toFixed(2)} كيلوغرام
						</p>
					</motion.div>
				)}
			</div>
		</motion.div>
	);
};

export default FeedCalculator;
