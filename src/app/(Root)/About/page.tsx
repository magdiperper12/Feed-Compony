'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
const AboutPage = () => {
	return (
		<motion.div
			className='bg-Background dark:bg-darkBackground min-h-screen'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}>
			<div className='max-w-7xl mx-auto px-6'>
				<section className='bg-ButtonColor text-white text-center py-24 dark:bg-darkButtonColor'>
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
					className='py-20 bg-white dark:bg-darkBackground text-center'>
					<motion.h2
						className='text-3xl font-semibold mb-6 text-PrimaryTextColors dark:text-darkPrimaryTextColors'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5 }}>
						عن الشركة
					</motion.h2>
					<motion.p
						className='text-lg mx-auto max-w-4xl text-[#666666] dark:text-[#CCCCCC]'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.6 }}>
						الشركة المتحدة لصناعة الأعلاف هي شركة رائدة في صناعة الأعلاف
						وتزويدها بالحلول المبتكرة في المملكة العربية السعودية. نحرص على
						تقديم منتجات ذات جودة عالية لدعم عملائنا في تربية الحيوانات.
					</motion.p>
				</section>{' '}
				<section className='container mx-auto px-6 py-16'>
					<h2 className='text-3xl font-semibold text-center'>فريق العمل</h2>
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
			</div>
		</motion.div>
	);
};

export default AboutPage;
