// app/api/products/route.ts
import { NextRequest, NextResponse } from 'next/server';

let products: any[] = []; // تخزين مؤقت في الذاكرة

export async function GET() {
	return NextResponse.json(products);
}

export async function POST(req: NextRequest) {
	const data = await req.json();
	const newProduct = {
		...data,
		id: Date.now(), // ID مؤقت
	};
	products.unshift(newProduct); // نضيف المنتج بداية القائمة
	return NextResponse.json(newProduct);
}
