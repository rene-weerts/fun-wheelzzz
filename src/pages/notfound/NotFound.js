import React from 'react';
import './NotFound.css';
import {Link, useNavigate} from "react-router-dom";

;

function NotFound() {
    const navigate = useNavigate()
    setTimeout(() => {
        navigate("/")
    }, 3000)
    return (
        <main className="page-container-not-found">

            {/*<p>Take me back to the <Link to="/">home page.</Link></p>*/}
            <h2></h2>
            <p>Oops... this page doesn't exist<br/>You will be redirected in 3 sec.</p>
        </main>
    );
}

export default NotFound;