import { Link } from "react-router-dom";

const Header = () => {
    return (  
        <header className="bg-blue-200 py-6 px-7">
            <Link to="/">
                <img src="/logo.png" alt="Pokemon Logo" className="w-3/4 mx-auto mb-5" />
            </Link>
            <nav className="flex justify-between">
                <img src="/burgermenu.svg" alt="" />
                <input className="bg-gray-100 py-1 px-4 rounded-full" type="text" placeholder="Search Pokémon" />
                <img src="/darklight-toggle.svg" alt="" />
            </nav>
        </header>
    );
}

export default Header;