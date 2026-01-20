
import { Package } from 'lucide-react';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function OrdersPage() {
    const orders = await prisma.order.findMany({
        include: { customer: true },
        orderBy: { createdAt: 'desc' }
    });

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Orders</h1>

            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="px-6 py-4 font-medium text-gray-500">Order ID</th>
                            <th className="px-6 py-4 font-medium text-gray-500">Customer</th>
                            <th className="px-6 py-4 font-medium text-gray-500">Date</th>
                            <th className="px-6 py-4 font-medium text-gray-500">Status</th>
                            <th className="px-6 py-4 font-medium text-gray-500 text-right">Total</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {orders.map((order) => (
                            <tr key={order.id} className="hover:bg-gray-50/50">
                                <td className="px-6 py-4 font-mono text-xs text-gray-500">#{order.id.slice(0, 8)}...</td>
                                <td className="px-6 py-4 font-medium">
                                    <div>{order.customer.name}</div>
                                    <div className="text-xs text-gray-400">{order.customer.email}</div>
                                </td>
                                <td className="px-6 py-4 text-gray-500">
                                    {new Date(order.createdAt).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1.5
                                ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                                            order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${order.status === 'Delivered' ? 'bg-green-500' : order.status === 'Shipped' ? 'bg-blue-500' : 'bg-yellow-500'}`}></span>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right font-mono font-bold">
                                    ${order.total.toFixed(2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
