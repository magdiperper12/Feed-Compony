'use client';

import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
	{ name: 'طلب اليوم', value: 10 },
	{ name: 'أمس', value: 6 },
	{ name: 'أسبوع ماضي', value: 14 },
];
const COLORS = ['#00C49F', '#FFBB28', '#FF8042'];

export default function DashboardPage() {
	return (
		<div className='p-6 space-y-8 bg-white rounded-xl shadow-md'>
			<motion.h1
				className='text-3xl font-extrabold text-gray-800'
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}>
				مرحبًا بك في لوحة التحكم 🐓
			</motion.h1>

			{/* الإحصائيات السريعة */}
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
				<StatCard
					title='إجمالي المنتجات'
					value='24'
				/>
				<StatCard
					title='الطلبات الجديدة'
					value='5'
				/>
				<StatCard
					title='عدد العملاء'
					value='87'
				/>
				<StatCard
					title='كمية العلف المطلوبة (طن)'
					value='320'
				/>
			</div>

			{/* رسم بياني للطلبات */}
			<div className='bg-gray-50 rounded-lg shadow p-6'>
				<h2 className='text-lg font-semibold mb-4 text-gray-700'>
					تحليل الطلبات
				</h2>
				<div className='w-full h-64'>
					<ResponsiveContainer>
						<PieChart>
							<Pie
								data={data}
								cx='50%'
								cy='50%'
								labelLine={false}
								outerRadius={100}
								fill='#8884d8'
								dataKey='value'>
								{data.map((entry, index) => (
									<Cell
										key={`cell-${index}`}
										fill={COLORS[index % COLORS.length]}
										className='outline-none'
									/>
								))}
							</Pie>
							<Tooltip />
						</PieChart>
					</ResponsiveContainer>
				</div>
			</div>
		</div>
	);
}

const StatCard = ({ title, value }: { title: string; value: string }) => (
	<motion.div
		className='bg-green-50 p-4 rounded-xl shadow hover:shadow-lg transition'
		whileHover={{ scale: 1.03 }}>
		<p className='text-sm text-gray-500'>{title}</p>
		<p className='text-2xl font-bold text-green-800'>{value}</p>
	</motion.div>
);
