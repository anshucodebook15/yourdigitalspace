import { useState } from "react";
import { Sidebar } from "../components/main";
import Header from "../components/main/header";
import Topbar from "../components/main/topbar";

const Layout = ({ children, pageTitle }: any) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main content */}
      <main className="flex-1 overflow-y-auto ml-0 transition-all duration-300">
        <Topbar />
        <div className="p-6">
          <Header toggleSidebar={toggleSidebar} pageTitle={pageTitle} />
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
