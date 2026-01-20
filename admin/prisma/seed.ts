import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding database...');

    // Create Products
    const shoe1 = await prisma.product.create({
        data: {
            name: 'Velocity Sprinter Pro',
            category: 'Running',
            price: 129.99,
            stock: 45,
            sizes: '8, 9, 10, 11',
            colors: 'Black, Neon Yellow',
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
        },
    });

    const shoe2 = await prisma.product.create({
        data: {
            name: 'Court King Air',
            category: 'Basketball',
            price: 159.99,
            stock: 20,
            sizes: '10, 11, 12, 13',
            colors: 'Red, White',
            image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=1000&auto=format&fit=crop',
        },
    });

    const shoe3 = await prisma.product.create({
        data: {
            name: 'Urban Trail Walker',
            category: 'Lifestyle',
            price: 99.99,
            stock: 150,
            sizes: '7, 8, 9, 10',
            colors: 'Tan, Olive',
            image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000&auto=format&fit=crop',
        },
    });

    // Create Customers
    const customer1 = await prisma.customer.create({
        data: {
            name: 'Alice Johnson',
            email: 'alice@example.com',
            phone: '555-0101',
        },
    });

    const customer2 = await prisma.customer.create({
        data: {
            name: 'Bob Smith',
            email: 'bob@example.com',
            phone: '555-0102',
        },
    });

    // Create Recent Orders
    await prisma.order.create({
        data: {
            customerId: customer1.id,
            total: 129.99,
            status: 'Shipped',
            items: JSON.stringify([{ productId: shoe1.id, quantity: 1 }]),
        },
    });

    await prisma.order.create({
        data: {
            customerId: customer2.id,
            total: 319.98,
            status: 'Pending',
            items: JSON.stringify([{ productId: shoe2.id, quantity: 2 }]),
        },
    });

    console.log('Seeding finished.');
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
