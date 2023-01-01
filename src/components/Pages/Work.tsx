import React from 'react';
import { Transition } from "react-transition-group";
import '../../css/main.css';
import gif_1 from '../../img/gif-howl.gif';
import gif_2 from '../../img/gif-bishop.gif';
import gif_3 from '../../img/gif-coplan.gif';
import gif_4 from '../../img/gif-cb.gif';
import image_1_logo from '../../img/hauptman-obrien-wolf-and-lathrop.svg';
import image_2_logo from '../../img/The-Bishop-Law-Group.svg';
import image_3_logo from '../../img/coplan-crane-personal-injury-lawyers.svg';
import image_4_logo from '../../img/cannabis-benchmarks-logo-white.png';

// import image_5_logo from '../../img/cannabis-benchmarks-logo-white.png';
// import image_6_logo from '../../img/maggiano-personal-injury-lawyers-logo.svg';



const Work: React.FC = () => {

    return (
        <div id="work">

            <div className='box'>
                <a href="https://www.hauptman-obrien.net/" target="_blank">
                    <div className="visible-content">
                        <img src={image_1_logo} />
                    </div>
                    <div className='box-img'>
                        <a><img src={gif_1} /></a>
                    </div>
                </a>
                <div className='box-details'>
                    <span>Javascript</span>
                    <span>Sass</span>
                    <span>PHP</span>
                </div>
            </div>
            <div className='box'>
                <a href="#" target="_blank">
                    <div className="visible-content">
                        <img src={image_2_logo} />
                    </div>
                    <div className='box-img'>
                        <a><img src={gif_2} /></a>
                    </div>
                </a>
                <div className='box-details'>
                    <span>Javascript</span>
                    <span>Sass</span>
                    <span>PHP</span>
                </div>
            </div>
            <div className='box'>
                <a href="https://www.bishoplawmd.com/" target="_blank">
                    <div className="visible-content">
                        <img src={image_3_logo} />
                    </div>
                    <div className='box-img'>
                        <a><img src={gif_3} /></a>
                    </div>
                </a>
                <div className='box-details'>
                    <span>Javascript</span>
                    <span>Sass</span>
                    <span>PHP</span>
                </div>
            </div>
            <div className='box'>
                <a href="#" target="_blank">
                    <div className="visible-content">
                        <img src={image_4_logo} />
                    </div>
                    <div className='box-img'>
                        <a><img src={gif_4} /></a>
                    </div>
                </a>
                <div className='box-details'>
                    <span>Javascript</span>
                    <span>Sass</span>
                    <span>PHP</span>
                </div>
            </div>
        </div>
    
    );
}

export default Work;
