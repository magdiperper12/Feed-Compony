'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import About from './About';
import Products from './products';

interface items {
	image: string;
	title: string;
	description: string;
	button: string;
	link: string;
}
const HomePage = () => {
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
			{/* Company Product Section */}
			<Products />
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
						{ name: 'أحمد محمد', role: 'عامل بالمصنع' },
						{ name: 'محمد علي', role: 'عامل بالمصنع' },
						{ name: 'سارة محمود', role: 'عامل بالمصنع' },
						{ name: 'أحمد محمد', role: 'عامل بالمصنع' },
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
