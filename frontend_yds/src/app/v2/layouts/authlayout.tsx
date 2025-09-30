// import { useState } from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-gray-100">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
