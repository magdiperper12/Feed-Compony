'use client';

import { motion } from 'framer-motion';

const AboutPoultryFeedPage = () => {
	return (
		<motion.div
			className='bg-gray-100 min-h-screen py-12'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}>
			<div className='max-w-7xl mx-auto px-6'>
				{/* Title Section */}
				<motion.div
					className='text-center mb-12'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}>
					<h1 className='text-4xl font-bold text-gray-800'>اعلاف الدواجن</h1>
					<p className='text-xl text-gray-600 mt-4'>
						نحن نقدم مجموعة متنوعة من أعلاف الدواجن التي تساهم في تحسين صحة
						الإنتاج وزيادة الإنتاجية.
					</p>
				</motion.div>

				{/* What is Poultry Feed Section */}
				<motion.div
					className='bg-white p-8 shadow-lg rounded-lg mb-12'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3 }}>
					<h2 className='text-3xl font-semibold text-gray-800 mb-6'>
						ما هي أعلاف الدواجن؟
					</h2>
					<p className='text-lg text-gray-700'>
						أعلاف الدواجن هي مجموعة من المواد الغذائية التي تستخدم في تغذية
						الدواجن، وتساعد على تحسين النمو، الصحة، وزيادة الإنتاجية في مزارع
						الدواجن. تتنوع أنواع الأعلاف لتلبية احتياجات الدواجن في مختلف مراحل
						حياتها من الفقس وحتى فترة الإنتاج.
					</p>
				</motion.div>

				{/* Types of Poultry Feed Section */}
				<motion.div
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4 }}>
					<div className='bg-white shadow-lg rounded-lg p-6'>
						<h3 className='text-xl font-semibold text-gray-800 mb-4'>
							أعلاف الدواجن اللاحم
						</h3>
						<p className='text-gray-600'>
							هذه الأعلاف مخصصة للدواجن التي يتم تربيها من أجل اللحم، وهي تحتوي
							على كميات عالية من البروتين لدعم النمو السريع.
						</p>
					</div>
					<div className='bg-white shadow-lg rounded-lg p-6'>
						<h3 className='text-xl font-semibold text-gray-800 mb-4'>
							أعلاف الدواجن البياضة
						</h3>
						<p className='text-gray-600'>
							تتخصص هذه الأعلاف في تزويد الدواجن البياضة بالعناصر الغذائية التي
							تدعم إنتاج البيض وتحسن من جودته.
						</p>
					</div>
					<div className='bg-white shadow-lg rounded-lg p-6'>
						<h3 className='text-xl font-semibold text-gray-800 mb-4'>
							أعلاف الدواجن الصغيرة
						</h3>
						<p className='text-gray-600'>
							هذه الأعلاف مصممة خصيصًا لتلبية احتياجات الدواجن في مراحلها
							المبكرة من الحياة، حيث تحتوي على مزيج من الفيتامينات والمعادن لدعم
							نموها الصحي.
						</p>
					</div>
				</motion.div>

				{/* Benefits of Poultry Feed Section */}
				<motion.div
					className='bg-white p-8 shadow-lg rounded-lg mb-12'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}>
					<h2 className='text-3xl font-semibold text-gray-800 mb-6'>
						فوائد أعلاف الدواجن
					</h2>
					<ul className='list-disc pl-6 text-lg text-gray-700 space-y-4'>
						<li>تحسين معدلات النمو وزيادة الوزن في فترة قصيرة.</li>
						<li>زيادة إنتاج البيض وتحسين جودته.</li>
						<li>تحسين صحة الدواجن العامة وتقليل الإصابة بالأمراض.</li>
						<li>توفير تغذية متوازنة لدعم الدورة الإنتاجية في مزارع الدواجن.</li>
					</ul>
				</motion.div>

				{/* Contact Section */}
				<motion.div
					className='bg-white p-8 shadow-lg rounded-lg'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.6 }}>
					<button className='text-3xl font-semibold text-gray-800 mb-6'>
						تواصل معنا
					</button>
					<p className='text-lg text-gray-700 mb-4'>
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
