import React, { useEffect } from 'react';
import '../../css/main.css';
import headshot from '../../img/highsmith-headshot.png';
import GithubCalendar from '../Functions/GithubCalendar';

const Experience: React.FC = () => {

    return (
        <div id="experience" className='hero-body'>
            <div className="container">
                <div className="columns box-hover">
                    <div className='column is-one-quarter text-left'>
                        <span className='date grey'>
                            2020 - Present
                        </span>
                    </div>
                    <div className='column is-three-quarters pt-0'>
                        <p className='white text-left' style={{paddingTop:'0', fontSize:'20px'}}><a href="https://www.digitalmarketingcompany.com/" target="_blank" className='white'>Twelve Three Media <i className="fa-solid fa-arrow-up-right-from-square white" style={{fontSize: '14px', marginLeft: '5px'}}></i></a></p>
                        <p className='white text-left pt-0'>Lead Front-End Developer</p>
                        <p className='white text-left lighter'>
                        As a Lead Front-End Developer, I spearhead website development, crafting themes, and implementing dynamic components with a mobile-first design approach. I collaborate closely with product managers and designers, optimize site speed, and write efficient code to ensure high-performance applications and seamless integration of client e-commerce products and data.</p>
                        <ul className='tools text-left'>
                            <li>HTML/CSS/Sass</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>PHP</li>
                            <li>GitHub</li>
                            <li>Stripe</li>
                            <li>CMS</li>
                        </ul>
                    </div>
                </div>
                <div className="columns box-hover">
                    <div className='column is-one-quarter text-left'>
                        <span className='date grey'>
                            2019 - 2020
                        </span>
                    </div>
                    <div className='column is-three-quarters pt-0'>
                        <p className='white text-left' style={{paddingTop:'0', fontSize:'20px'}}><a href="https://mjbizdaily.com/" target="_blank" className='white'>MJBiz Daily <i className="fa-solid fa-arrow-up-right-from-square white" style={{fontSize: '14px', marginLeft: '5px'}}></i></a></p>
                        <p className='white text-left pt-0'>Front-End Developer</p>
                        <p className='white text-left lighter'>Created clean and thoughtful designs for various websites and online environments, ensuring a seamless and consistent user experience. I strategically analyzed customer journeys within gated subscription-based websites, collaborated with cross-functional teams, and incorporated modern technologies like Sass/React to enhance site engagement and drive product improvement.</p>
                        <ul className='tools text-left'>
                            <li>HTML/CSS/Sass</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>PHP</li>
                            <li>GitHub</li>
                            <li>CMS</li>
                        </ul>
                    </div>
                </div>
                <div className="columns box-hover">
                    <div className='column is-one-quarter text-left'>
                        <span className='date grey'>
                            2017 - 2019
                        </span>
                    </div>
                    <div className='column is-three-quarters pt-0'>
                        <p className='white text-left' style={{paddingTop:'0', fontSize:'20px'}}><a href="https://www.cision.com/" target="_blank" className='white'>Cision <i className="fa-solid fa-arrow-up-right-from-square white" style={{fontSize: '14px', marginLeft: '5px'}}></i></a></p>
                        <p className='white text-left pt-0'>Front-End Developer</p>
                        <p className='white text-left lighter'>Responsible for developing multiple client websites, meticulously tailored to unique brand identities and business needs, ensuring high-quality AA compliant and responsive user experiences. By building reusable components and in-house templates, I optimized development processes for greater efficiency.</p>
                        <ul className='tools text-left'>
                            <li>HTML/CSS/Sass</li>
                            <li>Javascript</li>
                            <li>jQuery</li>
                            <li>React</li>
                            <li>PHP</li>
                            <li>CMS</li>
                        </ul>
                    </div>
                </div>
                <div className="columns box-hover">
                    <div className='column is-one-quarter text-left'>
                        <span className='date grey'>
                            2016 - 2017
                        </span>
                    </div>
                    <div className='column is-three-quarters pt-0'>
                        <p className='white text-left' style={{paddingTop:'0', fontSize:'20px'}}><a href="https://fineartprinting.la/" target="_blank" className='white'>Church of Merch <i className="fa-solid fa-arrow-up-right-from-square white" style={{fontSize: '14px', marginLeft: '5px'}}></i></a></p>
                        <p className='white text-left pt-0'>Developer</p>
                        <p className='white text-left lighter'>Created captivating and responsive e-commerce sites, tailored to diverse clients' requirements. Developed reusable code and templates that enhance front-end performance. Proactively managed established codebases and explored innovative frameworks to continually improve and elevate existing sites.</p>
                        <ul className='tools text-left'>
                            <li>HTML/CSS</li>
                            <li>Javascript</li>
                            <li>jQuery</li>
                            <li>Ship Station</li>
                        </ul>
                    </div>
                </div>
                <div className="columns">
                    <div className='column is-one-quarter text-left'>
                        <a className="white" target="_blank" href="https://drive.google.com/file/d/1POPlcDZJddOHGBcukxBdBnaoeMbM_67G/view?usp=sharing">View Full Resume <i className="fa-solid fa-arrow-up-right-from-square white" style={{fontSize: '14px', marginLeft: '5px'}}></i></a> 
                    </div>
                    <div className='column is-three-quarters'></div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
