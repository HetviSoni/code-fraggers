import React, { useEffect, useState } from "react";
import Logo from '../../assets/logohorizontal.png'
import "../../styles/signup.css";
import { useNavigate } from "react-router-dom";
const SignupForm = () => {

    const initialValues = { fullName: "", userName: "", address: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    const validate = (values) => {
        const errors = {};
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
        if (!values.fullName) {
            errors.fullName = "Name is required!"
        }
        if (!values.userName) {
            errors.userName = "Username is required!"
        }
        if (!values.email) {
            errors.email = "Email is required!"
        } else if (!regex.test(values.email)) {
            errors.email = "Please enter a valid email format!"
        }
        if (!values.password) {
            errors.password = "Password is required!"
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters!"
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters!"
        }
        if (!values.address) {
            errors.address = "Address is required!"
        }
        return errors;
    }
    const history = useNavigate();

    return (
        <section className="signupcontainer">
            <h1 className="logoimg lgimg">
                <img src={Logo} className="log" alt='Code fraggers logo' onClick={() => history("/code-fraggers/")} ></img>
            </h1>
            <form onSubmit={handleSubmit}>

                <div className="signupcover">
                    <h1 className="signupheading">Sign up</h1>

                    {(Object.keys(formErrors).length === 0 && isSubmit) ? <div className="row">
                        <div className="col-xs-12 col-sm-6 col-sm-offset-3">
                            <div className="new-message-box">
                                <div className="new-message-box-success">
                                    <div className="info-tab tip-icon-success" title="success"><i></i></div>
                                    <div className="tip-box-success">
                                        <p>Successfully signed up!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        : <div></div>}

                    {(Object.keys(formErrors).length !== 0 && isSubmit) ? <div className="row">
                        <div className="col-xs-12 col-sm-6 col-sm-offset-3">
                            <div className="new-message-box">
                                <div className="new-message-box-danger">
                                    <div className="info-tab tip-icon-danger" title="error"><i></i></div>
                                    <div className="tip-box-danger">
                                        <p>Sign up failed, please try again!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        : <div></div>}
                    <div className="subcon">
                        <div className="fullname">
                            <p>Fullname</p>
                            <input type="text" placeholder="Fullname" name="fullName" value={formValues.fullName} onChange={handleChange} />
                        </div>
                        <p className="error-text">{formErrors.fullName}</p>
                        <div className="fullname">
                            <p>Leetcode Username</p>
                            <input type="text" placeholder="Username" name="userName" value={formValues.userName} onChange={handleChange} />
                        </div>
                        <p className="error-text">{formErrors.userName}</p>
                        <div className="fullname">
                            <p>Metamask Public Address</p>
                            <input type="text" placeholder="Public Address" name="address" value={formValues.address} onChange={handleChange} />
                        </div>
                        <p className="error-text">{formErrors.address}</p>
                        <div className="fullname">
                            <p>Email</p>
                            <input type="text" placeholder="Email" name="email" value={formValues.email} onChange={handleChange} />
                        </div>
                        <p className="error-text">{formErrors.email}</p>
                        <div className="fullname">
                            <p>Password</p>
                            <input type="password" placeholder="Password" name="password" value={formValues.password} onChange={handleChange} />
                        </div>
                        <p className="error-text">{formErrors.password}</p>
                        <button className="signup-btn">
                            Sign up
                        </button>
                        {/* <div>
                            <h3>Login Failed</h3>
                            <p>Username or password incorrect</p>
                        </div> */}
                        <div className="signUp"  >
                            <p className="signIn-text">You already have an account?</p>
                            <a onClick={() => history("/code-fraggers/login")}>Sign in</a>
                        </div>
                    </div>


                </div>
            </form>
        </section>


    )
}

export default SignupForm