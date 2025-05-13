'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
function About() {
	return (
		<div className='bg-ButtonColor dark:bg-darkBackground   text-white -pb-2'>
			{' '}
			<section className=' py-16'>
				<div className='container mx-auto px-6 text-center'>
					<h2 className='text-3xl font-semibold'>لماذا تختارنا؟</h2>
					<div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
						{[
							{
								icon: '🌟',
								title: 'جودة عالية',
								desc: 'نحن نقدم خدمات عالية الجودة.',
							},
							{ icon: '💡', title: 'إبداع', desc: 'نبتكر حلولاً جديدة.' },
							{
								icon: '🤝',
								title: 'شراكة استراتيجية',
								desc: 'نتعاون مع عملائنا لتحقيق النجاح.',
							},
						].map(({ icon, title, desc }, i) => (
							<div
								key={i}
								className='flex items-center justify-center'>
								<div className='w-16 h-16 bg-white text-ButtonColor dark:text-darkButtonColor rounded-full flex items-center justify-center'>
									<span className='text-2xl'>{icon}</span>
								</div>
								<div className='ml-4 text-left'>
									<h3 className='text-xl font-semibold'>{title}</h3>
									<p>{desc}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<section className=' text-center py-24 '>
				<motion.h1
					className='text-4xl font-semibold mb-4 text-white dark:text-darkPrimaryTextColors'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}>
					مرحبًا بكم في الشركة المتحدة لصناعة الأعلاف
				</motion.h1>
				<motion.p
					className='text-xl mb-8 text-white dark:text-darkPrimaryTextColors'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3 }}>
					نحن نقدم حلولًا مبتكرة في صناعة الأعلاف لتلبية احتياجات عملائنا.
				</motion.p>
				<motion.button
					className='bg-white text-ButtonColor hover:bg-ButtonColoreffect transition px-6 py-2 rounded-lg dark:text-darkBackground dark:hover:bg-[#FFD366]'
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
			{/* About Section */}
			<section
				id='about'
				className='pt-20 pb-20  md:pb-4  bg-Background dark:bg-black text-center'>
				<motion.h2
					className='text-3xl font-semibold mb-6 text-PrimaryTextColors dark:text-darkPrimaryTextColors'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}>
					عن الشركة
				</motion.h2>
				<motion.p
					className='text-lg mx-auto max-w-4xl  text-[#666666] dark:text-darkPrimaryTextColors'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.6 }}>
					الشركة المتحدة لصناعة الأعلاف هي شركة رائدة في صناعة الأعلاف وتزويدها
					بالحلول المبتكرة في مصر . نحرص على تقديم منتجات ذات جودة عالية لدعم
					عملائنا في تربية الحيوانات.
				</motion.p>
			</section>{' '}
		</div>
	);
}

export default About;
