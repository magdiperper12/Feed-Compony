'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const HomePage = () => {
	return (
		<motion.div
			className='min-h-screen bg-Background text-PrimaryTextColors dark:bg-darkBackground dark:text-darkPrimaryTextColors'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
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
			<section className='container mx-auto px-6 py-16'>
				<h2 className='text-3xl font-semibold text-center'>معلومات عنا</h2>
				<div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-12'>
					<div>
						<h3 className='text-xl font-semibold'>رؤيتنا</h3>
						<p className='mt-4'>
							نحن نسعى لأن نكون رواد في مجال تطوير الحلول التقنية المبتكرة...
						</p>
					</div>
					<div>
						<h3 className='text-xl font-semibold'>مهمتنا</h3>
						<p className='mt-4'>
							هدفنا هو توفير حلول تكنولوجية متكاملة تساهم في تطوير الشركات...
						</p>
					</div>
				</div>
			</section>

			{/* Why Choose Us Section */}
			<section className='bg-ButtonColor dark:bg-darkButtonColor text-white py-16'>
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

			{/* Team Section */}
			<section className='container mx-auto px-6 py-16'>
				<h2 className='text-3xl font-semibold text-center'>فريق العمل</h2>
				<div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12'>
					{[
						{ name: 'أحمد محمد', role: 'مطور Frontend' },
						{ name: 'محمد علي', role: 'مطور Backend' },
						{ name: 'سارة محمود', role: 'مصممة UX/UI' },
					].map(({ name, role }, index) => (
						<div
							key={index}
							className='text-center'>
							<Image
								src='/window.svg'
								alt={`فريق العمل ${index + 1}`}
								width={150}
								height={150}
								className='rounded-full mx-auto object-cover'
							/>
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
