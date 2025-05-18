'use client';

import Products from '../../../components/products';
import { motion } from 'framer-motion';
import HeaderSection from '../../../components/HeaderSection';

const AboutPoultryFeedPage = () => {
	const aalaaf = [
		{
			name: 'أعلاف الدواجن اللاحم',
			desc: '	هذه الأعلاف مخصصة للدواجن التي يتم تربيها من أجل اللحم، وهي تحتوي	على كميات عالية من البروتين لدعم النمو السريع.',
			button: '',
		},
		{
			name: 'أعلاف الدواجن البياضة',
			desc: 'تتخصص هذه الأعلاف في تزويد الدواجن البياضة بالعناصر الغذائية التي	تدعم إنتاج البيض وتحسن من جودته.',
			button: '',
		},
		{
			name: 'أعلاف الدواجن الصغيرة',
			desc: 'هذه الأعلاف مصممة خصيصًا لتلبية احتياجات الدواجن في مراحلها	المبكرة من الحياة، حيث تحتوي على مزيج من الفيتامينات والمعادن لدعم	نموها الصحي.',
			button: '',
		},
	];
	return (
		<motion.div
			className='bg-gray-100 dark:bg-black min-h-screen  py-28 '
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}>
			<div className='max-w-7xl mx-auto px-6'>
				{/* Title Section */}
				<HeaderSection
					title='اعلاف الدواجن'
					subTitle='نحن نقدم مجموعة متنوعة من أعلاف الدواجن التي تساهم في تحسين صحة
						الإنتاج وزيادة الإنتاجية.'
					ComponentTitle='ما هي أعلاف الدواجن؟'
					description='	أعلاف الدواجن هي مجموعة من المواد الغذائية التي تستخدم في تغذية
						الدواجن، وتساعد على تحسين النمو، الصحة، وزيادة الإنتاجية في مزارع
						الدواجن. تتنوع أنواع الأعلاف لتلبية احتياجات الدواجن في مختلف مراحل
						حياتها من الفقس وحتى فترة الإنتاج.'
					Items={aalaaf}
				/>

				<div className='py-20'>
					<Products />
				</div>

				{/* Contact Section */}
				<motion.div
					className='bg-white dark:bg-green-950 p-8 shadow-lg rounded-lg '
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.6 }}>
					<button className='text-3xl font-semibold text-darkButtonColor dark:text-green-400 mb-6'>
						تواصل معنا
					</button>
					<p className='text-lg text-gray-700 dark:text-gray-200 mb-4'>
						إذا كنت مهتمًا بمزيد من المعلومات حول أعلاف الدواجن أو ترغب في شراء
						منتجنا، لا تتردد في الاتصال بنا.
					</p>
					<a
						href='mailto:info@example.com'
						className='text-blue-500 hover:underline text-xl'
						aria-label='email'>
						info@example.com
					</a>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default AboutPoultryFeedPage;
