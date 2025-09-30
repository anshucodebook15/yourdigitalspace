import {
    LayoutDashboard,
    Users,
    Clock,
    Calendar,
    DollarSign,
    ClipboardList,
    BarChart3,
    Building2,
    FileText,
    // LineChart,
    History,
    Activity,
} from "lucide-react";
import { type JSX } from "react";
// import {
//   Dashboard,
//   Attendance,
//   AttendanceActivites,
//   AttendanceHistory,
//   Departments,
//   Employees,
//   Leaves,
//   Payroll,
//   Policies,
//   Reports,
//   Timesheet,
// } from "../pages";

// Simple placeholder page generator
// const Page = (title: string) => () => <h1 className="p-6 text-2xl">{title}</h1>;

// 🔹 Type for navigation items
export type NavItem = {
    label: string;
    url: string;
    icon?: JSX.Element;
    active?: boolean;
    section?: string;
    badge?: string | number;
    component?: any;
    children?: NavItem[];
};

// 🔹 Strongly typed navItems array
export const NavLinks: NavItem[] = [
    {
        label: "Dashboard",
        icon: <LayoutDashboard size={20} />,
        section: "Main Navigation",
        url: "/dashboard",
        // component: Dashboard,
    },
    {
        label: "Employees",
        icon: <Users size={20} />,
        badge: 124,
        url: "/employees",
        // component: Employees,
    },
    {
        label: "Attendance",
        icon: <Clock size={20} />,
        badge: 3,
        url: "/attendance",
        // component: Attendance,
        children: [
            {
                label: "History",
                icon: <History size={18} />,
                url: "/attendance/history",
                // component: AttendanceHistory,
            },
            {
                label: "Activities",
                icon: <Activity size={18} />,
                url: "/attendance/activities",
                // component: AttendanceActivites,
            },
        ],
    },
    {
        label: "Time Sheets",
        icon: <Calendar size={20} />,
        url: "/timesheets",
        // component: Timesheet,
    },
    {
        label: "Payroll",
        icon: <DollarSign size={20} />,
        badge: "New",
        url: "/payroll",
        // component: Payroll,
    },
    {
        label: "Leave Requests",
        icon: <ClipboardList size={20} />,
        badge: 7,
        url: "/leave-requests",
        // component: Leaves,
    },
    {
        label: "Reports",
        icon: <BarChart3 size={20} />,
        url: "/reports",
        // component: Reports,
    },
    {
        label: "Departments",
        icon: <Building2 size={20} />,
        section: "Management",
        url: "/departments",
        // component: Departments,
    },
    {
        label: "Policies",
        icon: <FileText size={20} />,
        url: "/policies",
        // component: Policies,
    },
];
