import React from 'react';
import './Nav.css';
import flag from "../../assets/limburgse-vlag.png"
import {NavLink, useNavigate} from "react-router-dom";

function Nav({auth, setAuth}) {
    const navigate = useNavigate()
    function handleRegister (e){
        e.preventDefault()
        setAuth(true)
        navigate("/register")
    }

    return (<nav>
            <div className="nav-container">
                <img src={flag} alt="vlag"/>
                <h2>Fun Wheelzzz</h2>

                <ul>

                    { auth && <NavLink
                        className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to="/">
                        Home
                    </NavLink>}

                    { auth && <NavLink
                        className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to="/top5">
                        Top 5
                    </NavLink>}
                    { auth && <NavLink
                        className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to="/maps">
                        Maps
                    </NavLink>}

                    { auth && <NavLink
                        className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to="/strava">
                        Strava
                    </NavLink>}

                    {  auth &&<NavLink
                        className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to="/events">
                        Events
                    </NavLink>}

                    {  auth && <NavLink
                        className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to="/places">
                        Places
                    </NavLink>}
                    { auth && <NavLink
                        className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to="/profile">
                        Profile
                    </NavLink>}

                    { auth && <NavLink
                        className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to="/login">
                        Login
                    </NavLink>}
                    {auth && <NavLink
                        className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to="/repair">
                        Repair
                    </NavLink>}
                    {/*{auth && <NavLink*/}
                    {/*    className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}*/}
                    {/*    to="/register">*/}
                    {/*    Register*/}
                    {/*</NavLink>}*/}
                </ul>
                <div className="button-container">
                    <button type="button" className="register-button" onClick={()=>handleRegister} >Register</button>
                    <button type="button" className="login-button" onClick={() =>{setAuth(true);}} >Login</button>
                    {auth &&  <button type="button" className="logout-button"  onClick={() =>{setAuth(false);}} >logout</button>}
                </div>
            </div>
        </nav>);
}

export default Nav;

