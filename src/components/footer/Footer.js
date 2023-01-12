import React from 'react';
import './Footer.css';
import iconTwitter from '../../assets/twitter.png';
import iconFacebook from '../../assets/facebook.png';
import iconInstagram from '../../assets/instagram.png';

const Footer = () => {


    return (
        <footer className="footer-outer-container">
            <div className="footer-inner-container">

                <ul>
                    <li><a href="/"><p>Home</p></a></li>
                    <li className="list-item-top5"><p id="text-footer-top5-link">Top 5</p></li>
                    <li><p>Donate</p></li>
                </ul>
                <div className="footer-social-media-container">
                    <div className="text-social-media">
                        <h3>Social with us</h3>
                    </div>
                    <div className="social-media-icons">
                        <img src={iconFacebook} alt="icon-facebook"/>
                        <img src={iconInstagram} alt="icon-instagram"/>
                        <img src={iconTwitter} alt="icon-twitter"/>
                    </div>
                </div>
            </div>


            <div className="credentials">
                <p>copyright © FunWheels. 2023 </p>
            </div>

        </footer>
    )
        ;
};

export default Footer;