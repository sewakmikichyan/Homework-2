import "./Burger.css";

function Burger({ id, openMenu, closeMenu }) {
    return (
        <button className="burger" id={id} onClick={(e) => {
            if (e.target.id == "open-menu") {
                openMenu();
            } else closeMenu();
        }}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
}

export default Burger;