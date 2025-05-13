'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import About from './About';

interface items {
	image: string;
	title: string;
	description: string;
	button: string;
	link: string;
}
const HomePage = () => {
	const items: items[] = [
		{
			image: '/images/animal.png',
			title: 'اعلاف حيونات اخري',
			description:
				'هدفنا هو توفير حلول تكنولوجية متكاملة تساهم في تطوير الشركات...',
			button: 'معرفة المزيد',
			link: '/types/animal',
		},
		{
			image: '/images/poultryimage.png',
			title: 'اعلاف دواجن',
			description:
				'هدفنا هو توفير حلول تكنولوجية متكاملة تساهم في تطوير الشركات...',
			button: 'معرفة المزيد',
			link: '/types/poultry',
		},
		{
			image: '/images/mwashi.png',
			title: 'اعلاف مواشي',
			description:
				'هدفنا هو توفير حلول تكنولوجية متكاملة تساهم في تطوير الشركات...',
			button: 'معرفة المزيد',
			link: '/types/mwashi',
		},
	];
	return (
		<motion.div
			className='min-h-screen space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-36 bg-Background text-PrimaryTextColors dark:bg-darkBackground dark:text-darkPrimaryTextColors'
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.5 }}>
			{/* Hero Section */}
			<section
				className='relative bg-cover bg-center h-[100vh] text-white flex justify-center items-center'
				style={{ backgroundImage: 'url(/images/background.jpg)' }}>
				<div className='absolute inset-0 bg-black opacity-60 dark:opacity-70'></div>
				<div className='relative container mx-auto px-6 py-24 text-center space-y-6'>
					<motion.h1
						className='text-5xl md:text-6xl font-bold'
						initial={{ opacity: 0, y: -50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}>
						<div>
							مرحبًا بكم في الشركة{' '}
							<span className='text-orange-600'>المتحدة</span>
						</div>
						<div className='pt-7'>لصناعة الأعلاف</div>
					</motion.h1>

					<motion.p
						className='text-lg md:text-2xl mt-4'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5, duration: 0.6 }}>
						نبذة عن شركتنا ورؤيتنا المستقبلية
					</motion.p>

					<motion.div
						className='flex justify-center items-center gap-8'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8, duration: 0.6 }}>
						<Link
							href='/Contact'
							className='bg-white px-5 py-2 text-lg rounded-full text-darkBackground flex justify-center items-center gap-2 shadow-md hover:shadow-lg transition duration-300'>
							<span className='bg-darkButtonColor p-2 rounded-full text-white'>
								<FaArrowLeft className='text-xs' />
							</span>
							تواصل معنا
						</Link>

						<Link
							href='/About'
							className='bg-white px-5 py-2 text-lg rounded-full text-darkButtonColor shadow-md hover:shadow-lg transition duration-300'>
							معرفة المزيد
						</Link>
					</motion.div>
				</div>
			</section>
			{/* Company Info Section */}
			<section className='container mx-auto px-5 md:px-10 lg:px-16 xl:px-32  '>
				<motion.h2
					className='text-3xl md:text-4xl font-bold text-center text-primary mb-12'
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}>
					شركة المتحده للاعلاف
				</motion.h2>

				{items.map((item, index) => (
					<motion.div
						key={index}
						className={`mt-12 flex flex-col md:flex-row ${
							index === 1 ? 'md:flex-row-reverse' : ''
						} items-center gap-10`}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: index * 0.2 }}>
						<motion.img
							src={item.image}
							alt={item.title}
							initial={{ opacity: 0, y: 60 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.12 }}
							className='w-full md:w-1/2 h-auto object-cover'
						/>
						<div className='w-full md:w-1/2 text-gray-700 dark:text-gray-200'>
							<h3 className='text-3xl font-bold text-PrimaryTextColors dark:text-darkPrimaryTextColors mb-4'>
								{item.title}
							</h3>
							<p className='text-lg text-PrimaryTextColors dark:text-darkPrimaryTextColors leading-relaxed'>
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
			</section>
			{/* Why Choose Us Section */}
			<About />
			{/* Team Section */}{' '}
			<section className='container mx-auto px-6 pb-20'>
				<h2 className='text-5xl font-bold text-center'>فريق العمل</h2>
				<div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12'>
					{[
						{ name: 'أحمد محمد', role: 'عامل بالمصنع' },
						{ name: 'محمد علي', role: 'عامل بالمصنع' },
						{ name: 'سارة محمود', role: 'عامل بالمصنع' },
					].map(({ name, role }, index) => (
						<div
							key={index}
							className='text-center flex flex-col justify-center items-center'>
							<div className=' w-44 h-44  rounded-full overflow-hidden'>
								{' '}
								<Image
									src='/images/man.jpg'
									alt={`فريق العمل ${index + 1}`}
									width={150}
									height={150}
									className='object-cover size-52'
								/>
							</div>

							<h3 className='mt-4 font-semibold'>{name}</h3>
							<p>{role}</p>
						</div>
					))}
				</div>
			</section>
		</motion.div>
	);
};

export default HomePage;
