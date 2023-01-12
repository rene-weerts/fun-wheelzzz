import React from 'react';
import './SignUp.css';

const Register = () => {
    return (<>
        <form >
            <div className="register-outer-container-background">
                <div className="register-inner-container">
                    <div className="register-container-title">
                        <h2 className="register-title">REGISTER</h2>
                        <p className="register-text-p-title">Please fill in this form to create an account.</p>
                    </div>
                    <div className="register-container-text">
                        <label htmlFor="email"><p className="register-text-p">Email</p></label>
                        <input type="text" placeholder="Enter Email" name="email" id="email" required/>
                        <label htmlFor="psw"><p className="register-text-p">Password</p></label>
                        <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>
                        <label htmlFor="psw-repeat"><p className="register-text-p">Repeat-Password</p></label>
                        <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
                        <div className="register-button-div">
                            <button className="register-button"  type="submit"><p>Send</p></button>
                        </div>
                        <div className="container signin">
                            <p className="register-agreement-text" >By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                            <p>Already have an account? <a href="#">Sign in</a>.</p>
                        </div>


                    </div>
                </div>

            </div>

        </form>



    </>);

};

export default Register;