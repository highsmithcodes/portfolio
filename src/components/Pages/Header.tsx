import React from 'react';
import '../../css/main.css';
import Portfolio from './Portfolio';
import About from './About';
import Featured from './Featured';
import Contact from './Contact';
import CurrentSong from '../Functions/Spotify';

const Header: React.FC = () => {
    
    return (
        <>
        <div className="hero-body" id="home">
            <div className="container landing-container floating relative">
                <div className="columns is-mobile">
                    <div className="column is-three-quarters landing">
                        <div style={{ display: 'flex', flexDirection : 'row', justifyContent: 'space-between', alignItems: 'start' }} className='landing-title'>
                            <div style={{ display: 'flex', justifyContent : 'center', alignItems: 'start', flexDirection: 'column' }}>
                            <h1>Ezra Highsmith<br />
                                <span>Front-End & Full Stack Developer</span>
                            </h1>
                            <div style={{ marginTop: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'row' }}>
                            <a className="button big" target="_blank" href="https://drive.google.com/file/d/1IZ8k9GeTV0P5oCUoLoZK3Gz0lcTG-2Ob/view?usp=drive_link">Resume</a> 
                        </div>
                        {/* <a className="button pink" href="mailto:ezrahighsmith@gmail.com">Let's Connect</a> */}
                        <ul className="contact">
                            <li><a href="https://github.com/highsmithcodes" target="_blank"><i className="fab fa-github"></i></a></li>
                            {/* <li><a href="https://codepen.io/highsmithcodes" target="_blank"><i className="fas fa-code"></i></a></li> */}
                            <li><a href="mailto: ezrahighsmith@gmail.com" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/veronica-highsmith-07a04787/" target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
                            
                        </ul>
                            </div>
                            <div style={{ display: 'flex', justifyContent : 'center', alignItems: 'center' }}>
                                <img className="headshot" style={{ height: 'auto', width : '250px' }} src='https://github.com/highsmithcodes/portfolio/assets/17016293/7edaa61c-808b-4155-b934-c33d9fba0fa8' alt="Trees" height="120" />
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
            <About />
            <Featured />
            {/* <Portfolio /> */}
            <Contact />
        </div>
        </>
    );
}

export default Header;
