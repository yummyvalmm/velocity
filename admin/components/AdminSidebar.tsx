'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Package, ShoppingCart, Users, Settings, LogOut } from 'lucide-react';

const AdminSidebar = () => {
    const pathname = usePathname();

    const navItems = [
        { name: 'Dashboard', href: '/', icon: Home },
        { name: 'Products', href: '/products', icon: Package },
        { name: 'Orders', href: '/orders', icon: ShoppingCart },
        { name: 'Customers', href: '/customers', icon: Users },
    ];

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    return (
        <div className="w-64 bg-gray-950 text-white min-h-screen flex flex-col shadow-xl z-10 relative">
            <div className="p-6 border-b border-gray-800">
                <Link href="/" className="group block">
                    <h1 className="text-2xl font-black font-sans tracking-tighter italic transition-opacity group-hover:opacity-80">
                        VELOCITY <span className="text-[#d1ff00] not-italic text-sm ml-1 font-bold">PANEL</span>
                    </h1>
                </Link>
            </div>

            <nav className="flex-1 p-4 space-y-2 mt-2">
                {navItems.map((item) => {
                    const active = isActive(item.href);
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${active
                                    ? 'bg-[#d1ff00] text-black font-bold shadow-lg shadow-[#d1ff00]/20'
                                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                                }`}
                        >
                            <Icon className={`w-5 h-5 ${active ? 'text-black' : 'text-gray-400 group-hover:text-white'}`} />
                            <span className="tracking-wide">{item.name}</span>
                        </Link>
                    )
                })}
            </nav>

            <div className="p-4 border-t border-gray-800 space-y-2">
                <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl hover:bg-gray-800 transition-colors text-left text-gray-400 hover:text-white group">
                    <Settings className="w-5 h-5 text-gray-500 group-hover:text-white" />
                    <span className="font-medium tracking-wide">Settings</span>
                </button>
                <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl hover:bg-red-900/20 transition-colors text-left text-gray-400 hover:text-red-400 group">
                    <LogOut className="w-5 h-5 text-gray-500 group-hover:text-red-400" />
                    <span className="font-medium tracking-wide">Sign Out</span>
                </button>
            </div>
        </div>
    );
};

export default AdminSidebar;
