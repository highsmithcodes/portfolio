import React, { useEffect } from 'react';
import '../../css/main.css';
import headshot from '../../img/highsmith-headshot.png';
import GithubCalendar from '../Functions/GithubCalendar';

const About: React.FC = () => {

    return (
        <div className="hero-body" id="about">
            <div className="container">
                <div  style={{ display: 'flex', flexDirection: 'column',justifyContent : 'start', alignItems: 'start', textAlign: 'left' }}>
                        <div style={{ display: 'flex', justifyContent : 'center', alignItems: 'start', flexDirection: 'column', textAlign: 'left' }}>
                        <h1 className='white'>Veronica Highsmith<br />
                            <span>Software Engineer, Front-End</span>
                        </h1>
                        <div style={{ marginTop: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <ul className="contact" style={{ display: 'flex', justifyContent : 'center', alignItems: 'start', flexDirection: 'row' }}>
                                <li><a href="https://github.com/highsmithcodes" target="_blank"><i className="fab fa-github"></i></a></li>
                                <li><a href="mailto: veehighsmith@gmail.com" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/veronica-highsmith-07a04787/" target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
                                
                            </ul>
                        </div>
                        </div>
                        
                        <p className='light white'>Hey! I'm a passionate Front-End Engineer with over <span style={{color:"#fff", fontWeight: 'bold'}}>eight 
                        years</span> of experience, specializing in creating exceptional web and mobile experiences.</p>
                        <p className='light white'>
                        I enjoy crafting clean and intuitive user interfaces with modern front-end frameworks while also employing my skills in database management, API integration, performance optimization and testing.

                        Explore my portfolio to learn more about my skills, expertise, and the projects 
                        that showcase my passion for quality front-end development.</p>

                        <ul className="stack" style={{ display: 'flex', flexDirection: 'row', justifyContent:'start'}}>
                            <li><i className="fa-brands fa-js"></i></li>
                            <li><i className="fab fa-react"></i></li>
                            <li><i className="fab fa-sass"></i></li>
                            <li><i className="fa-solid fa-database"></i></li>                              
                            <li><i className="fab fa-node"></i></li>
                           
                            <li><i className="fa-brands fa-git-alt"></i></li>
                            <li><i className="fab fa-shopify"></i></li>
                            <li><i className="fab fa-wordpress"></i></li>
                            <li><i className="fa-brands fa-aws"></i></li>
                            <li><i className="fa-brands fa-php"></i></li>
                            <li><i className="fa-brands fa-python"></i></li>
                                                    </ul>
                        {/* <a href="https://github.com/highsmithcodes" target="_blank">
                            <GithubCalendar/>
                        </a> */}
                </div>                                
            </div>
        </div>
    );
}

export default About;
