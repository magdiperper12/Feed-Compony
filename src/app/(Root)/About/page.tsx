'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutPage = () => {
	return (
		<motion.div
			className='min-h-screen bg-Background text-PrimaryTextColors dark:bg-darkBackground dark:text-darkPrimaryTextColors'
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

export default AboutPage;
