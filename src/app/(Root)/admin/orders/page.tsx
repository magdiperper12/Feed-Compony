// src/app/admin/orders/page.tsx
'use client';

import React from 'react';

const orders = [
	{
		id: 1,
		farmerName: 'أحمد العلي',
		animalType: 'دواجن',
		feedType: 'برنامج تسمين',
		animalCount: 500,
		orderDate: '2025-05-10',
		status: 'جديد',
	},
	{
		id: 2,
		farmerName: 'محمد الزهراني',
		animalType: 'دواجن',
		feedType: 'برنامج نمو',
		animalCount: 300,
		orderDate: '2025-05-09',
		status: 'قيد المعالجة',
	},
];

export default function OrdersPage() {
	return (
		<div className='p-6'>
			<h1 className='text-2xl font-bold mb-6 text-gray-800'>طلبات الأعلاف</h1>

			<table className='w-full table-auto border-collapse bg-white shadow-md rounded-md overflow-hidden'>
				<thead className='bg-gray-100'>
					<tr>
						<th className='p-3 text-right'>#</th>
						<th className='p-3 text-right'>اسم المربي</th>
						<th className='p-3 text-right'>نوع الحيوان</th>
						<th className='p-3 text-right'>نوع العلف</th>
						<th className='p-3 text-right'>عدد الحيوانات</th>
						<th className='p-3 text-right'>تاريخ الطلب</th>
						<th className='p-3 text-right'>الحالة</th>
					</tr>
				</thead>
				<tbody>
					{orders.map((order) => (
						<tr
							key={order.id}
							className='border-b hover:bg-gray-50'>
							<td className='p-3 text-right'>{order.id}</td>
							<td className='p-3 text-right'>{order.farmerName}</td>
							<td className='p-3 text-right'>{order.animalType}</td>
							<td className='p-3 text-right'>{order.feedType}</td>
							<td className='p-3 text-right'>{order.animalCount}</td>
							<td className='p-3 text-right'>{order.orderDate}</td>
							<td className='p-3 text-right'>
								<span
									className={`px-2 py-1 rounded-full text-sm ${
										order.status === 'جديد'
											? 'bg-green-100 text-green-700'
											: 'bg-yellow-100 text-yellow-700'
									}`}>
									{order.status}
								</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
