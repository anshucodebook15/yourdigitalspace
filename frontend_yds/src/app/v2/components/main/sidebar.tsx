import {
  // LayoutDashboard,
  // Users,
  // Clock,
  // Calendar,
  // DollarSign,
  // ClipboardList,
  // Building2,
  // FileText,
  // BarChart3,
  // LineChart,
  X,
} from "lucide-react";
import type { JSX } from "react";
import { NavLinks } from "../../routes/navlinks";
import { NavLink } from "react-router";
// import { navItems } from "../../data/mock";

const RoleTab = (role = "admin") => {
  if (role === "admin") {
    return (
      <div className="bg-blue-600 text-white py-2">
        <h4 className="text-xs uppercase tracking-wide font-semibold  px-5">
          Admin
        </h4>
      </div>
    );
  } else if (role === "manager") {
    return (
      <div className="bg-pink-600 text-white py-2">
        <h4 className="text-xs uppercase tracking-wide font-semibold  px-5">
          Manager
        </h4>
      </div>
    );
  } else if (role === "employee") {
    return (
      <div className="bg-amber-600 text-white py-2">
        <h4 className="text-xs uppercase tracking-wide font-semibold  px-5">
          Employee
        </h4>
      </div>
    );
  } else {
    return null;
  }
};

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

type MenuItemProps = {
  icon?: JSX.Element;
  label: string;
  active?: boolean;
  badge?: string | number;
  url?: string;
};

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  label,
  active,
  badge,
  url,
}) => (
  <NavLink to={url || "#"}>
    <li
      className={`flex items-center justify-between px-3 py-2 rounded-md transition cursor-pointer ${
        active
          ? "bg-gray-200 text-gray-900 font-semibold"
          : "text-gray-700 hover:bg-gray-100 font-normal"
      }`}
    >
      <span className="flex items-center gap-2 ">
        {icon}
        {label}
      </span>
      {badge && (
        <span
          className={`ml-auto text-xs px-2 py-0.5 rounded-full ${
            badge === "New"
              ? "bg-indigo-100 text-indigo-700"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {badge}
        </span>
      )}
    </li>
  </NavLink>
);

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-gray-50 shadow-md transform 
      ${isOpen ? "translate-x-0" : "-translate-x-full"} 
      lg:translate-x-0 transition-transform duration-300 flex flex-col h-full`}
    >
      {/* Logo Section */}
      <div className="p-5  border-gray-200 bg-gray-900 flex items-center justify-between text-center ">
        <div className="  ">
          {/* <div className="bg-sky-600 text-white p-2 rounded-lg shadow-sm">
                    </div> */}
          <h1 className="text-lg  font-bold text-gray-100">
            Your Digital Space
          </h1>
        </div>
        {/* Mobile Close */}
        <button className="lg:hidden" onClick={toggleSidebar}>
          <X className="w-6 h-6 text-gray-200 hover:text-gray-700 transition-colors" />
        </button>
      </div>

      {RoleTab("admin")}

      {/* <p className="text-xs uppercase tracking-wide text-gray-400 px-5 pt-3">
        Collections Platform
      </p> */}

      {/* Menu */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto bg-gray-50">
        {["Main Navigation", "Management"].map((section) => (
          <div key={section}>
            <p className="text-xs uppercase tracking-wide text-gray-400 px-2 pt-3">
              {section}
            </p>
            <ul className="space-y-1.5 mt-2">
              {NavLinks.filter(
                (item) =>
                  item.section === section ||
                  (section === "Main Navigation" && !item.section)
              ).map((item) => (
                <MenuItem
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  active={item.active}
                  badge={item.badge}
                  url={item.url}
                />
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* User Footer */}
      <div className="p-4 border-t border-gray-200 bg-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full overflow-hidden border border-gray-300">
            <img src="https://i.pravatar.cc/100" alt="user" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800">John Doe</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
