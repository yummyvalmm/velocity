import React, { useEffect } from 'react';

interface SizeGuideModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white w-full max-w-2xl rounded-sm shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <div className="p-6 md:p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-impact tracking-tight uppercase">Size Guide</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-black transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <p className="text-sm text-gray-500 mb-6">Use the chart below to determine your size based on your measurements. If you're between sizes, we recommend sizing up for a more comfortable fit.</p>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
                                <tr>
                                    <th className="px-6 py-3">US Men</th>
                                    <th className="px-6 py-3">US Women</th>
                                    <th className="px-6 py-3">UK</th>
                                    <th className="px-6 py-3">EU</th>
                                    <th className="px-6 py-3">CM</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium">7</td>
                                    <td className="px-6 py-4">8.5</td>
                                    <td className="px-6 py-4">6</td>
                                    <td className="px-6 py-4">40</td>
                                    <td className="px-6 py-4">25</td>
                                </tr>
                                <tr className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium">7.5</td>
                                    <td className="px-6 py-4">9</td>
                                    <td className="px-6 py-4">6.5</td>
                                    <td className="px-6 py-4">40.5</td>
                                    <td className="px-6 py-4">25.5</td>
                                </tr>
                                <tr className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium">8</td>
                                    <td className="px-6 py-4">9.5</td>
                                    <td className="px-6 py-4">7</td>
                                    <td className="px-6 py-4">41</td>
                                    <td className="px-6 py-4">26</td>
                                </tr>
                                <tr className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium">8.5</td>
                                    <td className="px-6 py-4">10</td>
                                    <td className="px-6 py-4">7.5</td>
                                    <td className="px-6 py-4">42</td>
                                    <td className="px-6 py-4">26.5</td>
                                </tr>
                                <tr className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium">9</td>
                                    <td className="px-6 py-4">10.5</td>
                                    <td className="px-6 py-4">8</td>
                                    <td className="px-6 py-4">42.5</td>
                                    <td className="px-6 py-4">27</td>
                                </tr>
                                <tr className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium">9.5</td>
                                    <td className="px-6 py-4">11</td>
                                    <td className="px-6 py-4">8.5</td>
                                    <td className="px-6 py-4">43</td>
                                    <td className="px-6 py-4">27.5</td>
                                </tr>
                                <tr className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium">10</td>
                                    <td className="px-6 py-4">11.5</td>
                                    <td className="px-6 py-4">9</td>
                                    <td className="px-6 py-4">44</td>
                                    <td className="px-6 py-4">28</td>
                                </tr>
                                <tr className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium">10.5</td>
                                    <td className="px-6 py-4">12</td>
                                    <td className="px-6 py-4">9.5</td>
                                    <td className="px-6 py-4">44.5</td>
                                    <td className="px-6 py-4">28.5</td>
                                </tr>
                                <tr className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium">11</td>
                                    <td className="px-6 py-4">12.5</td>
                                    <td className="px-6 py-4">10</td>
                                    <td className="px-6 py-4">45</td>
                                    <td className="px-6 py-4">29</td>
                                </tr>
                                <tr className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium">12</td>
                                    <td className="px-6 py-4">13.5</td>
                                    <td className="px-6 py-4">11</td>
                                    <td className="px-6 py-4">46</td>
                                    <td className="px-6 py-4">30</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 border-t pt-4">
                        <h4 className="font-bold text-sm uppercase mb-2">How to Measure</h4>
                        <p className="text-xs text-gray-500">Stand on a level surface with your heels against a wall. Place a ruler flat on the floor beside the inside of your foot from heel to toe. Measure the distance from the wall to the tip of your longest toe.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SizeGuideModal;
