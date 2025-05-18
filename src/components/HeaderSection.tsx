'use client';

import { motion } from 'framer-motion';

interface items {
	name: string;
	desc: string;
	button: string;
}
interface HeaderSectionProps {
	title: string;
	subTitle: string;
	ComponentTitle: string;
	description: string;
	Items: items[];
}
function HeaderSection({
	title,
	subTitle,
	ComponentTitle,
	description,
	Items,
}: HeaderSectionProps) {
	return (
		<div>
			<motion.div
				className='text-center mb-12'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2 }}>
				<h1 className='text-4xl font-bold text-darkButtonColor'>{title}</h1>
				<p className='text-xl text-gray-600 dark:text-green-100 mt-4'>
					{subTitle}
				</p>
			</motion.div>

			{/* What is Poultry Feed Section */}
			<motion.div
				className='bg-white p-8 shadow-lg rounded-lg mb-12 dark:bg-green-950'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.3 }}>
				<h2 className='text-3xl font-semibold text-darkButtonColor dark:text-green-400 mb-6'>
					{ComponentTitle}
				</h2>
				<p className='text-lg text-gray-700 dark:text-gray-200'>
					{description}
				</p>
			</motion.div>

			{/* Types of Poultry Feed Section */}
			<motion.div
				className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.4 }}>
				{Items.map((item, index) => (
					<div
						key={index}
						className='bg-white shadow-lg rounded-lg p-6 dark:bg-green-950'>
						<h3 className='text-xl font-semibold text-darkButtonColor dark:text-green-400 mb-4'>
							{item.name}
						</h3>
						<p className='text-gray-600 dark:text-gray-200'>{item.desc}</p>
						<a
							href='#apply'
							className={`w-1/3 bg-darkButtonColor  hover:bg-green-200 rounded-lg  flex items-center justify-center  ${
								item.button === '' ? 'p-0' : 'p-1'
							} mt-4 text-white dark:text-green-100 hover:text-darkButtonColor  dark:hover:text-[#FFD366]`}>
							{item.button}
						</a>
					</div>
				))}
			</motion.div>
		</div>
	);
}

export default HeaderSection;
