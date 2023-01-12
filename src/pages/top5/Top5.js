import React from 'react';
import './Top5.css';
import pictureMap from '../../assets/picture-map.jpg';



function Top5() {
    return (
        <div className="top5-outer-container">

            <div className="top5-inner-container">
                <img className="top5-image" src={pictureMap} alt="picture-map"/>
            </div>


        </div>
    );
}

export default Top5;


