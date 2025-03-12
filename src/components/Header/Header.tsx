import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { mainContext } from "../../context/MainProvider";

const Header = () => {
    const {dark, setDark} = useContext(mainContext) as any

    const darkLightToggle = () => {
        setDark(!dark)
    }

    const location = useLocation()
    const homeMenu = location.pathname === "/"

    return (  
        <header className="py-6 px-7">
            <Link to="/">
                <img src="/images/logo.png" alt="Pokemon Logo" className="w-3/4 mx-auto mb-5" />
            </Link>
            <nav className="flex justify-between">
                {homeMenu ? 
                    <Link to="/selection">
                        <img src="/images/burgermenu.svg" alt="Burger Menu" />
                    </Link>
                    : <Link to="/">
                    <img src="/images/back.svg" alt="Back Arrow" />
                    </Link>
                }
                
                <input className="bg-gray-100 py-1 px-4 rounded-full" type="text" placeholder="Search Pokémon" />
                <Link to="" onClick={darkLightToggle}>
                    <img src="/images/darklight-toggle.svg" alt="Dark/Light Mode" />
                </Link>
            </nav>
        </header>
    );
}

export default Header;