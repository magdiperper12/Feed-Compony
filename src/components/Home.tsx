'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
	return (
		<motion.div
			className='bg-gray-100 min-h-screen'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}>
			<div className='max-w-7xl mx-auto px-6'>
				<section className='bg-blue-500 text-white text-center py-24'>
					<motion.h1
						className='text-4xl font-semibold mb-4'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 }}>
						مرحبًا بكم في الشركة المتحدة لصناعة الأعلاف
					</motion.h1>
					<motion.p
						className='text-xl mb-8'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}>
						نحن نقدم حلولًا مبتكرة في صناعة الأعلاف لتلبية احتياجات عملائنا.
					</motion.p>
					<motion.button
						className='inline-block bg-white text-blue-500 px-6 py-2 rounded-lg'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4 }}>
						<Link
							href='#contact'
							className='text-lg font-semibold'>
							تواصل معنا
						</Link>
					</motion.button>
				</section>
				<section
					id='about'
					className='py-20 bg-white text-center'>
					<motion.h2
						className='text-3xl font-semibold text-gray-800 mb-6'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5 }}>
						عن الشركة
					</motion.h2>
					<motion.p
						className='text-lg text-gray-600 mx-auto max-w-4xl'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.6 }}>
						الشركة المتحدة لصناعة الأعلاف هي شركة رائدة في صناعة الأعلاف
						وتزويدها بالحلول المبتكرة في المملكة العربية السعودية. نحرص على
						تقديم منتجات ذات جودة عالية لدعم عملائنا في تربية الحيوانات.
					</motion.p>
				</section>

				{/* Products Section */}
				<section
					id='products'
					className='py-20 bg-gray-100'>
					<motion.h2
						className='text-3xl font-semibold text-gray-800 text-center mb-8'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.7 }}>
						منتجاتنا
					</motion.h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
						{/* Example Product */}
						<div className='bg-white shadow-lg rounded-lg overflow-hidden'>
							<Image
								width={70}
								height={90}
								src='/window.svg'
								alt='Product 1'
								className='w-full h-48 object-cover'
							/>
							<div className='p-6'>
								<h3 className='text-xl font-semibold text-gray-800'>
									علف للدواجن
								</h3>
								<p className='text-gray-600 mt-4'>
									أفضل علف للدواجن يتناسب مع جميع أنواع الدواجن.
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</motion.div>
	);
};

export default HomePage;
