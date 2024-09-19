import "./NavMobile.css";
import Navbar from "../navbar/Navbar";
import Logo from "../../components/basic/logo/Logo";
import Burger from "../../components/basic/burger/Burger";

function NavMobile({ className, closeMenu }) {
    return (
        <div className={className}>
            <div className="nav-mobile__header container">
                <Logo />
                <Burger id="close-menu" closeMenu={closeMenu}/>
            </div>
            <div className="nav-mobile__devider"></div>
            <div className="nav-mobile__content container">
                <Navbar id="navbar-mobile" />
            </div>
        </div>
    );
}

export default NavMobile;