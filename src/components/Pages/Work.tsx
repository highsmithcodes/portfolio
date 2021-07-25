import React from 'react';
import { Transition } from "react-transition-group";
import '../../css/main.css';
import image_1 from '../../img/client-work-Twelve-Three.jpg';
import image_2 from '../../img/client-work-Kogan-Law.jpg';
import image_3 from '../../img/client-work-MJBiz-Daily.jpg';


const Work: React.FC = () => {

    return (
        <div id="work">
         
            <div className="card columns">
                <div className="card-image column is-three-fifths">
                    <a href="https://www.digitalmarketingcompany.com/">
                        <div>
                                <img src={image_1} alt="Twelve Three Website" />
                        </div>
                    </a>
                </div>
                <div className="card-description align-middle column is-two-fifths has-text-right">
                    <div>
                        <div className="card-title">Twelve Three Media</div>
                        <div className="card-content">Twelve Three Media is a Digital Marketing Company focused on the success of your business.</div>
                        <ul>
                            <li>PHP</li>
                            <li>Javascript</li>
                            <li>JQuery</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="card columns">
                <div className="card-description align-middle column is-two-fifths has-text-left">
                    <div>
                        <div className="card-title">Kogan & Disalvo Law Firm</div>
                        <div className="card-content">Kogan & Disalvo is Florida’s premier personal injury law firm.</div>
                        <ul>
                            <li>PHP</li>
                            <li>Javascript</li>
                            <li>JQuery</li>
                        </ul>
                    </div>
                </div>
                <div className="card-image column is-three-fifths">
                    <a href="https://www.kogan-disalvo.com/">
                        <div>
                            <img src={image_2} alt="Kogan and Disalvo Website" />
                        </div>
                    </a>
                </div>
            </div>
             
            <div className="card columns">
                <div className="card-image column is-three-fifths">
                    <a href="https://mjbizdaily.com/">
                        <div>
                            <img src={image_3} alt="MJBiz Daily Website" />
                        </div>
                    </a>
                </div>
                <div className="card-description align-middle column is-two-fifths has-text-right">
                    <div>
                        <div className="card-title">MJBiz Daily</div>
                        <div className="card-content">MJBiz Daily is the most trusted business (B2B) news source for the cannabis industry in the US and Canada</div>
                        <ul>
                            <li>React.js</li>
                            <li>PHP</li>
                            <li>Sass</li>
                        </ul>
                    </div>
                </div>
            </div>
                       
        </div>
    );
}

export default Work;
