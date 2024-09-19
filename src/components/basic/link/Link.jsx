import "./Link.css";

function Link({content, id}) {
    return (
        <a href="#" className="link" id={id}>{content}</a>
    );
};

export default Link;