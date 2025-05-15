'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import About from './About';
import Products from './products';

const employee = [
	{
		name: 'أحمد محمد',
		role: 'عامل بالمصنع',
		image: '/images/man.jpg',
	},
	{
		name: 'محمد علي',
		role: 'عامل بالمصنع',
		image: '/images/hand.jpg',
	},
	{
		name: 'سارة محمود',
		role: 'عامل بالمصنع',
		image: '/images/hand.jpg',
	},
	{
		name: 'أحمد محمد',
		role: 'عامل بالمصنع',
		image: '/images/man.jpg',
	},
	{
		name: 'محمد علي',
		role: 'عامل بالمصنع',
		image: '/images/doctor.jpg',
	},
	{
		name: 'سارة محمود',
		role: 'عامل بالمصنع',
		image: '/images/number 1.jpg',
	},
	{
		name: 'أحمد محمد',
		role: 'عامل بالمصنع',
		image: '/images/cirtificate.png',
	},
	{
		name: 'أحمد محمد',
		role: 'عامل بالمصنع',
		image: '/images/man.jpg',
	},
];
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
			<Products />
			<About />
			<section className='container mx-auto  pb-20 max-w-7xl px-4'>
				<h2 className='text-5xl font-bold text-center py-6'>فريق العمل</h2>
				<div className='mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 gap-y-8 md:gap-y-12 md:gap-7 xl:gap-10'>
					{employee.map((item, index) => (
						<div
							key={index}
							className='text-center flex flex-col justify-center items-center '>
							<div className='w-28 h-28  md:w-32 md:h-32  lg:w-36 lg:h-36 xl:w-44 xl:h-44  rounded-full overflow-hidden'>
								{' '}
								<Image
									src={item.image}
									alt={`فريق العمل ${index + 1}`}
									width={110}
									height={110}
									className='object-cover size-44'
								/>
							</div>

							<h3 className='mt-4 font-semibold'>{item.name}</h3>
							<p>{item.role}</p>
						</div>
					))}
				</div>
			</section>
		</motion.div>
	);
};

export default HomePage;
