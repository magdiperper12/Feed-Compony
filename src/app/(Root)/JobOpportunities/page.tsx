'use client';
import HeaderSection from '../../../components/HeaderSection';
import { motion } from 'framer-motion';

const JobOpportunities = () => {
	const wazzaf = [
		{
			name: 'وظيفة شاغرة',
			desc: 'نحن نبحث عن مطور Frontend ذو خبرة للانضمام إلى فريقنا. ستكون	مسؤولاً عن تطوير واجهات المستخدم التفاعلية.',
			button: 'قدم الآن',
		},
		{
			name: 'وظيفة شاغرة',
			desc: '		نحن نبحث عن مصمم UX/UI للانضمام إلى فريقنا. ستكون مسؤولاً عن تحسي	تجربة المستخدم والتصميم الجرافيكي.',
			button: 'قدم الآن',
		},
		{
			name: 'وظيفة شاغرة',
			desc: 'نحن نبحث عن مطور Frontend ذو خبرة للانضمام إلى فريقنا. ستكون	مسؤولاً عن تطوير واجهات المستخدم التفاعلية.',
			button: 'قدم الآن',
		},
		{
			name: 'وظيفة شاغرة',
			desc: '	نحن نبحث عن مصمم UX/UI للانضمام إلى فريقنا. ستكون مسؤولاً عن تحسين	تجربة المستخدم والتصميم الجرافيكي.',
			button: 'قدم الآن',
		},
		{
			name: 'وظيفة شاغرة',
			desc: 'نحن نبحث عن مطور Frontend ذو خبرة للانضمام إلى فريقنا. ستكون	مسؤولاً عن تطوير واجهات المستخدم التفاعلية.',
			button: 'قدم الآن',
		},
	];
	return (
		<motion.div
			className='min-h-screen py-12 bg-Background dark:bg-darkBackground'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}>
			<div className='max-w-7xl mx-auto px-6'>
				<div className='py-16'>
					<HeaderSection
						title='انضم إلى عائلة الشركة المتحدة لصناعة الأعلاف'
						subTitle='مع الثقافة الداعمة لـلشركة المتحدة لصناعة الأعلاف، والتي يقودها
						التفاؤل والإيمان بأن كل شخص يمكن أن ينمو ؛ يحصل الموظفون لدينا على
						فرص للتواصل وبناء العلاقات ليصبحوا جزءًا من مجتمع مذهل مع فريق مؤهل
						يبادله المعرفة.'
						ComponentTitle='لماذا تنضم إلينا؟'
						description='	يأتي الحفاظ على سلامة الموظفين وصحتهم العامة على رأس أهداف الشركة
						المتحدة لصناعة الأعلاف عند ممارسة أنشطة التصنيع التي تضمن المعالجة
						بمعايير سلامة عالية. إلى جانب الصحة الجسدية، تعد راحة الموظفين
						النفسية من الأمور التي تهتم بها الشركة كثيرًا، من خلال تكوين فرق
						متجانسة وفتح الأبواب للجميع، والاستماع للموظفين، والتأكد من أن جميع
						موظفينا يعملون بسلاسة داخل مظلة الشركة.'
						Items={wazzaf}
					/>
				</div>

				<motion.div
					className='text-center mb-12'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4 }}>
					<h2 className='text-3xl font-semibold text-PrimaryTextColors dark:text-darkPrimaryTextColors mb-4'>
						فرص العمل
					</h2>
					<p className='text-xl text-PrimaryTextColors dark:text-darkPrimaryTextColors mb-8'>
						انضم إلى عائلة الشركة المتحدة لصناعة الأعلاف. تجدون الفرص المتوفرة
						في الأسفل أو يمكنكم إرسال سيرتكم الذاتية إلى:
						<a
							href='mailto:ufmc-careers@ufmc.com.sa'
							className='text-LinksElements hover:text-darkButtonColor dark:text-darkButtonColor dark:hover:text-[#FFD366]'>
							ufmc-careers@ufmc.com.sa
						</a>
					</p>
				</motion.div>

				{/* Footer Section */}
				<div className='text-center mt-12'>
					<p className='text-xl text-PrimaryTextColors dark:text-darkPrimaryTextColors'>
						يمكنك إرسال سيرتك الذاتية إلى:
						<a
							href='mailto:ufmc-careers@ufmc.com.sa'
							className='text-LinksElements hover:text-darkButtonColor dark:text-darkButtonColor dark:hover:text-[#FFD366]'>
							ufmc-careers@ufmc.com.sa
						</a>
					</p>
					<div className='mt-4'>
						<span className='text-PrimaryTextColors dark:text-darkPrimaryTextColors'>
							شارك الوظيفة على وسائل التواصل الاجتماعي:{' '}
						</span>
						<a
							href='#'
							className='mx-2 text-LinksElements hover:text-darkButtonColor dark:text-darkButtonColor dark:hover:text-[#FFD366]'>
							Facebook
						</a>
						<a
							href='#'
							className='mx-2 text-LinksElements hover:text-darkButtonColor dark:text-darkButtonColor dark:hover:text-[#FFD366]'>
							LinkedIn
						</a>
						<a
							href='#'
							className='mx-2 text-LinksElements hover:text-darkButtonColor dark:text-darkButtonColor dark:hover:text-[#FFD366]'>
							Instagram
						</a>
						<a
							href='#'
							className='mx-2 text-LinksElements hover:text-darkButtonColor dark:text-darkButtonColor dark:hover:text-[#FFD366]'>
							Twitter
						</a>
						<a
							href='#'
							className='mx-2 text-LinksElements hover:text-darkButtonColor dark:text-darkButtonColor dark:hover:text-[#FFD366]'>
							WhatsApp
						</a>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default JobOpportunities;
