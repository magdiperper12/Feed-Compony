import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { shekaraItems } from '../../data/shekaraItems';

function Animal() {
	const FirstFiveItems = shekaraItems.slice(0, 5);
	return (
		<div className='mt-20 px-4 w-full mx-auto'>
			<div className='bg-green-400 w-full opacity-90 text-darkPrimaryTextColors text-5xl py-8 flex flex-col md:flex-row justify-around items-center rounded-2xl shadow-lg'>
				<Image
					width={380}
					height={220}
					src='/images/animal.png'
					alt='أعلاف'
					className='rounded-xl z-50'
				/>
				<h1 className='text-4xl md:text-6xl font-bold mt-6 md:mt-0'>
					أعلاف أخرى
				</h1>
			</div>
			<div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 mt-12 gap-8 py-14'>
				{FirstFiveItems.map((item, index) => (
					<div
						key={index}
						className='  text-center max-w-xs mx-auto  '>
						<Image
							width={380}
							height={220}
							src={item.image}
							alt={item.title}
							className='rounded-xl w-full h-72 object-contain'
						/>
						<h2 className='text-xl font-semibold mt-4 mb-2 text-green-600'>
							{item.title}
						</h2>
						<p className='text-gray-600 mb-4'>{item.description}</p>
						<Link
							href={`/types/${item.id}`}
							className='inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition'>
							{item.button}
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}

export default Animal;
