'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type AnimalType = 'Poultry' | 'Cattle' | 'Sheep' | '';

const FeedCalculator = () => {
	const [animalType, setAnimalType] = useState<AnimalType>('');
	const [daysCount, setDaysCount] = useState(0);
	const [animalsCount, setAnimalsCount] = useState(0);
	const [weightPerAnimal, setWeightPerAnimal] = useState(0);
	const [feedAmount, setFeedAmount] = useState<number | null>(null);

	const getDailyFeedRatio = (type: AnimalType): number => {
		switch (type) {
			case 'Poultry':
				return 0.08; // نسبة تقريبية للدواجن
			case 'Cattle':
				return 0.03; // نسبة تقريبية للأبقار
			case 'Sheep':
				return 0.04; // نسبة تقريبية للأغنام
			default:
				return 0;
		}
	};

	const calculateFeed = () => {
		if (
			animalType &&
			daysCount > 0 &&
			animalsCount > 0 &&
			weightPerAnimal > 0
		) {
			const ratio = getDailyFeedRatio(animalType);
			const dailyFeedPerAnimal = weightPerAnimal * ratio;
			const totalFeed = dailyFeedPerAnimal * animalsCount * daysCount;
			setFeedAmount(totalFeed);
		} else {
			setFeedAmount(null);
		}
	};

	return (
		<motion.div
			className='bg-Background dark:bg-darkBackground min-h-screen py-24'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}>
			<div className='max-w-4xl mx-auto px-6'>
				<div className='text-center mb-10'>
					<Image
						src={`/images/animal2.png`}
						alt='Feed Calculator Logo'
						width={250}
						height={80}
						className='mx-auto'
					/>
					<h1 className='text-4xl font-bold mt-6 text-darkButtonColor dark:text-darkButtonColor'>
						حاسبة أعلاف المتحدة
					</h1>
					<p className='text-lg text-gray-700 dark:text-gray-300 mt-4 max-w-2xl mx-auto'>
						احسب الكمية المناسبة من العلف بناءً على نوع الحيوان، وزنه، وعدد
						الأيام. أداة دقيقة تساعدك في إدارة تغذية مواشيك بكفاءة.
					</p>
				</div>

				<motion.div
					className='bg-white dark:bg-[#2A2A2A] p-8 shadow-lg rounded-lg'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						{/* نوع الحيوان */}
						<div>
							<label className='block text-gray-800 dark:text-darkButtonColor  text-lg font-medium'>
								نوع الحيوان
							</label>
							<select
								value={animalType}
								onChange={(e) => setAnimalType(e.target.value as AnimalType)}
								className='w-full p-3 mt-2 border border-gray-300 rounded-md bg-white dark:bg-[#333] text-gray-800 dark:text-darkButtonColor '>
								<option value=''>اختر نوع الحيوان</option>
								<option value='Poultry'>دواجن</option>
								<option value='Cattle'>أبقار</option>
								<option value='Sheep'>أغنام</option>
							</select>
						</div>

						{/* عدد الأيام */}
						<div>
							<label className='block text-gray-800 dark:text-darkButtonColor  text-lg font-medium'>
								عدد الأيام
							</label>
							<div className='flex mt-2'>
								<button
									type='button'
									onClick={() => setDaysCount((prev) => Math.max(prev - 1, 0))}
									className='px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 dark:text-darkButtonColor rounded-l-md'>
									-
								</button>
								<input
									type='number'
									value={daysCount}
									onChange={(e) => setDaysCount(Number(e.target.value))}
									className='w-full text-center border-t border-b border-gray-300 px-4 py-2'
								/>
								<button
									type='button'
									onClick={() => setDaysCount((prev) => prev + 1)}
									className='px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 dark:text-darkButtonColor rounded-r-md'>
									+
								</button>
							</div>
						</div>

						{/* عدد الحيوانات */}
						<div>
							<label className='block text-gray-800 dark:text-darkButtonColor  text-lg font-medium'>
								عدد الحيوانات
							</label>
							<input
								type='number'
								className='w-full p-3 mt-2 border border-gray-300 rounded-md bg-white dark:bg-[#333] text-gray-800 dark:text-darkButtonColor '
								value={animalsCount}
								onChange={(e) => setAnimalsCount(Number(e.target.value))}
							/>
						</div>

						{/* الوزن لكل حيوان */}
						<div>
							<label className='block text-gray-800 dark:text-darkButtonColor  text-lg font-medium'>
								وزن الحيوان الواحد (كجم)
							</label>
							<input
								type='number'
								className='w-full p-3 mt-2 border border-gray-300 rounded-md bg-white dark:bg-[#333] text-gray-800 dark:text-darkButtonColor '
								value={weightPerAnimal}
								onChange={(e) => setWeightPerAnimal(Number(e.target.value))}
							/>
						</div>

						{/* زر الحسبة */}
						<div className='col-span-2'>
							<button
								onClick={calculateFeed}
								className='w-full p-3 text-white  text-lg rounded-md mt-4 bg-darkButtonColor hover:bg-ButtonColoreffect dark:bg-darkButtonColor dark:hover:bg-[#FFD366] transition-colors'>
								احسب كمية العلف المطلوبة
							</button>
						</div>
					</div>
				</motion.div>

				{/* النتيجة */}
				{feedAmount !== null && (
					<motion.div
						className='mt-8 bg-white dark:bg-[#2A2A2A] p-8 shadow-lg rounded-lg'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4 }}>
						<h2 className='text-2xl font-semibold text-gray-800 dark:text-darkButtonColor  mb-4'>
							النتيجة
						</h2>
						<p className='text-lg text-gray-700 dark:text-gray-300'>
							كمية العلف المطلوبة خلال {daysCount} يومًا لـ {animalsCount}{' '}
							{animalType === 'Poultry'
								? 'طائر'
								: animalType === 'Cattle'
								? 'بقرة'
								: 'رأس'}{' '}
							(بوزن {weightPerAnimal} كجم لكل حيوان) هي:
						</p>
						<p className='text-3xl font-bold text-darkButtonColor dark:text-yellow-400 mt-4'>
							{feedAmount.toFixed(2)} كجم
						</p>
					</motion.div>
				)}
			</div>
		</motion.div>
	);
};

export default FeedCalculator;
