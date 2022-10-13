import React, {useEffect, useState} from "react";
import "../../styles/login.css";
import Logo from '../../assets/logohorizontal.png'
import {useNavigate} from "react-router-dom";
const LoginForm = () => {
    const history = useNavigate();
    return (
        <>
            <section className="logincontainer">
                <h1 className="logoimg lgimg">
                    <img src={Logo} className="log" alt='Code fraggers logo' onClick={()=>history("/code-fraggers/")}></img>
                </h1>
                <div className="logincover">
                    <h1 className="loginheading">Sign In</h1>
                    <div className="loginsubcon">
                    
                        <div className="lfullname">
                            <p>Email</p>
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className="lfullname">
                            <p>Password</p>
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="forgot">
                        Forgot password?
                    </div>
                        <div className="login-btn"   >Sign in</div>
                        <div className="login" >
                            Don't have an account?<a onClick={()=>history("/code-fraggers/register")}>Sign up</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginForm