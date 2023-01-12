import React from 'react';
import './AnchorsFooter.css'
import {NavLink} from 'react-router-dom';
const AnchorsFooter = ({auth, setAuth}) =>  {
    const navLinkStyles = ({isActive})=>{

        return {
            fontWeight: isActive ? "bolder" : "normal",
            textDecoration: isActive ? "underline dashed var(--cl-rood" : "none",
        }
    }
    return (
        <ul>
            <a className="homefooter" href="#header-home" >Home</a>
            {auth && <NavLink
                className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                to="/regio" style={navLinkStyles}>
                Regio
            </NavLink>}
            <a className="top5footer" href="">Top 5</a>
            <a href="">Donate</a>
        </ul>
    );
}

export default AnchorsFooter;