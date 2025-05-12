'use client';
import { motion } from 'framer-motion';

const JobOpportunities = () => {
	return (
		<motion.div
			className='bg-gray-100 min-h-screen py-12'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}>
			<div className='max-w-7xl mx-auto px-6'>
				{/* Header Section */}
				<motion.div
					className='text-center mb-12'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}>
					<h1 className='text-4xl font-bold text-gray-800'>
						انضم إلى عائلة الشركة المتحدة لصناعة الأعلاف
					</h1>
					<p className='text-xl text-gray-600 mt-4'>
						مع الثقافة الداعمة لـلشركة المتحدة لصناعة الأعلاف، والتي يقودها
						التفاؤل والإيمان بأن كل شخص يمكن أن ينمو ؛ يحصل الموظفون لدينا على
						فرص للتواصل وبناء العلاقات ليصبحوا جزءًا من مجتمع مذهل مع فريق مؤهل
						يبادله المعرفة.
					</p>
				</motion.div>

				{/* Why Join Us Section */}
				<motion.div
					className='bg-white p-6 mb-12 rounded-lg shadow-lg'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3 }}>
					<h2 className='text-3xl font-semibold text-gray-800 mb-4'>
						لماذا تنضم إلينا؟
					</h2>
					<p className='text-gray-600'>
						يأتي الحفاظ على سلامة الموظفين وصحتهم العامة على رأس أهداف الشركة
						المتحدة لصناعة الأعلاف عند ممارسة أنشطة التصنيع التي تضمن المعالجة
						بمعايير سلامة عالية. إلى جانب الصحة الجسدية، تعد راحة الموظفين
						النفسية من الأمور التي تهتم بها الشركة كثيرًا، من خلال تكوين فرق
						متجانسة وفتح الأبواب للجميع، والاستماع للموظفين، والتأكد من أن جميع
						موظفينا يعملون بسلاسة داخل مظلة الشركة.
					</p>
					<p className='text-gray-600 mt-4'>
						ثقافة الشركة المتحدة لصناعة الأعلاف تنعكس على الشفافية في تعامل
						قادتنا، مما يثمر في بناء شركاء استراتيجيين. من خلال الثقة المبنية
						على الشفافية وجودة منتجاتنا وخدمات سلسلة التوريد المقدمة، قد عززت
						علاقاتنا ونمونا واستدامتنا، مما يحقق الاستقرار الوظيفي لموظفينا.
					</p>
					<p className='text-gray-600 mt-4'>
						فرصنا الوظيفية تتجاوز التوقعات عند إجراء عمليات التوظيف والنقل
						والترقيات الداخلية. كونك عضوًا لدينا، سيمنحك الفرصة لتكون في عين
						الاعتبار كأولوية قصوى عند شغل منصب شاغر داخل الشركة المتحدة لصناعة
						الأعلاف، مما يسرع من نمو شبابنا السعودي للعمل والتطور في جميع
						المجالات المتاحة.
					</p>
				</motion.div>

				{/* Job Listings Section */}
				<motion.div
					className='text-center mb-12'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4 }}>
					<h2 className='text-3xl font-semibold text-gray-800 mb-4'>
						فرص العمل
					</h2>
					<p className='text-xl text-gray-600 mb-8'>
						انضم إلى عائلة الشركة المتحدة لصناعة الأعلاف. تجدون الفرص المتوفرة
						في الأسفل أو يمكنكم إرسال سيرتكم الذاتية إلى:
						<a
							href='mailto:ufmc-careers@ufmc.com.sa'
							className='text-blue-500 hover:underline'>
							ufmc-careers@ufmc.com.sa
						</a>
					</p>
				</motion.div>

				{/* Job Listings */}
				<motion.div
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}>
					{/* Job Example */}
					<motion.div
						className='bg-white shadow-lg rounded-lg p-6'
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}>
						<h3 className='text-2xl font-semibold text-gray-800'>
							وظيفة شاغرة: مطور Frontend
						</h3>
						<p className='text-gray-600 mt-4'>
							نحن نبحث عن مطور Frontend ذو خبرة للانضمام إلى فريقنا. ستكون
							مسؤولاً عن تطوير واجهات المستخدم التفاعلية.
						</p>
						<p className='text-gray-500 mt-2'>موقع الوظيفة: الرياض، السعودية</p>
						<a
							href='#apply'
							className='inline-block mt-4 text-blue-500 hover:text-blue-700'>
							قدم الآن
						</a>
					</motion.div>

					{/* Add more job listings here */}
					<motion.div
						className='bg-white shadow-lg rounded-lg p-6'
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}>
						<h3 className='text-2xl font-semibold text-gray-800'>
							وظيفة شاغرة: مصمم UX/UI
						</h3>
						<p className='text-gray-600 mt-4'>
							نحن نبحث عن مصمم UX/UI للانضمام إلى فريقنا. ستكون مسؤولاً عن تحسين
							تجربة المستخدم والتصميم الجرافيكي.
						</p>
						<p className='text-gray-500 mt-2'>موقع الوظيفة: جدة، السعودية</p>
						<a
							href='#apply'
							className='inline-block mt-4 text-blue-500 hover:text-blue-700'>
							قدم الآن
						</a>
					</motion.div>
				</motion.div>

				{/* Footer Section */}
				<div className='text-center mt-12'>
					<p className='text-xl text-gray-600'>
						يمكنك إرسال سيرتك الذاتية إلى:
						<a
							href='mailto:ufmc-careers@ufmc.com.sa'
							className='text-blue-500 hover:underline'>
							ufmc-careers@ufmc.com.sa
						</a>
					</p>
					<div className='mt-4'>
						<span className='text-gray-600'>
							شارك الوظيفة على وسائل التواصل الاجتماعي:{' '}
						</span>
						<a
							href='#'
							className='mx-2 text-blue-500 hover:text-blue-700'>
							Facebook
						</a>
						<a
							href='#'
							className='mx-2 text-blue-500 hover:text-blue-700'>
							LinkedIn
						</a>
						<a
							href='#'
							className='mx-2 text-blue-500 hover:text-blue-700'>
							Instagram
						</a>
						<a
							href='#'
							className='mx-2 text-blue-500 hover:text-blue-700'>
							Twitter
						</a>
						<a
							href='#'
							className='mx-2 text-blue-500 hover:text-blue-700'>
							WhatsApp
						</a>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default JobOpportunities;
