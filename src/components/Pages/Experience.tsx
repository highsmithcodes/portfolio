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
                        <span className='date white'>
                            2020 - Present
                        </span>
                    </div>
                    <div className='column is-three-quarters'>
                        <p className='white text-left' style={{paddingTop:'0', fontSize:'20px'}}><a href="https://www.digitalmarketingcompany.com/" target="_blank" className='white'>Twelve Three Media <i className="fa-solid fa-arrow-up-right-from-square white" style={{fontSize: '14px', marginLeft: '5px'}}></i></a></p>
                        <p className='white text-left pt-0'>Lead Front-End Developer</p>
                        <p className='white text-left lighter'>As a leader in end-to-end development, scalability, testing, and design, I spearhead the creation of robust and user-friendly mobile and web applications. By incorporating new user-facing features, leveraging innovative design principles, and effectively utilizing data sets, I enhance the overall user experience. Focusing on creating engaging and interactive user interfaces that make data accessible and meaningful to users through thoughtful design, manipulation, and presentation.</p>
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
                        <span className='date white'>
                            2019 - 2020
                        </span>
                    </div>
                    <div className='column is-three-quarters'>
                        <p className='white text-left' style={{paddingTop:'0', fontSize:'20px'}}><a href="https://mjbizdaily.com/" target="_blank" className='white'>MJBiz Daily <i className="fa-solid fa-arrow-up-right-from-square white" style={{fontSize: '14px', marginLeft: '5px'}}></i></a></p>
                        <p className='white text-left pt-0'>Front-End Developer</p>
                        <p className='white text-left lighter'>Developed clean and thoughtful designs on multiple company websites and online/mobile environments, ensuring a positive
customer experience and consistent, strong, and unified online initiatives.</p>
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
                        <span className='date white'>
                            2017 - 2019
                        </span>
                    </div>
                    <div className='column is-three-quarters'>
                        <p className='white text-left' style={{paddingTop:'0', fontSize:'20px'}}><a href="https://www.cision.com/" target="_blank" className='white'>Cision <i className="fa-solid fa-arrow-up-right-from-square white" style={{fontSize: '14px', marginLeft: '5px'}}></i></a></p>
                        <p className='white text-left pt-0'>Front-End Developer</p>
                        <p className='white text-left lighter'>Responsible for developing, testing, and designing robust and user-friendly AA compliant mobile and web applications, ensuring seamless functionality and an optimal user experience across multiple platforms.</p>
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
                        <span className='date white'>
                            2016 - 2017
                        </span>
                    </div>
                    <div className='column is-three-quarters'>
                        <p className='white text-left' style={{paddingTop:'0', fontSize:'20px'}}><a href="https://fineartprinting.la/" target="_blank" className='white'>Church of Merch <i className="fa-solid fa-arrow-up-right-from-square white" style={{fontSize: '14px', marginLeft: '5px'}}></i></a></p>
                        <p className='white text-left pt-0'>Developer</p>
                        <p className='white text-left lighter'>Designed and developed responsive e-commerce sites for clients within a custom CMS platform</p>
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
                        <a className="white" target="_blank" href="https://drive.google.com/file/d/1_rjuh6OFNdgEmDztp9oAiGznmZk5qhs3/view?usp=sharing">View Full Resume <i className="fa-solid fa-arrow-up-right-from-square white" style={{fontSize: '14px', marginLeft: '5px'}}></i></a> 
                    </div>
                    <div className='column is-three-quarters'></div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
