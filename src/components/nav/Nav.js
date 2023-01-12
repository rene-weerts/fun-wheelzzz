import React from 'react';
import './Nav.css';
import flag from '../../assets/Limburgse-vlag.png';
import {NavLink, useNavigate} from 'react-router-dom';

const Nav = ({auth, setAuth}) => {

    const navigate = useNavigate();
    const navLinkStyles = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bolder' : 'normal',
            textDecoration: isActive ? 'underline dashed var(--cl-rood' : 'none',
        };
    };

    function handleRegister(e) {
        e.preventDefault();
        setAuth(true);
        navigate('/register');

    }

    return (

        <nav>
            <div className="wheelzzz-container" id="header-home">
                <div>
                    <p className="name-funwheelzzz">Fun Wheelzzz</p>
                </div>
                <div className="img-vlag">
                    <img src={flag} alt="Limburgse-vlag" width="45" height="25"/>
                </div>

            </div>


            <ul className="ul-nav">

                {auth && <NavLink
                    className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                    to="/" style={navLinkStyles}>
                    <p>Home</p>
                </NavLink>}

                {auth && <NavLink
                    className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                    to="/top5" style={navLinkStyles}>
                    <p id="top5-color">Top 5</p>
                </NavLink>}

                {auth && <NavLink
                    className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                    to="/regio" style={navLinkStyles}>
                    <p>Regio</p>
                </NavLink>}


                {auth && <NavLink
                    className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                    to="/" style={navLinkStyles}><p>
                    Contact</p>

                </NavLink>}

                {auth &&
                    <NavLink to="login" onClick={() => {
                        setAuth(false);
                    }} style={navLinkStyles}><p>Logout</p></NavLink>}

                {!auth && <NavLink className="login-link" to="/login" onClick={() => {
                    setAuth(true);
                }} style={navLinkStyles}><p>Login</p></NavLink>}

                {!auth && <NavLink className="register-link" to="/Register" onClick={() => {
                    setAuth(true);
                }} style={navLinkStyles}><p>Register</p></NavLink>}


            </ul>


        </nav>);
};

export default Nav;

