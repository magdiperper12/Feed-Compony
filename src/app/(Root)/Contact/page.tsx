'use client';

import { motion } from 'framer-motion';

const ContactPage = () => {
	return (
		<motion.div
			className='bg-Background dark:bg-darkBackground min-h-screen py-12 mt-16'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}>
			<div className='max-w-7xl mx-auto px-6'>
				{/* Contact Form Section */}
				<motion.div
					className='bg-white dark:bg-[#2A2A2A] shadow-lg rounded-lg p-8'
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}>
					<h2 className='text-3xl font-semibold text-center text-PrimaryTextColors dark:text-darkPrimaryTextColors mb-6'>
						اتصل بنا
					</h2>
					<form className='space-y-6'>
						<div>
							<label
								className='block text-PrimaryTextColors dark:text-darkPrimaryTextColors'
								htmlFor='name'>
								الاسم
							</label>
							<input
								id='name'
								type='text'
								className='w-full p-3 outline-none  mt-2 border border-gray-300 rounded-md dark:bg-[#333] dark:text-white'
								placeholder='أدخل اسمك'
							/>
						</div>

						<div>
							<label
								className='block text-PrimaryTextColors dark:text-darkPrimaryTextColors'
								htmlFor='email'>
								البريد الإلكتروني
							</label>
							<input
								id='email'
								type='email'
								className='w-full outline-none  p-3 mt-2 border border-gray-300 rounded-md dark:bg-[#333] dark:text-white'
								placeholder='أدخل بريدك الإلكتروني'
							/>
						</div>

						<div>
							<label
								className='block text-PrimaryTextColors dark:text-darkPrimaryTextColors'
								htmlFor='message'>
								الرسالة
							</label>
							<textarea
								id='message'
								rows={4}
								className='w-full outline-none  p-3 mt-2 border border-gray-300 rounded-md dark:bg-[#333] dark:text-white'
								placeholder='أدخل رسالتك هنا'
							/>
						</div>
						<div className='w-full flex justify-center items-center '>
							<button
								type='submit'
								className='w-2/3 md:2/6 bg-ButtonColor dark:bg-ButtonColoreffect text-white py-3 mt-6 rounded-md hover:bg-ButtonColoreffect dark:hover:bg-[#FFD366] transition-colors'>
								إرسال
							</button>
						</div>
					</form>
				</motion.div>

				{/* Contact Information */}
				<motion.div
					className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-12'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3 }}>
					<div className='bg-white dark:bg-[#2A2A2A] p-8 shadow-lg rounded-lg'>
						<h3 className='text-xl font-semibold text-PrimaryTextColors dark:text-darkPrimaryTextColors mb-4'>
							معلومات الاتصال
						</h3>
						<ul className='space-y-4 text-PrimaryTextColors dark:text-darkPrimaryTextColors'>
							<li>
								<strong>الهاتف:</strong> +966 123 456 789
							</li>
							<li>
								<strong>البريد الإلكتروني:</strong> info@example.com
							</li>
							<li>
								<strong>العنوان:</strong> كفرالشيخ, مصر
							</li>
						</ul>
					</div>

					{/* Map Section */}
					<div className='bg-white dark:bg-[#2A2A2A] p-8 shadow-lg rounded-lg'>
						<h3 className='text-xl font-semibold text-PrimaryTextColors dark:text-darkPrimaryTextColors mb-4'>
							موقعنا
						</h3>
						<div className='w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg'>
							<iframe
								className='w-full h-full rounded-lg'
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110645.18395700744!2d30.91117175!3d31.1069631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79f424c8d37ff%3A0x7a7b7b292dd2f9c3!2z2YXYs9in2YUg2KfZhNi52KjYqCDZhNmE2YXZitin2YTZgSDYp9mE2LPYqNmK2KfYqiDYp9mE2KjZitmE2YrYqQ!5e0!3m2!1sar!2seg!4v1713607470025!5m2!1sar!2seg'
								allowFullScreen
								loading='lazy'></iframe>
						</div>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default ContactPage;
