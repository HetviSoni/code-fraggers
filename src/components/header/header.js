import Logo from "../../assets/logohorizontal.png";

import './header.css';
const Header = props =>{
    return (
    <header className="header">
        <h1 className="logoimg">
            <img src={Logo} className="log" alt='Code fraggers logo'></img>
        </h1>
        {/* <button className="sign-Up">
            Sign Up
        </button> */}
        <button className="signIn">
            Sign In
        </button>
    </header>)
};
export default Header