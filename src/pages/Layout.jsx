// Layout.jsx
import { Outlet } from "react-router-dom";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import { useState, useEffect } from "react";

export default function Layout() {
  const [sideBar, setSideBar] = useState(true);

  

  return (
    <div>
      <Header />
      <section>
        <Outlet />
      </section >
    </div>
  );
}
