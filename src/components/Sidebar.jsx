import { SIDEBAR_MENU } from "../assets/constant";
import { useContext } from "react";
import { menuState } from "../pages/Layout";

function SidebarItem({ icon: Icon, title }) {
    
    return (
        <div
            className="
                cursor-pointer
                flex flex-row items-center gap-4
                p-3 my-1
                rounded-lg
                hover:bg-gray-200 dark:hover:bg-gray-700
                transition-colors
            "
        >
            <span 
            className="text-xl">
                <Icon />
            </span>
            <p className="text-base font-medium">
                {title}
            </p>
        </div>
    );
}

function Sidebar() {
    const {isOpen, setIsOpen} = useContext(menuState);
    // if(!isOpen) return null;
    return (
        <>
        
         <div 
         className={`
                w-64
                bg-gray-50 dark:bg-gray-900 p-4
                transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
                transition-transform duration-300 ease-in-out
                z-40
            `}
         >
            {SIDEBAR_MENU.map((x) => (
                <SidebarItem
                    key={x.id || x.title} // safer than index
                    icon={x.icon}
                    title={x.title}
                />
            ))}
        </div>
        </>
       
    );
}

export default Sidebar;
