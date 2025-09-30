import "../styles/styles.css";

// import TestLayout from "../components/test/test";
import TestLayout2 from "../components/test/test2";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";

// Layouts
// import AuthLayout from "./layouts/AuthLayout";
// import MainLayout from "./layouts/MainLayout";

// Pages
import {
  Dashboard,
  Employees,
  Attendance,
  AttendanceHistory,
  AttendanceActivites,
  Departments,
  Leaves,
  Payroll,
  Policies,
  Reports,
  Timesheet,
  Login,
  Register,
} from "../pages";
import MainLayout from "../layouts/mainlayout";
import AuthLayout from "../layouts/authlayout";

const YDSApp = () => {
  return (
    <Router>
      <Routes>
        {/* 🔹 Auth routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* 🔹 Protected routes (all app pages under MainLayout) */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/attendance/history" element={<AttendanceHistory />} />
          <Route
            path="/attendance/activities"
            element={<AttendanceActivites />}
          />
          <Route path="/timesheets" element={<Timesheet />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/leave-requests" element={<Leaves />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/policies" element={<Policies />} />
        </Route>

        {/* 🔹 Default / fallback routes */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route path="/test" element={<TestLayout2 />} />

        <Route
          path="*"
          element={<div className="p-6 text-xl">404 | Page not found</div>}
        />
      </Routes>
    </Router>
  );
};

const YDSAppRouter = () => {
  return <YDSApp />;
};

export default YDSAppRouter;
