import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";

const Layout = () => {
    const location = useLocation()
    const hideHeader = location.pathname === "/selection"

    return (  
        <>
            {!hideHeader && <Header/>}
            <main>
                <Outlet/>
            </main>
        </>
    );
}

export default Layout;