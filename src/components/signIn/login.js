import React, { useEffect, useState } from "react";
import "../../styles/login.css";
import Logo from '../../assets/logohorizontal.png'
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

    const initialValues = { email: "", password: "" };
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
        return errors;
    }

    const history = useNavigate();
    return (
        <>
            <section className="logincontainer">
                <h1 className="logoimg lgimg">
                    <img src={Logo} className="log" alt='Code fraggers logo' onClick={() => history("/code-fraggers/")}></img>
                </h1>
                <div className="logincover">
                    <h1 className="loginheading">Sign In</h1>
                    <div className="loginsubcon">
                        <form onSubmit={handleSubmit}>

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
                                                <p>Sign in failed, please try again!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                : <div></div>}

                            <div className="lfullname">
                                <p>Email</p>
                                <input type="text" placeholder="Email" name="email" value={formValues.email} onChange={handleChange} />
                            </div>
                            <p className="error-text">{formErrors.email}</p>
                            <div className="lfullname">
                                <p>Password</p>
                                <input type="password" placeholder="Password" name="password" value={formValues.password} onChange={handleChange} />
                            </div>
                            <p className="error-text">{formErrors.password}</p>
                            <div className="forgot">
                                Forgot password?
                            </div>
                            <button className="login-btn">Sign in</button>
                        </form>
                        <div className="login" >
                            Don't have an account?<a onClick={() => history("/code-fraggers/register")}>Sign up</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginForm