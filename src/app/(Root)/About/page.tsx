'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
const AboutPage = () => {
	return (
		<motion.div
			className='bg-gray-100 min-h-screen'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}>
			{/* Hero Section */}
			<section
				className='relative bg-cover bg-center h-[500px] text-white'
				style={{ backgroundImage: 'url(/window.svg)' }}>
				<div className='absolute inset-0 bg-black opacity-50'></div>
				<div className='relative container mx-auto px-6 py-24 text-center'>
					<h1 className='text-4xl md:text-5xl font-bold'>من نحن</h1>
					<p className='text-lg md:text-2xl mt-4'>
						نبذة عن شركتنا ورؤيتنا المستقبلية
					</p>
				</div>
			</section>

			{/* Company Info Section */}
			<section className='container mx-auto px-6 py-16'>
				<h2 className='text-3xl font-semibold text-gray-800 text-center'>
					معلومات عنا
				</h2>
				<div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-12'>
					<div className='text-gray-700'>
						<h3 className='text-xl font-semibold'>رؤيتنا</h3>
						<p className='mt-4'>
							نحن نسعى لأن نكون رواد في مجال تطوير الحلول التقنية المبتكرة،
							وتقديم الخدمات التي تلبي احتياجات السوق المحلي والدولي.
						</p>
					</div>
					<div className='text-gray-700'>
						<h3 className='text-xl font-semibold'>مهمتنا</h3>
						<p className='mt-4'>
							هدفنا هو توفير حلول تكنولوجية متكاملة تساهم في تطوير الشركات
							والأفراد على حد سواء، مما يسهم في النمو المستدام.
						</p>
					</div>
				</div>
			</section>

			{/* Why Choose Us Section */}
			<section className='bg-blue-500 text-white py-16'>
				<div className='container mx-auto px-6 text-center'>
					<h2 className='text-3xl font-semibold'>لماذا تختارنا؟</h2>
					<div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
						<div className='flex items-center justify-center'>
							<div className='w-16 h-16 bg-white text-blue-500 rounded-full flex items-center justify-center'>
								<span className='text-2xl'>🌟</span>
							</div>
							<div className='ml-4'>
								<h3 className='text-xl font-semibold'>جودة عالية</h3>
								<p>نحن نقدم خدمات عالية الجودة تستند إلى أحدث التقنيات.</p>
							</div>
						</div>
						<div className='flex items-center justify-center'>
							<div className='w-16 h-16 bg-white text-blue-500 rounded-full flex items-center justify-center'>
								<span className='text-2xl'>💡</span>
							</div>
							<div className='ml-4'>
								<h3 className='text-xl font-semibold'>إبداع</h3>
								<p>نحن نبتكر حلولاً جديدة تلبي احتياجات عملائنا الفريدة.</p>
							</div>
						</div>
						<div className='flex items-center justify-center'>
							<div className='w-16 h-16 bg-white text-blue-500 rounded-full flex items-center justify-center'>
								<span className='text-2xl'>🤝</span>
							</div>
							<div className='ml-4'>
								<h3 className='text-xl font-semibold'>شراكة استراتيجية</h3>
								<p>
									نؤمن بأهمية التعاون المستمر مع عملائنا لتحقيق النجاح المشترك.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className='container mx-auto px-6 py-16'>
				<h2 className='text-3xl font-semibold text-gray-800 text-center'>
					فريق العمل
				</h2>
				<div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12'>
					<div className='text-center'>
						<Image
							src='/window.svg'
							alt='فريق العمل 1'
							width={150}
							height={150}
							className='rounded-full mx-auto object-cover'
						/>
						<h3 className='mt-4 font-semibold'>أحمد محمد</h3>
						<p>مطور Frontend</p>
					</div>
					<div className='text-center'>
						<Image
							src='/window.svg'
							alt='فريق العمل 2'
							width={150}
							height={150}
							className='rounded-full mx-auto object-cover'
						/>
						<h3 className='mt-4 font-semibold'>محمد علي</h3>
						<p>مطور Backend</p>
					</div>
					<div className='text-center'>
						<Image
							src='/window.svg'
							alt='فريق العمل 3'
							width={150}
							height={150}
							className='rounded-full mx-auto object-cover'
						/>
						<h3 className='mt-4 font-semibold'>سارة محمود</h3>
						<p>مصممة UX/UI</p>
					</div>
				</div>
			</section>
		</motion.div>
	);
};

export default AboutPage;
