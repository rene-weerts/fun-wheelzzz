import React from 'react';
import "./Register.css"


const Register = () => {

    return (
        <div className="container">
            <div className="sign-up-container">
            <h1>Registreren</h1>

            <form action="">
                <label htmlFor="input-username">
                    Gebruikersnaam:
                    <input type="text" name="username" id="input-username"/>
                </label>
                <p className="form-warning" id="username-warning"></p>
                <label htmlFor="input-password">
                    Wachtwoord:
                    <input type="password" name="password" id="input-password"/>
                </label>
                <p className="form-warning" id="password-warning"></p>
                <button>Submit</button>
            </form>
        </div>
        </div>

    );
};

export default Register;