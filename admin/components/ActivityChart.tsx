export default function ActivityChart() {
    const data = [
        { day: 'Mon', value: 35 },
        { day: 'Tue', value: 45 },
        { day: 'Wed', value: 30 },
        { day: 'Thu', value: 60 },
        { day: 'Fri', value: 75 },
        { day: 'Sat', value: 50 },
        { day: 'Sun', value: 40 },
    ];

    const maxValue = Math.max(...data.map(d => d.value));

    return (
        <div className="flex items-end justify-between h-64 w-full pt-8 px-4 gap-2">
            {data.map((item) => (
                <div key={item.day} className="flex flex-col items-center gap-2 flex-1 group cursor-pointer">
                    <div className="relative w-full max-w-[40px] h-full flex items-end bg-gray-100 rounded-lg overflow-hidden">
                        <div
                            className="w-full bg-black group-hover:bg-[#d1ff00] transition-all duration-300 relative"
                            style={{ height: `${(item.value / maxValue) * 100}%` }}
                        >
                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                {item.value} sales
                            </div>
                        </div>
                    </div>
                    <span className="text-xs font-bold text-gray-400 group-hover:text-black transition-colors">{item.day}</span>
                </div>
            ))}
        </div>
    );
}
