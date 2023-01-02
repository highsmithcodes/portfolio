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
import Carousel, { CarouselItem } from "../Functions/Carousel";

const Work: React.FC = () => {

    
     
       

    return (
        <div id="work" className="columns is-mobile">
            <Carousel>
                <CarouselItem width="20px"> <div className='item'>
                    <a href="https://www.hauptman-obrien.net/" target="_blank">
                        <div className='box-img'>
                            <a><img src={gif_1} /></a>
                        </div>
                    </a>
                    <div className='box-details'>
                        <div className='title'>Hauptman O'Brien</div>
                        <p className='description'>Omaha Personal Injury Lawyers</p>
                        <div className='languages'>
                            <span>Javascript</span>
                            <span>Sass</span>
                            <span>PHP</span>
                        </div>
                    </div>
                </div></CarouselItem>

                <CarouselItem width="20px">
                    <div className='item'>
                        <a href="https://www.bishoplawmd.com/" target="_blank">
                            <div className='box-img'>
                                <a><img src={gif_2} /></a>
                            </div>
                        </a>
                        <div className='box-details'>
                            <div className='title'>Bishop Law</div>
                            <p className='description'>Personal Injury Attorneys in Baltimore, Ocean City, and all of Maryland</p>
                            <div className='languages'>
                                <span>Javascript</span>
                                <span>Sass</span>
                                <span>PHP</span>
                            </div>
                        </div>
                    </div>
                    </CarouselItem>
                    <CarouselItem width="20px">
                        <div className='item'>
                            <a href="https://www.coplancrane.com/" target="_blank">
                                <div className='box-img'>
                                    <a><img src={gif_3} /></a>
                                </div>
                            </a>
                            <div className='box-details'>
                                <div className='title'>Coplan + Crane</div>
                                <p className='description'>Chicago Personal Injury Lawyers</p>
                                <div className='languages'>
                                    <span>Javascript</span>
                                    <span>Sass</span>
                                    <span>PHP</span>
                                </div>
                            </div>
                        </div>
                        </CarouselItem>
                        <CarouselItem width="20px">
                        <div className='item'>
                            <a href="https://www.cannabisbenchmarks.com/" target="_blank">
                                <div className='box-img'>
                                    <a><img src={gif_4} /></a>
                                </div>
                            </a>
                            <div className='box-details'>
                                <div className='title'>Cannabis Benchmarks</div>
                                <p className='description'>News Rource for cannabis wholesale pricing and analysis</p>
                                <div className='languages'>
                                    <span>Javascript</span>
                                    <span>Sass</span>
                                    <span>PHP</span>
                                    <span>Stripe</span>
                                </div>
                            </div>
                        </div>
                        </CarouselItem>
            </Carousel>
        </div>
    
    );
}

export default Work;
