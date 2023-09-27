import React, { useEffect } from 'react';
import '../../css/main.css';
import headshot from '../../img/highsmith-headshot.png';
import GithubCalendar from '../Functions/GithubCalendar';

const Experience: React.FC = () => {

    return (
        <div id="experience" className='hero-body'>
            <div className="container">
                <div className="columns box-hover">
                    <div className='column is-full pt-0'>
                        <p className='white text-left' style={{paddingTop:'0', fontSize:'20px'}}><a href="https://www.digitalmarketingcompany.com/" target="_blank" className='white'>Twelve Three Media <i className="fa-solid fa-arrow-up-right-from-square white" style={{fontSize: '14px', marginLeft: '5px'}}></i></a></p>
                        <p className='white text-left pt-0'>Lead Front-End Developer</p>
                        <div className='date grey text-left'>
                            2020 - Present
                        </div>
                        <p className='white text-left lighter'>
                        Spearhead the development of websites, building themes, implementing dynamic/customizable components, incorporating new user-facing features and leverage a mobile-first design approach to enhance the overall user experience. Collaborate closely with product managers, designers, and operations teams to create intuitive user experiences, optimizing
site speed scores, and reduce page abandonment rates.</p>
                        <ul className='tools text-left'>
                            <li>HTML/CSS/Sass</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>PHP</li>
                            <li>GitHub</li>
                            <li>Stripe</li>
                            <li>Shopify</li>
                            <li>CMS</li>
                            <li>MySQL</li>
                        </ul>
                    </div>
                </div>
                <div className="columns box-hover">
                    <div className='column is-full pt-0'>
                        <p className='white text-left' style={{paddingTop:'0', fontSize:'20px'}}><a href="https://mjbizdaily.com/" target="_blank" className='white'>MJBiz Daily <i className="fa-solid fa-arrow-up-right-from-square white" style={{fontSize: '14px', marginLeft: '5px'}}></i></a></p>
                        <p className='white text-left pt-0'>Front-End Developer</p>
                        <div className='date grey text-left'>
                            2019 - 2020
                        </div>
                        <p className='white text-left lighter'>Created, modified, and maintained mutliple responsive websites. Played a key role in the creation, delivery, maintenance, and evolution of digital experiences. I managed and maintained databases, hosting, and security, integrated e-commerce platforms with various 3rd party systems, and built full e-commerce sites from start to finish. I also introduced new front-end technologies and participated in daily scrum meetings as part of an agile sprint cycle.</p>
                        <ul className='tools text-left'>
                            <li>HTML/CSS/Sass</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>PHP</li>
                            <li>GitHub</li>
                            <li>CMS</li>
                            <li>D3.js</li>
                            <li>MySQL</li>
                            <li>RESTful APIs</li>
                            <li>Jest</li>
                        </ul>
                    </div>
                </div>
                <div className="columns box-hover">
                    <div className='column is-full pt-0'>
                        <p className='white text-left' style={{paddingTop:'0', fontSize:'20px'}}><a href="https://www.cision.com/" target="_blank" className='white'>Cision <i className="fa-solid fa-arrow-up-right-from-square white" style={{fontSize: '14px', marginLeft: '5px'}}></i></a></p>
                        <p className='white text-left pt-0'>Front-End Developer</p>
                        <div className='date grey text-left'>
                            2017 - 2019
                        </div>
                        <p className='white text-left lighter'>Responsible for developing multiple client websites, meticulously tailored to unique brand identities and business needs, ensuring high-quality AA compliant and responsive user experiences. By building reusable components and in-house templates, I optimized development processes for greater efficiency.</p>
                        <ul className='tools text-left'>
                            <li>HTML/CSS/Sass</li>
                            <li>Javascript</li>
                            <li>jQuery</li>
                            <li>React</li>
                            <li>PHP</li>
                            <li>CMS</li>
                            <li>D3.js</li>
                        </ul>
                    </div>
                </div>
                <div className="columns box-hover">
                    <div className='column is-full pt-0'>
                        <p className='white text-left' style={{paddingTop:'0', fontSize:'20px'}}><a href="https://fineartprinting.la/" target="_blank" className='white'>Church of Merch <i className="fa-solid fa-arrow-up-right-from-square white" style={{fontSize: '14px', marginLeft: '5px'}}></i></a></p>
                        <p className='white text-left pt-0'>Developer</p>
                        <div className='date grey text-left'>
                            2016 - 2017
                        </div>
                        <p className='white text-left lighter'>Created responsive e-commerce sites, tailored to diverse clients' requirements. Developed reusable code and templates that enhance front-end performance. Proactively managed established codebases and explored innovative frameworks to continually improve and elevate existing sites.</p>
                        <ul className='tools text-left'>
                            <li>HTML/CSS</li>
                            <li>Javascript</li>
                            <li>jQuery</li>
                            <li>Ship Station</li>
                        </ul>
                    </div>
                </div>
                <div className="columns">
                    <div className='column is-full text-left'>
                        <a className="white" target="_blank" href="https://drive.google.com/file/d/1iNeISAmUs8R17r8IviCojSHYG_aTRu1G/view?usp=sharing">View Full Resume <i className="fa-solid fa-arrow-up-right-from-square white" style={{fontSize: '14px', marginLeft: '5px'}}></i></a> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
