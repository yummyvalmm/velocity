
import prisma from '@/lib/prisma';
import { Mail, Phone } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function CustomersPage() {
    const customers = await prisma.customer.findMany({
        include: { _count: { select: { orders: true } } },
        orderBy: { createdAt: 'desc' }
    });

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Customers</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {customers.map((customer) => (
                    <div key={customer.id} className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                                {customer.name.charAt(0)}
                            </div>
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-bold">
                                {customer._count.orders} Orders
                            </span>
                        </div>
                        <h3 className="font-bold text-lg mb-1">{customer.name}</h3>
                        <div className="space-y-2 text-sm text-gray-500 mt-4">
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                {customer.email}
                            </div>
                            {customer.phone && (
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    {customer.phone}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
