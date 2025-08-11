import { Outlet } from "react-router-dom";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
function Layout(){
    return <div>
        <Header />
        <section>
            <Sidebar />
            <Outlet />
        </section>
    </div>
}

export default Layout;