import React, {useEffect, useState} from "react";
import Logo from "../../assets/logohorizontal.png";
import '../../styles/header.css';
import {useNavigate} from "react-router-dom";
const Header = props =>{
    const history = useNavigate();
    return (
    <header className="header">
    <div className="header--container">
        <h1 className="logoimg">
            <img src={Logo} className="log" alt='Code fraggers logo'></img>
        </h1>
       
        <button className="signIn" onClick={()=>history("/code-fraggers/login")} >
            Sign In
        </button>
    </div>
    </header>)
};
export default Header;