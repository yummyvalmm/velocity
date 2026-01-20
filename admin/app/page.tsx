import ActivityChart from '@/components/ActivityChart';

export default async function Dashboard() {
  // In a real server component, we would fetch data here
  // const productCount = await prisma.product.count();

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider">Total Revenue</h3>
          <p className="text-3xl font-bold mt-2">$24,500.00</p>
          <span className="text-green-500 text-sm font-medium flex items-center gap-1 mt-2">
            +18% <span className="text-gray-400 font-normal">from last month</span>
          </span>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider">Active Orders</h3>
          <p className="text-3xl font-bold mt-2">12</p>
          <span className="text-blue-500 text-sm font-medium flex items-center gap-1 mt-2">
            2 new <span className="text-gray-400 font-normal">today</span>
          </span>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider">Products</h3>
          <p className="text-3xl font-bold mt-2">48</p>
          <span className="text-gray-400 text-sm mt-2">In stock</span>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider">Customers</h3>
          <p className="text-3xl font-bold mt-2">1,240</p>
          <span className="text-green-500 text-sm font-medium flex items-center gap-1 mt-2">
            +5% <span className="text-gray-400 font-normal">growth</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border h-96">
          <h3 className="font-bold mb-4">Recent Activity</h3>
          <div className="h-full pb-8">
            <ActivityChart />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border h-96">
          <h3 className="font-bold mb-4">Recent Sales</h3>
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-center justify-between pb-4 border-b last:border-0 hover:bg-gray-50 p-2 rounded transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                    JD
                  </div>
                  <div>
                    <p className="font-bold text-sm">John Doe</p>
                    <p className="text-xs text-gray-500">bought Velocity Sprinter</p>
                  </div>
                </div>
                <span className="font-mono font-bold">$129.00</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
