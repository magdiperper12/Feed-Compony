// 'use client';

// import Image from 'next/image';
// import React from 'react';

// // تعريف النوع المناسب للمنتج
// interface Product {
// 	id: number;
// 	title: string;
// 	price: number;
// 	description: string;
// 	category: string;
// }

// export default function ProductDetailPage({
// 	params,
// }: {
// 	params: { id: string };
// }) {
// 	const [product, setProduct] = React.useState<Product | ''>(''); // تحديد النوع هنا

// 	React.useEffect(() => {
// 		// استدعاء البيانات بعد تحميل الصفحة
// 		const fetchData = async () => {
// 			const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
// 			const productData: Product = await res.json(); // تحديد النوع هنا
// 			setProduct(productData);
// 		};

// 		fetchData();
// 	}, [params.id]); // تغيير id في params يؤدي لإعادة تحميل البيانات

// 	if (!product) {
// 		return <div className='p-6 text-red-600'>لم يتم العثور على المنتج</div>;
// 	}

// 	return (
// 		<div className='p-6'>
// 			<h1 className='text-2xl font-bold mb-4'>تفاصيل المنتج</h1>
// 			<div className='bg-white shadow-md rounded-lg p-6 max-w-xl'>
// 				<Image
// 					src={'/window.svg'}
// 					alt={product.title}
// 					width={30}
// 					height={30}
// 					className='w-40 mb-4 rounded border'
// 				/>
// 				<p>
// 					<strong>الاسم:</strong> {product.title}
// 				</p>
// 				<p>
// 					<strong>السعر:</strong> {product.price} $
// 				</p>
// 				<p>
// 					<strong>الوصف:</strong> {product.description}
// 				</p>
// 				<p>
// 					<strong>الفئة:</strong> {product.category}
// 				</p>
// 			</div>
// 		</div>
// 	);
// }

import React from 'react';

function page() {
	return <div>page</div>;
}

export default page;
