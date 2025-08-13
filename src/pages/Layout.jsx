// Layout.jsx
import { Outlet } from "react-router-dom";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import { useState, useEffect } from "react";

export default function Layout() {
  const [sideBar, setSideBar] = useState(true);

  // Set default state based on screen size
  useEffect(() => {
    if (window.innerWidth < 1024) {
      // Mobile & Tablet
      setSideBar(false);
    } else {
      // Desktop
      setSideBar(true);
    }
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header toggle={() => setSideBar((prev) => !prev)} />

      {/* Body */}
      <section className="flex-grow flex overflow-hidden relative">
        {/* Sidebar */}
        <div
          className={`transition-all duration-300 ease-in-out bg-white shadow-md h-full
            ${sideBar ? "w-64 opacity-100" : "w-0 opacity-0"}
            overflow-hidden`}
        >
          <Sidebar sideBar={!sideBar} closeSidebar={() => setSideBar(false)} />
        </div>

        {/* Main content */}
        <div className="flex-1 h-full overflow-y-auto">
          <Outlet />
        </div>
      </section>
    </div>
  );
}
