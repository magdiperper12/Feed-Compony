'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface items {
	image: string;
	title: string;
	description: string;
	button: string;
	link: string;
}
const Products = () => {
	const items: items[] = [
		{
			image: '/images/animal.png',
			title: 'اعلاف حيونات اخري',
			description:
				'هدفنا هو توفير حلول تكنولوجية متكاملة تساهم في تطوير الشركات. علف مركز بتركيبة غنية مدعم بالفيتامينات والمعادن مخصص لتسمين',
			button: 'معرفة المزيد',
			link: '/types/animal',
		},
		{
			image: '/images/poultryimage.png',
			title: 'اعلاف دواجن',
			description:
				'هدفنا هو توفير حلول تكنولوجية متكاملة تساهم في تطوير الشركات.علف مركز بتركيبة غنية مدعم بالفيتامينات والمعادن مخصص لتسمين',
			button: 'معرفة المزيد',
			link: '/types/poultry',
		},
		{
			image: '/images/mwashi.png',
			title: 'اعلاف مواشي',
			description:
				'هدفنا هو توفير حلول تكنولوجية متكاملة تساهم في تطوير الشركات.علف مركز بتركيبة غنية مدعم بالفيتامينات والمعادن مخصص لتسمين',
			button: 'معرفة المزيد',
			link: '/types/mwashi',
		},
	];
	return (
		<section className='container mx-auto px-5 md:px-10 lg:px-16 xl:px-32  '>
			<motion.h2
				className='text-3xl md:text-4xl font-bold   text-center text-darkButtonColor mb-12'
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}>
				شركة المتحده للاعلاف
			</motion.h2>
			<div className='space-y-28'>
				{items.map((item, index) => (
					<motion.div
						key={index}
						className={`mt-12 flex flex-col md:flex-row ${
							index === 1 ? 'md:flex-row-reverse' : ''
						} items-start gap-12`}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: index * 0.2 }}>
						<motion.div
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.12 }}
							initial={{ opacity: 0, y: 60 }}
							className='w-full md:w-1/2'>
							<Image
								src={item.image}
								alt={item.title}
								width={950}
								height={700}
								className=' object-cover   '
							/>
						</motion.div>
						<div className='w-full md:w-1/2 text-gray-700 dark:text-gray-200 md:mt-20'>
							<h3 className='text-3xl font-bold text-PrimaryTextColors dark:text-darkPrimaryTextColors mb-4'>
								<span className='bg-green-500  p-1 m-3 me-0'></span>
								{item.title}
							</h3>
							<p className='text-lg  dark:text-darkPrimaryTextColors leading-relaxed'>
								{item.description}
							</p>
							<Link
								href={item.link}
								className='inline-block mt-6 px-6 py-2 bg-darkButtonColor text-white rounded-md shadow hover:bg-primary-dark transition duration-300'>
								{item.button}
							</Link>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Products;
