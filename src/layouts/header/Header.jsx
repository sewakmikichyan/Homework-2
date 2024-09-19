import "./Header.css";
import Logo from "../../components/basic/logo/Logo";
import Navbar from "../navbar/Navbar";
import Burger from "../../components/basic/burger/Burger";

function Header({ openMenu}) {
    return (
        <div className="header" id="header">
            <div className="container">
                <nav className="nav" id="nav">
                    <Logo />
                    <Navbar id="navbar" />
                    <Burger id="open-menu" openMenu={openMenu}/>
                </nav>
            </div>
        </div>
    );
}

export default Header;