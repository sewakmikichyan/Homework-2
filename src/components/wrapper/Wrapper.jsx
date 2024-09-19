import "./Wrapper.css";
import Button from "../basic/button/Button";
import Link from "../basic/link/Link";

function Wrapper() {
    return (
        <div id="wrapper">
            <h3 className="h2">Login</h3>
            <div className="inputs-block">
                <input type="email" className="p" placeholder="Email" />
                <input type="password" className="p" placeholder="Password" />
            </div>
            <div className="remember-forgot">
                <label className="p">
                    <input type="checkbox" />
                    remember me
                </label>
                <Link content="forgot password?"/>
            </div>
            <Button content="Login" />
        </div>
    )
}

export default Wrapper;