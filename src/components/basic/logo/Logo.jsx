function Logo({ link }) {
    return (
        <div className="logo-block" style={{
            userSelect: "none",
            cursor: "pointer"
        }} onClick={() => {
            window.location.reload();
        }}>
            <a href={link} className="logo-link h2">Logo</a>
        </div>
    );
}

export default Logo;