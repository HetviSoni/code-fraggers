import Logo from "../../assets/logohorizontal.png";
import '../../styles/header.css';

const Header = props =>{
    return (
    <header className="header">
    <div className="header--container">
        <h1 className="logoimg">
            <img src={Logo} className="log" alt='Code fraggers logo'></img>
        </h1>
       
        <button className="signIn">
            Sign In
        </button>
    </div>
    </header>)
};
export default Header;