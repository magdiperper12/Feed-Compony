'use client';

import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import { FaBath, FaNoteSticky } from 'react-icons/fa6';
import About from '../../../components/About';

const AboutPage = () => {
	return (
		<div className='bg-Background text-gray-800 dark:bg-darkBackground dark:text-darkPrimaryTextColors py-20  space-y-20'>
			<section className='text-center space-y-10'>
				<h1 className='text-3xl md:text-5xl font-bold text-PrimaryTextColors'>
					رسالة الرئيس التنفيذي
				</h1>
				<div className='flex justify-center'>
					<Image
						src='/images/doctor.jpg'
						alt='المدير التنفيذي'
						width={400}
						height={400}
						className='rounded-xl shadow-lg object-cover'
					/>
				</div>
				<p className='max-w-4xl mx-auto leading-loose text-lg '>
					{/* النص كما هو بدون تعديل */}
					يعتبر الأمن الغذائي في أي مجتمع من أهم أولويات السياسة الاقتصادية
					والاجتماعية...
				</p>
			</section>

			{/* Section: Vision, Goals, Sustainability */}
			<section className='grid grid-cols-1 md:grid-cols-3 gap-10 text-center px-4 md:px-16 lg:px-20'>
				{[
					{
						icon: (
							<FaSearch
								size={40}
								className='text-PrimaryTextColors mx-auto mb-4'
							/>
						),
						title: 'رؤيتنا',
						desc: 'نحن في الشركة المتحدة لصناعة الأعلاف لا تتمحور رؤيتنا حول تغذية الثروة الحيوانية...',
					},
					{
						icon: (
							<FaNoteSticky
								size={40}
								className='text-PrimaryTextColors mx-auto mb-4'
							/>
						),
						title: 'أهدافنا',
						desc: 'نهدف في الشركة المتحدة لصناعة الأعلاف إلى تطوير الأبحاث وإلى تبني أفضل الإستراتيجيات...',
					},
					{
						icon: (
							<FaBath
								size={40}
								className='text-PrimaryTextColors mx-auto mb-4'
							/>
						),
						title: 'الاستدامة',
						desc: 'نحن في الشركة المتحدة لصناعة الأعلاف نؤمن إيمانا راسخا بأن الممارسات المستدامة...',
					},
				].map((item, idx) => (
					<div
						key={idx}
						className='p-6 border rounded-xl shadow hover:shadow-lg transition duration-300'>
						{item.icon}
						<h3 className='text-xl font-semibold text-PrimaryTextColors mb-2'>
							{item.title}
						</h3>
						<p className=' text-sm leading-relaxed'>{item.desc}</p>
					</div>
				))}
			</section>

			{/* Section: Stats */}
			<section className='grid grid-cols-1 md:grid-cols-3 gap-10 text-center px-4 md:px-16 lg:px-20'>
				{[
					{
						image: '/images/factory.png',
						title: '1.5 مليون طن',
						desc: 'إنتاج سنوي من العلف',
					},
					{
						image: '/images/employee.png',
						title: '+200',
						desc: 'من الموظفين',
					},
					{
						image: '/images/factory.png',
						title: '500+ ألف طن',
						desc: 'طاقة تخزينية',
					},
				].map((stat, idx) => (
					<div
						key={idx}
						className='flex flex-col items-center space-y-4'>
						<Image
							src={stat.image}
							alt={stat.title}
							width={100}
							height={100}
							className='h-28 w-28 object-contain'
						/>
						<h3 className='text-2xl font-bold text-PrimaryTextColors'>
							{stat.title}
						</h3>
						<p className=''>{stat.desc}</p>
					</div>
				))}
			</section>

			<About />
		</div>
	);
};

export default AboutPage;
