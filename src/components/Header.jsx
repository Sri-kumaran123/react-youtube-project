import { TITLE } from "../assets/constant";
import Search from "./Search";
import { FiMenu, FiX } from "react-icons/fi";
import { useContext } from "react";
import { menuState } from "../pages/Layout";

function Header(){
    const {isOpen, setIsOpen} = useContext(menuState);

    return <header className="h-24 w-full flex flex-row">
        <p className="flex felx-row w-64 items-center justify-center text-2xl gap-2 cursor-pointer">
            <span
                onClick={()=>{
                    setIsOpen(prev=>!prev)
                }}
            >
                <FiMenu />
            </span>
            <span className="text-xl">
                {TITLE}
            </span>
        </p>
        <div className="flex-1 bg-red-300 justify-center">
            <Search />
        </div>
    </header>
}

export default Header;