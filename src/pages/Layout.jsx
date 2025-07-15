import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useContext,createContext, useState } from "react";

export const menuState = createContext();
function Layout(){
    const [isOpen, setIsOpen]  = useState(true);
    return  <div className="flex flex-col h-screen w-screen">
            <menuState.Provider value={{isOpen,setIsOpen}}>
            <Header />
            
            <div className="flex flex-row flex-1 overflow-hidden">
                <Sidebar />
                <main className="flex-1 overflow-auto p-4">
                    <Outlet />
                </main>
            </div>
            </menuState.Provider>
            
        </div>
}

export default Layout;