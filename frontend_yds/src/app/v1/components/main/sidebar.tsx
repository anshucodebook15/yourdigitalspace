import {
  LayoutDashboard,
  Users,
  Clock,
  Calendar,
  DollarSign,
  ClipboardList,
  Building2,
  FileText,
  BarChart3,
  LineChart,
  X,
} from "lucide-react";
import type { JSX } from "react";

type NavItem = {
  label: string;
  icon: JSX.Element;
  badge?: string | number;
  section?: string;
  active?: boolean;
};

const navItems: NavItem[] = [
  {
    label: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    section: "Main Navigation",
    active: true,
  },
  { label: "Employees", icon: <Users size={20} />, badge: 124 },
  { label: "Attendance", icon: <Clock size={20} />, badge: 3 },
  { label: "Time Sheets", icon: <Calendar size={20} /> },
  { label: "Payroll", icon: <DollarSign size={20} />, badge: "New" },
  { label: "Leave Requests", icon: <ClipboardList size={20} />, badge: 7 },
  { label: "Reports", icon: <BarChart3 size={20} /> },

  {
    label: "Departments",
    icon: <Building2 size={20} />,
    section: "Management",
  },
  { label: "Policies", icon: <FileText size={20} /> },
  { label: "Performance", icon: <LineChart size={20} /> },
];

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

// interface MenuItemProps {
//   icon: React.ReactNode;
//   label: string;
//   active?: boolean;
// }

// const MenuItem: React.FC<MenuItemProps> = ({ icon, label, active }) => (
//   <li>
//     <a
//       className={`
//       flex items-center gap-3 px-4 py-2 text-[16px] font-medium rounded-[2px] cursor-pointer
//       transition-all duration-300
//       ${active
//           ? "bg-gray-800 text-white border-l-4 border-gray-200 shadow-sm"
//           : "text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:shadow-sm"
//         }
//     `}
//     >
//       <span className="text-lg">{icon}</span>
//       <span>{label}</span>
//     </a>
//   </li>
// );

type MenuItemProps = {
  icon: JSX.Element;
  label: string;
  active?: boolean;
  badge?: string | number;
};

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, active, badge }) => (
  <li className="cursor-pointer">
    <a
      className={`flex items-center justify-between px-3 py-2 rounded-md transition ${
        active
          ? "bg-gray-200 text-gray-900 font-semibold"
          : "text-gray-700 hover:bg-gray-100 font-normal"
      }`}
    >
      <span className="flex items-center gap-2">
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
    </a>
  </li>
);

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-gray-50 shadow-md transform 
      ${isOpen ? "translate-x-0" : "-translate-x-full"} 
      lg:translate-x-0 transition-transform duration-300 flex flex-col h-full`}
    >
      {/* Logo Section */}
      <div className="p-5 border-b border-gray-200 bg-gray-900 flex items-center justify-between text-center ">
        <div className="  ">
          {/* <div className="bg-sky-600 text-white p-2 rounded-lg shadow-sm">
                    </div> */}
          <h1 className="text-lg  font-bold text-gray-100">
            Your Digital Space2
          </h1>
        </div>
        {/* Mobile Close */}
        <button className="lg:hidden" onClick={toggleSidebar}>
          <X className="w-6 h-6 text-gray-200 hover:text-gray-700 transition-colors" />
        </button>
      </div>

      <p className="text-xs uppercase tracking-wide text-gray-400 px-5 pt-3">
        Collections Platform
      </p>

      {/* Menu */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto bg-gray-50">
        {["Main Navigation", "Management"].map((section) => (
          <div key={section}>
            <p className="text-xs uppercase tracking-wide text-gray-400 px-2 pt-3">
              {section}
            </p>
            <ul className="space-y-1.5 mt-2">
              {navItems
                .filter(
                  (item) =>
                    item.section === section ||
                    (section === "Main Navigation" && !item.section)
                )
                .map((item) => (
                  <MenuItem
                    key={item.label}
                    icon={item.icon}
                    label={item.label}
                    active={item.active}
                    badge={item.badge}
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
