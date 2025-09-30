import React from "react";
import { Bell, Plus, Search } from "lucide-react";

const Topbar: React.FC = () => {
  return (
    <div className="sticky top-0 z-20 bg-gray-50 shadow-sm border-">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center px-4 md:px-6 py-3 gap-3">
        {/* Left side: Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm justify-between md:justify-start">
          <div className="flex items-center space-x-2">
            <span className="text-gray-500">Rahul Portal</span>
            <span className="text-gray-400">/</span>
            <span className="font-semibold text-gray-900">Dashboard</span>
          </div>
        </div>

        {/* Right side */}
        <div className="grid grid-flow-col auto-cols-max justify-end items-center gap-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search employees..."
              className="pl-9 pr-4 py-2 rounded-lg bg-gray-100 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-40 sm:w-56 md:w-64"
            />
          </div>

          {/* Add Button */}
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white font-semibold text-sm hover:bg-gray-900 transition">
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">Add Employee</span>
          </button>

          {/* Notification */}
          <div className="relative">
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
          </div>

          {/* Profile Avatar */}
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 text-sm font-semibold text-gray-700 cursor-pointer">
            RA
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
