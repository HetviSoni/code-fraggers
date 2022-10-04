import React, {useEffect, useState} from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import "./login.css";
import Button from "./button";
const LoginForm = () => {
    const buttonText='Sign In';
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: "79474543031-tmjo35916ufn421ej3u1i2ljao2apr4s.apps.googleusercontent.com",
                scope: ""
            })
        }
        gapi.load('client: auth2', start)
    })

    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

    const onSuccess = e => {
        alert("User signed in")
        console.log(e)
    }

    const onFailure = e => {
        alert("User sign in Failed")
        console.log(e)
    }

    return (
        <section className="logincontainer">
            <div className="cover">
            <h1 className="loginheading">Sign in</h1>
            <div className="subcon">
                <p>Email</p>
                <input type="text" placeholder="Email" />
                <p>Password</p>
                <input type="password" placeholder="Password" />
                <div className="forgot">
                    Forgot password?
                </div>
                <div className="login-btn" onClick={popup}>Sign in</div>
                {/* <Button text={buttonText}/> */}
                
                <div className={popupStyle}>
                    <h3>Login Failed</h3>
                    <p>Username or password incorrect</p>
                </div>
            </div>
            <div className="signUp" >
                Don't have an account? <a href="url">Sign up</a> 
            </div>         
            
        </div>
        </section>
        
    )
}

export default LoginForm