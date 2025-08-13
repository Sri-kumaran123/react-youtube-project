import { SIDEBAR_MENU } from "assets/constant"
import { NavLink } from "react-router-dom"
export default function Sidebar({sideBar}){

    return <div className={`${sideBar?"hidden":"block"} h-full  flex-1 border-r-2 border-gray-300 transition-all ease-in`}>
        <ul>
            {
                SIDEBAR_MENU.map(x=>{
                const Icon = x.icon;
                
                return <NavLink>
                    <li className="flex flex-row p-3 gap-3 items-center text-xl  transition-all ease-in hover:bg-black hover:text-white
                                    m-1 rounded-md ">
                        <Icon size={24}/>
                        <span className="capitalize">
                            {x.title}
                        </span>
                    </li>
                </NavLink>})
            }
        </ul>
    </div>
}