import React from 'react';
import'./SignIn.css'
const SignIn = () => {
    return (
        <>
            <form>
                <div className="login-outer-container-background">
                    <div className="login-inner-container">
                        <div className="login-container-title">
                            <h2 className="login-title">LOGIN</h2>
                            <p  className="login-text-p-title">Please fill in to login.</p>

                            <div className="login-container-text">

                                <label htmlFor="uname"><p className="login-text-p">Username</p></label>
                                <input type="text" placeholder="Enter Username" name="uname" id="uname" required/>

                                <label htmlFor="psw"><p className="login-text-p">Enter Password</p></label>
                                <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>

                                <div className="login-button-div">
                                    <button className="login-button" type="submit"><p>Send</p></button>
                                </div>
                                <div className="login-container-forgot-pswr">
                                    <span className="login-text-forgot-psw">Forgot <a href="#">password?</a></span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </form>
        </>
    );
};

export default SignIn;