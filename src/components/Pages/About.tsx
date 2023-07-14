import React, { useEffect } from 'react';
import '../../css/main.css';
import headshot from '../../img/highsmith-headshot.png';
import GithubCalendar from '../Functions/GithubCalendar';

const About: React.FC = () => {

    return (
        <div className="hero-body" id="about">
            <div className="container">
                <div  style={{ display: 'flex', flexDirection: 'column',justifyContent : 'start', alignItems: 'start', textAlign: 'left' }}>
                        <p className='light white'>Hey! I'm an accomplished Front-End Developer with over <span style={{color:"#fff", fontWeight: 'bold'}}>seven 
                        years</span> of experience, specializing in creating exceptional web experiences. With a deep understanding of JavaScript, CSS, and HTML, I've successfully delivered numerous high-quality projects, ensuring exceptional outcomes every step of the way. 
                        </p>
                        <p className='light white'>My expertise lies in React and end-to-end product development, 
                        allowing me to bring innovative ideas to life. 

                        I'm passionate about developing clean and intuitive designs for user interfaces across various platforms and mobile environments, 
                        with a strong focus on delivering positive customer experiences. 

                        Explore my portfolio to discover my skills, expertise, and the projects 
                        that showcase my dedication to excellence in front-end development.</p>
                        <ul className="stack" style={{ display: 'flex', flexDirection: 'row', justifyContent:'start'}}>
                            <li><i className="fa-brands fa-js"></i></li>
                            <li><i className="fab fa-react"></i></li>
                            {/* <li><a href="https://codepen.io/highsmithcodes" target="_blank"><i className="fas fa-code"></i></a></li> */}
                            <li><i className="fab fa-sass"></i></li>
                            <li><i className="fab fa-node"></i></li>
                            <li><i className="fa-brands fa-aws"></i></li>
                            <li><i className="fa-brands fa-npm"></i></li>
                            <li><i className="fa-brands fa-python"></i></li>
                            <li><i className="fa-brands fa-git-alt"></i></li>
                            <li><i className="fa-solid fa-database"></i></li>                              
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
