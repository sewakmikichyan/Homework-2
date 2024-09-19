import React from "react";
import "./Button.css";

function Button({content, id}) {
    return (
        <button className="btn" id={id}>{content}</button>
    );
}

export default Button;