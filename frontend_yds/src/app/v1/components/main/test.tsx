
import {
  Home,
  Upload,
  FileText,
  BarChart3,
  LineChart,
  Shield,
  Settings,
  CreditCard,
} from "lucide-react";

const TestLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col">
        {/* Logo */}
        <div className="p-4 border-b">
          <h1 className="text-lg font-bold flex items-center gap-2 text-gray-800">
            <CreditCard className="w-6 h-6" />
            CollectPro
          </h1>
          <p className="text-xs text-gray-500">Collections Platform</p>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4">
          <ul className="menu">
            <li>
              <a className="flex items-center gap-3 hover:bg-gray-100 rounded-md p-2">
                <Home size={18} /> Dashboard
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 hover:bg-gray-100 rounded-md p-2">
                <Upload size={18} /> Data Import
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 hover:bg-gray-100 rounded-md p-2">
                <FileText size={18} /> Templates
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 hover:bg-gray-100 rounded-md p-2">
                <BarChart3 size={18} /> Sequences
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 hover:bg-gray-100 rounded-md p-2">
                <LineChart size={18} /> Analytics
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 hover:bg-gray-100 rounded-md p-2">
                <CreditCard size={18} /> Payment Portal
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 hover:bg-gray-100 rounded-md p-2">
                <Shield size={18} /> Compliance
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 hover:bg-gray-100 rounded-md p-2">
                <Settings size={18} /> Settings
              </a>
            </li>
          </ul>
        </nav>

        {/* User Footer */}
        <div className="p-4 border-t">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://i.pravatar.cc/100" alt="user" />
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">John Doe</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
            <p className="text-sm text-gray-500">
              Overview of your collections performance
            </p>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-outline btn-sm">Export Report</button>
            <button className="btn btn-primary btn-sm">New Campaign</button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="card bg-white shadow-sm p-4">
            <h3 className="text-sm text-gray-500">Total Outstanding</h3>
            <p className="text-2xl font-bold text-gray-800">$2,345,678</p>
            <p className="text-xs text-green-600">+12.5% from last month</p>
          </div>
          <div className="card bg-white shadow-sm p-4">
            <h3 className="text-sm text-gray-500">Active Campaigns</h3>
            <p className="text-2xl font-bold text-gray-800">24</p>
            <p className="text-xs text-green-600">+3 from last month</p>
          </div>
          <div className="card bg-white shadow-sm p-4">
            <h3 className="text-sm text-gray-500">Collections Rate</h3>
            <p className="text-2xl font-bold text-gray-800">68%</p>
            <p className="text-xs text-green-600">+5.2% from last month</p>
          </div>
          <div className="card bg-white shadow-sm p-4">
            <h3 className="text-sm text-gray-500">Avg. Days to Pay</h3>
            <p className="text-2xl font-bold text-gray-800">12.3</p>
            <p className="text-xs text-red-600">-2.1 from last month</p>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Channel Performance */}
          <div className="card bg-white shadow-sm p-4">
            <h3 className="font-semibold mb-4 text-gray-800">
              Channel Performance
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex justify-between">
                <span>Email</span>
                <span className="text-sm">18.7% response rate</span>
              </li>
              <li className="flex justify-between">
                <span>SMS</span>
                <span className="text-sm">22.9% response rate</span>
              </li>
              <li className="flex justify-between">
                <span>Voice</span>
                <span className="text-sm">27.8% response rate</span>
              </li>
            </ul>
          </div>

          {/* Recent Activity */}
          <div className="card bg-white shadow-sm p-4">
            <h3 className="font-semibold mb-4 text-gray-800">
              Recent Activity
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex justify-between">
                <span>Payment received</span>
                <span className="text-green-600">$1,250</span>
              </li>
              <li>Email sequence completed</li>
              <li>New import processed (450 records)</li>
              <li>Campaign started</li>
            </ul>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <button className="btn btn-outline">Import Data</button>
          <button className="btn btn-outline">New Template</button>
          <button className="btn btn-outline">Create Campaign</button>
          <button className="btn btn-outline">View Reports</button>
        </div>
      </main>
    </div>
  );
};

export default TestLayout;
