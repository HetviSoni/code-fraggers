import React, { useEffect, useState } from "react";
import Logo from '../../assets/logohorizontal.png'
import "../../styles/signup.css";
import {useNavigate} from "react-router-dom";
const SignupForm = () => {
    // const buttonText = 'Sign In';
    const history = useNavigate();
    return (
        <>

            <section className="signupcontainer">
                <h1 className="logoimg lgimg">
                    <img src={Logo} className="log" alt='Code fraggers logo' onClick={()=>history("/code-fraggers/")} ></img>
                </h1>
                <div className="signupcover">
                    <h1 className="signupheading">Sign up</h1>
                    <div className="subcon">
                        <div className="fullname">
                            <p>Fullname</p>
                            <input type="text" placeholder="Fullname" />
                        </div>
                        <div className="fullname">

                            <p>Leetcode Username</p>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="fullname">
                            <p>Metamask Public Address</p>
                            <input type="text" placeholder="Public Address" />
                        </div>
                        <div className="fullname">

                            <p>Email</p>
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className="fullname">
                            <p>Password</p>
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="signup-btn" >Sign up</div>
                        {/* <div>
                            <h3>Login Failed</h3>
                            <p>Username or password incorrect</p>
                        </div> */}
                        <div className="signUp"  >
                            You already have an account?<a onClick={()=>history("/code-fraggers/login")}>Sign in</a>
                        </div>
                    </div>


                </div>
            </section>
        </>


    )
}

export default SignupForm