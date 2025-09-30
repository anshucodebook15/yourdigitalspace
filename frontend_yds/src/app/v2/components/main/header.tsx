import React from "react";
import { Menu, LogOut } from "lucide-react";

// Header
type HeaderProps = {
  toggleSidebar: () => void;
  pageTitle?: string;
  children?: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({
  toggleSidebar,
  pageTitle,
  children = null,
}) => {
  return (
    <div className="w-full mb-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        {/* Left: Title & Subtitle */}
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900">{pageTitle}</h2>
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

          {children && <>{children}</>}

          {/* Export Button */}
          {/* <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition text-sm font-medium">
            Export Report
          </button> */}

          {/* New Campaign */}
          {/* <button className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition text-sm font-medium">
            New Campaign
          </button> */}

          {/* Logout */}
          <button className="p-2 rounded-md hover:bg-gray-100 transition">
            <LogOut className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
