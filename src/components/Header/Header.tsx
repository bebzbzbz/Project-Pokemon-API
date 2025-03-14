import { useContext, useRef } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { mainContext } from "../../context/MainProvider";
import BackToTop from "../BackToTop/BackToTop";

interface IDarkModeToggleProps {
    dark: boolean,
    setDark: (dark: boolean) => void,
    searchName: string,
    setSearchName: (searchName: string) => void
}

const Header = () => {
    const {pokeParam} = useParams();
    const {dark, setDark, searchName, setSearchName} = useContext(mainContext) as IDarkModeToggleProps

    const darkLightToggle = () => {
        setDark(!dark)
    }

    const location = useLocation()
    const homeMenu = location.pathname === "/"
    const hideSingleCardNav = location.pathname === `/${pokeParam}`
    const navigate = useNavigate()

    const nameSearchRef = useRef<HTMLInputElement>(null)

    const handleInputSearch = () => {
        setSearchName(nameSearchRef.current?.value.toLowerCase() || "")
    }

    const topRef = useRef<HTMLDivElement>(null);

    return ( 
        <>
            <header className="py-6 px-7" ref={topRef}>
                <Link to="/" onClick={() => setSearchName("")}>
                    <img src="/images/logo.png" alt="Pokemon Logo" className="w-3/4 mx-auto mb-5" />
                </Link>
                <nav className="flex justify-between">
                    {homeMenu ? 
                        <Link to="/selection">
                            <img src="/images/burgermenu.svg" alt="Burger Menu" />
                        </Link>
                        : 
                        <img className="cursor-pointer" onClick={()=> navigate(-1)} src="/images/back.svg" alt="Back Arrow" />
                    }
                    
                    {!hideSingleCardNav ?
                        <input className="bg-gray-100 py-1 px-4 rounded-full" 
                            type="text" 
                            placeholder="Search Pokémon" 
                            onChange={handleInputSearch} 
                            ref={nameSearchRef}
                            value={searchName}/>
                        : ""}

                    <img className="cursor-pointer" src="/images/darklight-toggle.svg" alt="Dark/Light Mode" 
                        onClick={darkLightToggle}/>
                </nav>
            </header>
            <BackToTop target={topRef as React.RefObject<HTMLDivElement>}/>
        </>
    );
}

export default Header;