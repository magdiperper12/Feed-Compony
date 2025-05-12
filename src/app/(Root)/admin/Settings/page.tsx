'use client';

import React, { useState } from 'react';

const Settings = () => {
	// إعدادات النصوص
	const [siteName, setSiteName] = useState('شركة المتحدة');
	const [email, setEmail] = useState('info@ufmc.com.sa');
	const [maintenanceMode, setMaintenanceMode] = useState(false);

	// إعدادات اللغة
	const [language, setLanguage] = useState('ar'); // العربية
	const [timezone, setTimezone] = useState('Asia/Riyadh'); // توقيت الرياض

	// إعدادات إشعارات البريد الإلكتروني
	const [emailNotifications, setEmailNotifications] = useState(true);

	// إعدادات مظهر الموقع
	const [theme, setTheme] = useState('light'); // الوضع الفاتح أو الداكن

	const handleSave = () => {
		console.log({
			siteName,
			email,
			maintenanceMode,
			language,
			timezone,
			emailNotifications,
			theme,
		});
		alert('تم حفظ الإعدادات!');
	};

	return (
		<div className='p-6 bg-white shadow-md rounded-md'>
			<h2 className='text-2xl font-bold mb-4'>إعدادات الموقع</h2>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{/* اسم الموقع */}
				<div className='space-y-2'>
					<label className='block font-semibold mb-1'>اسم الموقع</label>
					<input
						type='text'
						value={siteName}
						onChange={(e) => setSiteName(e.target.value)}
						className='w-full border border-gray-300 rounded p-2'
					/>
				</div>

				{/* البريد الإلكتروني */}
				<div className='space-y-2'>
					<label className='block font-semibold mb-1'>البريد الإلكتروني</label>
					<input
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className='w-full border border-gray-300 rounded p-2'
					/>
				</div>

				{/* تفعيل وضع الصيانة */}
				<div className='flex items-center space-x-2'>
					<input
						type='checkbox'
						checked={maintenanceMode}
						onChange={() => setMaintenanceMode(!maintenanceMode)}
						className='accent-blue-600'
					/>
					<span>تفعيل وضع الصيانة</span>
				</div>

				{/* اختيار اللغة */}
				<div className='space-y-2'>
					<label className='block font-semibold mb-1'>اللغة</label>
					<select
						value={language}
						onChange={(e) => setLanguage(e.target.value)}
						className='w-full border border-gray-300 rounded p-2'>
						<option value='ar'>العربية</option>
						<option value='en'>الإنجليزية</option>
					</select>
				</div>

				{/* اختيار التوقيت */}
				<div className='space-y-2'>
					<label className='block font-semibold mb-1'>التوقيت</label>
					<select
						value={timezone}
						onChange={(e) => setTimezone(e.target.value)}
						className='w-full border border-gray-300 rounded p-2'>
						<option value='Asia/Riyadh'>توقيت الرياض</option>
						<option value='UTC'>توقيت UTC</option>
						<option value='America/New_York'>توقيت نيويورك</option>
					</select>
				</div>

				{/* إشعارات البريد الإلكتروني */}
				<div className='flex items-center space-x-2'>
					<input
						type='checkbox'
						checked={emailNotifications}
						onChange={() => setEmailNotifications(!emailNotifications)}
						className='accent-blue-600'
					/>
					<span>تمكين إشعارات البريد الإلكتروني</span>
				</div>

				{/* اختيار السمة (الوضع الداكن/الفاتح) */}
				<div className='space-y-2'>
					<label className='block font-semibold mb-1'>السمة</label>
					<select
						value={theme}
						onChange={(e) => setTheme(e.target.value)}
						className='w-full border border-gray-300 rounded p-2'>
						<option value='light'>فاتح</option>
						<option value='dark'>داكن</option>
					</select>
				</div>

				{/* خيار التحقق من الأمان */}
				<div className='space-y-2'>
					<label className='block font-semibold mb-1'>
						تفعيل التحقق الثنائي
					</label>
					<input
						type='checkbox'
						className='accent-blue-600'
					/>
					<span>تفعيل التحقق الثنائي من الحساب</span>
				</div>
			</div>

			{/* زر حفظ */}
			<div className='mt-6'>
				<button
					onClick={handleSave}
					className='bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition'>
					حفظ الإعدادات
				</button>
			</div>
		</div>
	);
};

export default Settings;
