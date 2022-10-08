import '../header/header.css';


const Button = ({ text, color }) => {
    return <button className="signIn" style={{ backgroundColor: color ? color : "#75B687" }}>
        {text}
    </button>
}
export default Button;