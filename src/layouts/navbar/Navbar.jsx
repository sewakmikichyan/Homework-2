import "./Navbar.css";

function Navbar({id}) {
    return (
        <ul className="navbar" id={id}>
            <li className="navbar-item">
                <a href="#" className="navbar-link link">Home</a>
            </li>
            <li className="navbar-item">
                <a href="#" className="navbar-link link">About</a>
            </li>
            <li className="navbar-item">
                <a href="#" className="navbar-link link">Services</a>
            </li>
            <li className="navbar-item">
                <a href="#" className="navbar-link link">Contact</a>
            </li>
        </ul>
    );
}

export default Navbar;