'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createProduct(formData: FormData) {
    const name = formData.get('name') as string;
    const category = formData.get('category') as string;
    const price = parseFloat(formData.get('price') as string);
    const stock = parseInt(formData.get('stock') as string, 10);
    const sizes = formData.get('sizes') as string;
    const colors = formData.get('colors') as string;
    const image = formData.get('image') as string;

    await prisma.product.create({
        data: {
            name,
            category,
            price,
            stock,
            sizes,
            colors,
            image,
        },
    });

    revalidatePath('/products');
    redirect('/products');
}

export async function updateOrderStatus(orderId: string, newStatus: string) {
    await prisma.order.update({
        where: { id: orderId },
        data: { status: newStatus }
    });

    revalidatePath('/orders');
}
