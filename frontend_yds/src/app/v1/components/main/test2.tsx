import React, { useState } from "react";
import { Menu, LogOut } from "lucide-react";
import Sidebar from "./sidebar";
import AttendanceTable from "./attendenceTable";
import Topbar from "./topbar";

// interface SidebarProps {
//   isOpen: boolean;
//   toggleSidebar: () => void;
// }

// interface MenuItemProps {
//   icon: React.ReactNode;
//   label: string;
//   active?: boolean;
// }

// const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
//   return (
//     <aside
//       className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-gray-50 shadow-md transform
//       ${isOpen ? "translate-x-0" : "-translate-x-full"}
//       lg:translate-x-0 transition-transform duration-300 flex flex-col h-full`}
//     >
//       {/* Logo Section */}
//       <div className="p-5 border-b border-gray-200 bg-gray-900 flex items-center justify-between text-center ">
//         <div className="  ">
//           {/* <div className="bg-sky-600 text-white p-2 rounded-lg shadow-sm">
//                     </div> */}
//           <h1 className="text-lg  font-bold text-gray-100">
//             Your Digital Space2
//           </h1>
//         </div>
//         {/* Mobile Close */}
//         <button className="lg:hidden" onClick={toggleSidebar}>
//           <X className="w-6 h-6 text-gray-200 hover:text-gray-700 transition-colors" />
//         </button>
//       </div>

//       <p className="text-xs uppercase tracking-wide text-gray-400 px-5 pt-3">
//         Collections Platform
//       </p>

//       {/* Menu */}
//       <nav className="flex-1 px-3 py-4 overflow-y-auto bg-gray-50">
//         <ul className="space-y-1.5">
//           <MenuItem icon={<Home size={20} />} label="Dashboard" active />
//           <MenuItem icon={<Upload size={20} />} label="Data Import" />
//           <MenuItem icon={<FileText size={20} />} label="Templates" />
//           <MenuItem icon={<BarChart3 size={20} />} label="Sequences" />
//           <MenuItem icon={<LineChart size={20} />} label="Analytics" />
//           <MenuItem icon={<CreditCard size={20} />} label="Payment Portal" />
//           <MenuItem icon={<Shield size={20} />} label="Compliance" />
//           <MenuItem icon={<Settings size={20} />} label="Settings" />
//         </ul>
//       </nav>

//       {/* User Footer */}
//       <div className="p-4 border-t border-gray-200 bg-gray-100">
//         <div className="flex items-center gap-3">
//           <div className="w-11 h-11 rounded-full overflow-hidden border border-gray-300">
//             <img src="https://i.pravatar.cc/100" alt="user" />
//           </div>
//           <div>
//             <p className="text-sm font-medium text-gray-800">John Doe</p>
//             <p className="text-xs text-gray-500">Admin</p>
//           </div>
//         </div>
//       </div>
//     </aside>
//   );
// };

// const MenuItem: React.FC<MenuItemProps> = ({ icon, label, active }) => (
//   <li>
//     <a
//       className={`
//       flex items-center gap-3 px-4 py-2 text-[16px] font-medium rounded-[2px] cursor-pointer
//       transition-all duration-300
//       ${
//         active
//           ? "bg-gray-800 text-white border-l-4 border-gray-200 shadow-sm"
//           : "text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:shadow-sm"
//       }
//     `}
//     >
//       <span className="text-lg">{icon}</span>
//       <span>{label}</span>
//     </a>
//   </li>
// );

// Header
type HeaderProps = {
  toggleSidebar: () => void;
};

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <div className="w-full mb-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        {/* Left: Title & Subtitle */}
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Welcome, Rahul Siwal
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Overview of your collections performance
          </p>
        </div>

        {/* Right: Actions */}
        <div className="grid grid-flow-col auto-cols-max justify-end items-center gap-3">
          {/* Mobile Sidebar Toggle */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition"
            onClick={toggleSidebar}
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>

          {/* Export Button */}
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition text-sm font-medium">
            Export Report
          </button>

          {/* New Campaign */}
          <button className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition text-sm font-medium">
            New Campaign
          </button>

          {/* Logout */}
          <button className="p-2 rounded-md hover:bg-gray-100 transition">
            <LogOut className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Stats Cards
type StatCardProps = {
  title: string;
  value: string | number;
  change: string;
  color?: "red" | "green" | "blue" | "gray"; // restrict to Tailwind-supported palette
};

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  color = "gray",
}) => {
  const colorClasses: Record<string, string> = {
    red: "text-red-500",
    green: "text-green-500",
    blue: "text-blue-500",
    gray: "text-gray-500",
  };

  return (
    <div className="card bg-gradient-to-br from-white to-gray-50 shadow-lg rounded-[6px] p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
        {title}
      </h3>
      <p className="mt-2 text-4xl font-bold text-gray-900">{value}</p>
      <p
        className={`mt-1 text-sm font-medium flex items-center ${colorClasses[color]}`}
      >
        <span
          className={change.startsWith("-") ? "text-red-500" : "text-green-500"}
        >
          {change}
        </span>
        <span className="ml-1 text-gray-400">from last month</span>
      </p>
    </div>
  );
};

const StatsCards = () => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
    <StatCard
      title="Total Amount Paid"
      value="₹3,45,678"
      change="+12.5%"
      color="green"
    />
    <StatCard title="Total Employees" value="124" change="+3" color="green" />
    <StatCard
      title="Attendence Rate"
      value="68%"
      change="+5.2%"
      color="green"
    />
    <StatCard title="Avg. Days to Pay" value="12.3" change="-2.1" color="red" />
  </div>
);

// Two Column Section
const TwoColumn = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="card bg-white shadow-sm p-5">
      <h3 className="font-semibold mb-4 text-gray-800 text-lg">Employeee</h3>
      <ul className="space-y-3 text-gray-700 text-base">
        <li className="flex justify-between">
          <span>Email</span>
          <span className="text-base">18.7% response rate</span>
        </li>
        <li className="flex justify-between">
          <span>SMS</span>
          <span className="text-base">22.9% response rate</span>
        </li>
        <li className="flex justify-between">
          <span>Voice</span>
          <span className="text-base">27.8% response rate</span>
        </li>
      </ul>
    </div>
    <div className="card bg-white shadow-sm p-5">
      <h3 className="font-semibold mb-4 text-gray-800 text-lg">
        Recent Activity
      </h3>
      <ul className="space-y-3 text-base text-gray-700">
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
);

// Quick Actions
const QuickActions = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
    <button className="btn btn-outline text-base py-3">Import Data</button>
    <button className="btn btn-outline text-base py-3">New Template</button>
    <button className="btn btn-outline text-base py-3">Create Campaign</button>
    <button className="btn btn-outline text-base py-3">View Reports</button>
  </div>
);

// Layout
const TestLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main content */}
      <main className="flex-1 overflow-y-auto ml-0 transition-all duration-300">
        <Topbar />

        <div className="p-6">
          <Header toggleSidebar={toggleSidebar} />
          <StatsCards />
          <AttendanceTable />
          <div className="py-2"></div>
          <TwoColumn />
          <QuickActions />
        </div>
      </main>
    </div>
  );
};

export default TestLayout;
