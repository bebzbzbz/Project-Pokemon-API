import { useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { mainContext } from "../../context/MainProvider";
import BackToTop from "../BackToTop/BackToTop";
import GenBtn from "../GenBtn/GenBtn";

interface IDarkModeToggleProps {
    dark: boolean,
    setDark: (dark: boolean) => void,
    searchName: string,
    setSearchName: (searchName: string) => void
}

const Header = () => {
    const {dark, setDark, searchName, setSearchName} = useContext(mainContext) as IDarkModeToggleProps

    const darkLightToggle = () => {
        setDark(!dark)
    }

    const location = useLocation()
    const homeMenu = location.pathname === "/"
    const navigate = useNavigate()

    const nameSearchRef = useRef<HTMLInputElement>(null)

    const handleInputSearch = () => {
        setSearchName(nameSearchRef.current?.value.toLowerCase() || "")
    }

    const topRef = useRef<HTMLDivElement>(null);

    return ( 
        <>
            <header ref={topRef} className={homeMenu ? 'mb-7' : ""}>
                <Link to="/" className="md:w-1/3 block mx-auto mb-10" onClick={() => setSearchName("")}>
                    <img src="/images/logo.png" alt="Pokemon Logo" className="w-full" />
                </Link>
                <nav className={`flex justify-between items-center ${homeMenu && `mb-7`}`}>
                    {homeMenu ? 
                        <Link to="/selection">
                            <img src="/images/burgermenu.svg" alt="Burger Menu" />
                        </Link>
                        : 
                        <img className="cursor-pointer hover:scale-90 transition ease duration-200" onClick={()=> navigate(-1)} src="/images/back.svg" alt="Back Arrow" />
                    }
                    
                    {homeMenu &&
                        <input className="bg-gray-100 py-1 px-10 rounded-full text-center dropShadow" 
                            type="text" 
                            placeholder="Search Pokémon" 
                            onChange={handleInputSearch} 
                            ref={nameSearchRef}
                            value={searchName}/>
                    }
                    <img className="cursor-pointer hover:scale-90 transition ease duration-200" src="/images/darklight-toggle.svg" alt="Dark/Light Mode" 
                        onClick={darkLightToggle}/>
                </nav>
                {homeMenu && 
                    <div className="genBtns flex flex-wrap justify-center gap-3">
                        <GenBtn text="Gen 1" offset="" limit="151"/>
                        <GenBtn text="Gen 2" offset="offset=151&" limit="100"/>
                        <GenBtn text="Gen 3" offset="offset=251&" limit="135"/>
                        <GenBtn text="Gen 4" offset="offset=386&" limit="107"/>
                        <GenBtn text="Gen 5" offset="offset=493&" limit="156"/>
                        <GenBtn text="Gen 6" offset="offset=649&" limit="72"/>
                        <GenBtn text="Gen 7" offset="offset=721&" limit="88"/>
                        <GenBtn text="Gen 8" offset="offset=809&" limit="96"/>
                        <GenBtn text="Gen 9" offset="offset=905&" limit="120"/>
                    </div>}
            </header>
            <BackToTop target={topRef as React.RefObject<HTMLDivElement>}/>
        </>
    );
}

export default Header;