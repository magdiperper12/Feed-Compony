'use client';

import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Dark: React.FC = () => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

	useEffect(() => {
		document.documentElement.classList.toggle('dark', isDarkMode);
	}, [isDarkMode]);
	return (
		<div
			className={`        rounded-full    flex items-center  cursor-pointer`}
			onClick={() => setIsDarkMode(!isDarkMode)}>
			<div
				className={` justify-center rounded-full  p-2  flex  items-center ${
					isDarkMode ? 'border-2 border-gray-200' : 'border-2 border-gray-200'
				}`}>
				{isDarkMode ? (
					<FaSun className='text-yellow-500  text-2xl ' />
				) : (
					<FaMoon className='text-blue-600  text-2xl ' />
				)}
			</div>
		</div>
	);
};

export default Dark;
