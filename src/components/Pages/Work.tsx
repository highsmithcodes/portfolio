import React from 'react';
import { Transition } from "react-transition-group";
import '../../css/main.css';
import image_1_logo from '../../img/hauptman-obrien-wolf-and-lathrop.png';
import image_2_logo from '../../img/coplan-crane-personal-injury-lawyers.png';
import image_3_logo from '../../img/Henry-Carus-Associates-Injury-Lawyer.png';
import image_4_logo from '../../img/The-Bishop-Law-Group.png';
import image_5_logo from '../../img/cannabis-benchmarks-logo-white.png';
import image_6_logo from '../../img/maggiano-personal-injury-lawyers-logo.png';



const Work: React.FC = () => {

    return (
        <div id="work">
            <div className='columns is-mobile'>
                <div className='is-one-third column '>
                    <div className="super-box">
                        <div className="box">
                            <div className="icon_bg">
                            </div>
                            <div className='icon-details'>
                                <p>Omaha Personal Injury lawyers</p>
                                <a href="" >View Site</a>
                            </div>
                        </div>

                        <div className="icon">
                            <img src={image_1_logo} />
                        </div>

                    </div>
                </div>

                <div className='is-one-third column '>
                    <div className="super-box">
                    <div className="box">
                        <div className="icon_bg"></div>
                        <div className='icon-details'>
                                <p>Omaha Personal Injury lawyers</p>
                                <a href="" >View Site</a>
                            </div>
                    </div>

                    <div className="icon">
                        <img src={image_2_logo} />
                    </div>

                    </div>
                </div>
                <div className='is-one-third column'>
                    <div className="super-box">
                    <div className="box">
                        <div className="icon_bg"></div>
                        <div className='icon-details'>
                                <p>Omaha Personal Injury lawyers</p>
                                <a href="" >View Site</a>
                            </div>
                    </div>

                    <div className="icon">
                        <img src={image_3_logo} />
                    </div>

                    </div>
                </div>

                <div className='is-one-third column'>
                    <div className="super-box">
                    <div className="box">
                        <div className="icon_bg"></div>
                        <div className='icon-details'>
                                <p>Omaha Personal Injury lawyers</p>
                                <a href="" >View Site</a>
                            </div>
                    </div>

                    <div className="icon">
                        <img src={image_4_logo} />
                    </div>

                    </div>
                </div>

                <div className='is-one-third column '>
                    <div className="super-box">
                    <div className="box">
                        <div className="icon_bg"></div>
                        <div className='icon-details'>
                                <p>Omaha Personal Injury lawyers</p>
                                <a href="" >View Site</a>
                            </div>
                    </div>

                    <div className="icon">
                        <img src={image_5_logo} />
                    </div>

                    </div>
                </div>

                <div className='is-one-third column'>
                    <div className="super-box">
                        <div className="box">
                            <div className="icon_bg"></div>
                            <div className='icon-details'>
                                <p>Omaha Personal Injury lawyers</p>
                                <a href="" >View Site</a>
                            </div>
                        </div>

                        <div className="icon">
                            <img src={image_6_logo} />
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    
    );
}

export default Work;
