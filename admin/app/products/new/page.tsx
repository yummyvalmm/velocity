'use client';

import { createProduct } from '@/app/actions';
import { useFormStatus } from 'react-dom';

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors disabled:opacity-50"
        >
            {pending ? 'Saving...' : 'Create Product'}
        </button>
    );
}

export default function AddProductPage() {
    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tight mb-8">Add New Product</h1>

            <form action={createProduct} className="bg-white p-8 rounded-xl shadow-sm border space-y-6">
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold mb-2">Product Name</label>
                        <input name="name" required className="w-full border p-3 rounded-md" placeholder="e.g. Velocity Runner" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2">Category</label>
                        <select name="category" className="w-full border p-3 rounded-md">
                            <option>Running</option>
                            <option>Basketball</option>
                            <option>Training</option>
                            <option>Lifestyle</option>
                            <option>Gear</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold mb-2">Price ($)</label>
                        <input name="price" type="number" step="0.01" required className="w-full border p-3 rounded-md" placeholder="0.00" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2">Stock Inventory</label>
                        <input name="stock" type="number" required className="w-full border p-3 rounded-md" placeholder="100" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold mb-2">Sizes (comma separated)</label>
                    <input name="sizes" required className="w-full border p-3 rounded-md" placeholder="e.g. 7, 8, 9, 10, 11" defaultValue="7, 8, 9, 10, 11, 12" />
                </div>

                <div>
                    <label className="block text-sm font-bold mb-2">Colors (comma separated)</label>
                    <input name="colors" required className="w-full border p-3 rounded-md" placeholder="e.g. Black, White, Red" defaultValue="Black, White" />
                </div>

                <div>
                    <label className="block text-sm font-bold mb-2">Image URL</label>
                    <input name="image" required className="w-full border p-3 rounded-md" placeholder="https://..." />
                    <p className="text-xs text-gray-500 mt-1">Use a direct image link from Unsplash or your CDN.</p>
                </div>

                <div className="pt-4 border-t">
                    <SubmitButton />
                </div>
            </form>
        </div>
    );
}
