import Image from 'next/image';
import React from 'react';
import { shekaraItems } from '../../data/shekaraItems';

type Props = {
	params: { id: any };
};

const AnimalDetailsPage = ({ params }: any) => {
	const item = shekaraItems.find((i) => i.id === Number(params.id));

	if (!item) {
		return <div className='text-center p-10'>العنصر غير موجود</div>;
	}

	return (
		<div className='bg-gray-100 py-12'>
			<div className='mt-7 px-4  max-w-7xl mx-auto'>
				<div className='bg-green-400 opacity-90 text-darkPrimaryTextColors text-5xl py-8 flex flex-col md:flex-row justify-around items-center rounded-2xl shadow-lg'>
					<Image
						width={380}
						height={220}
						src={
							item.id >= 14
								? '/images/camel.png'
								: item.id >= 7
								? '/images/poultryimage.png'
								: '/images/animal2.png'
						}
						alt='أعلاف'
						className='rounded-xl z-50'
					/>
					<h1 className='text-4xl md:text-6xl font-bold mt-6 md:mt-0'>
						{item.id >= 14
							? 'اعلاف مواشي'
							: item.id >= 7
							? 'أعلاف الدواجن'
							: 'اعلاف حيونات '}
					</h1>
				</div>
				<div className='max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8 md:flex md:items-start gap-10'>
					<div className='w-full md:w-1/2'>
						<h1 className='text-3xl font-bold text-green-700 mb-4'>
							{item.title}
						</h1>

						<p className='text-gray-700 text-lg leading-relaxed mb-6'>
							{item.description}
						</p>

						<div className='mb-6'>
							<h2 className='text-xl font-semibold text-gray-800 mb-2'>
								المكونات:
							</h2>
							<ul className='list-disc list-inside text-gray-700 space-y-1'>
								{item.components.map((comp, idx) => (
									<li key={idx}>{comp}</li>
								))}
							</ul>
						</div>

						<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 mb-6'>
							<p>
								<span className='font-semibold'>رقم المنتج:</span> {item.code}
							</p>
							<p>
								<span className='font-semibold'>الوزن الصافي:</span>{' '}
								{item.weight}
							</p>
							<p>
								<span className='font-semibold'>تاريخ الانتهاء:</span>{' '}
								{item.expiry}
							</p>
							<p>
								<span className='font-semibold'>التصنيف:</span> {item.category}
							</p>
						</div>

						<div className='mb-6'>
							<h2 className='text-xl font-semibold text-gray-800 mb-2'>
								إرشادات التخزين:
							</h2>
							<ul className='list-disc list-inside text-gray-700 space-y-1'>
								{item.storage.map((s, idx) => (
									<li key={idx}>{s}</li>
								))}
							</ul>
						</div>

						<button className='bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition duration-200'>
							اطلب الآن
						</button>
					</div>
					<div className='w-full md:w-1/2 mb-6 md:mb-0'>
						<Image
							src={item.image}
							alt={item.title}
							width={600}
							height={400}
							className='rounded-md object-cover w-full'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AnimalDetailsPage;
