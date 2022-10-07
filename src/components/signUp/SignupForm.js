import React, {useEffect, useState} from "react";
// import GoogleLogin from "react-google-login";
// import { gapi } from "gapi-script";
import Logo from '../../assets/logohorizontal.png'
import "./signup.css";
// import Button from "./button";
const SignupForm = () => {
    const buttonText='Sign In';
    // useEffect(() => {
    //     function start() {
    //         gapi.client.init({
    //             clientId: "79474543031-tmjo35916ufn421ej3u1i2ljao2apr4s.apps.googleusercontent.com", 
    //             scope: ""
    //         })
    //     }
    //     gapi.load('client: auth2', start)
    // })

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
        <>
        
        <section className="signupcontainer">
                <h1 className="logoimg lgimg">
                        <img src={Logo} className="log" alt='Code fraggers logo'></img>
                </h1>
            <div className="signupcover">
                <h1 className="signupheading">Sign up</h1>
                <div className="subcon">
                    <div className="fullname">
                        <p>Fullname</p>
                        <input type="text" placeholder="Fullname"/>
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
                    
             
                  
                    {/* <div className="forgot">
                        Forgot password?
                    </div> */}
                    <div className="signup-btn" onClick={popup}>Sign up</div>
                    {/* <Button text={buttonText}/> */}

                    
                    <div className={popupStyle}>
                        <h3>Login Failed</h3>
                        <p>Username or password incorrect</p>
                    </div>
                    <div className="signUp" >
                    You already have an account?<a href="url">Sign in</a> 
                     </div> 
                 </div>
                        
            
             </div>
            </section>
        </>
      
        
    )
}

export default SignupForm