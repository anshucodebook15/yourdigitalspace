import { createContext, useContext, useState } from "react";
import { Outlet } from "react-router";
import {} from "react";
import { Sidebar } from "../components/main";
import Topbar from "../components/main/topbar";

const LayoutCreateContext = createContext({});

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  let data = {
    toggleSidebar,
  };

  return (
    <LayoutCreateContext.Provider value={data}>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main content */}
        <main className="flex-1 overflow-y-auto ml-0 transition-all duration-300">
          <Topbar />
          <div className="p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </LayoutCreateContext.Provider>
  );
};

export const useLayoutContext = () => useContext(LayoutCreateContext);
export default MainLayout;
