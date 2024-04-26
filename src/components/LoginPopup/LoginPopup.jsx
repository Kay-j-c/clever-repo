import React, { useState } from "react";
import './LoginPopup.css'
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Sign Up");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [isActive, setIsActive] = useState(false); // Active state for cross_icon
    const [showForm, setShowForm] = useState(true); // State variable to show/hide form
    const [forgotPassword, setForgotPassword] = useState(false); // State to track forgot password form visibility

    const handleSignUp = (e) => {
        e.preventDefault();
        // Validate form fields
        const errors = {};
        if (!name.trim() && currState !== "Login") {
            errors.name = "Name is required";
        }
        if (!email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email is invalid";
        }
        if (!password.trim()) {
            errors.password = "Password is required";
        } else if (password.length < 6) {
            errors.password = "Password must be at least 6 characters";
        }
        if (!agreeTerms) {
            errors.agreeTerms = "Please agree to the terms";
        }
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            // Form is valid, you can proceed with signup
            console.log("Form is valid");
            // Perform signup operation here
        }
    };

    const handleHideForm = () => {
        setShowForm(false); // Hide the form
        setShowLogin(false); // Optionally hide the login popup
    };

    const handleForgotPassword = () => {
        setForgotPassword(true); // Show forgot password form
    };

    return (
        <div className="login-popup">
            {showForm && (
                <form className="login-popup-container" onSubmit={handleSignUp}>
                    <div className="login-popup-title">
                        <h2>{currState}</h2>
                        <button onClick={handleHideForm}>x</button> {/* Button to hide the form */}
                    </div>
                    <div className="login-popup-inputs">
                        {currState === "Login" ? <></> : <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />}
                        <span className="error">{formErrors.name}</span>

                        <input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <span className="error">{formErrors.email}</span>

                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <span className="error">{formErrors.password}</span>
                    </div>
                    <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
                    <div className="login-popup-condition">
                        <input type="checkbox" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} required />
                        <p>By continuing, I agree to the terms of use & privacy policy</p>
                        <span className="error">{formErrors.agreeTerms}</span>
                    </div>
                    {currState === "Login" ?
                        <p><span onClick={handleForgotPassword}>Forgot Password?</span></p>
                        :
                        <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
                    }
                    {forgotPassword && (
                        <div className="forgot-password-form">
                            {/* Implement your forgot password form here */}
                            <h2>Forgot Password?</h2>
                            <p>Please enter your email to reset your password.</p>
                            <input type="email" placeholder="Your email" />
                            <button>Reset Password</button>
                            <button onClick={() => setForgotPassword(false)}>Cancel</button>
                        </div>
                    )}
                </form>
            )}
        </div>
    );
};

export default LoginPopup;

