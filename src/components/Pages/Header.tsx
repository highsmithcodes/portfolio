import React from 'react';
import '../../css/main.css';
import Portfolio from './Portfolio';
import About from './About';
import Featured from './Featured';
import Contact from './Contact';

const Header: React.FC = () => {
    return (
        <div className="hero-body" id="home">
            <div className="container landing-container floating">
                <div className="columns is-mobile">
                    <div className="column is-three-quarters landing">
                        <div style={{ display: 'flex', flexDirection : 'row' }} className='landing-title'>
                            <div style={{ display: 'flex', justifyContent : 'center', alignItems: 'start', flexDirection: 'column' }}>
                            <h1>Front-End | Full Stack Developer <br />
                                <span>Ezra Highsmith</span>
                            </h1>
                            <p>Passionate developer with 7 years of professional industry experience. Likes board games, house plants, kayaking and beer.</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent : 'center', alignItems: 'center' }}>
                                <img className="headshot" style={{ height: 'auto', width : '250px' }} src='https://github.com/highsmithcodes/portfolio/assets/17016293/7edaa61c-808b-4155-b934-c33d9fba0fa8' alt="Trees" height="120" />
                            </div>
                        </div>
                        {/* <a className="button pink" href="mailto:ezrahighsmith@gmail.com">Let's Connect</a> */}
                        <ul className="contact">
                            <li><a href="https://github.com/highsmithcodes" target="_blank"><i className="fab fa-github"></i></a></li>
                            {/* <li><a href="https://codepen.io/highsmithcodes" target="_blank"><i className="fas fa-code"></i></a></li> */}
                            <li><a href="mailto: ezrahighsmith@gmail.com" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/veronica-highsmith-07a04787/" target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
                        </ul>
                        <ul className="stack">
                            <li className='black'>Experience with:</li>
                            <li><i className="fa-brands fa-js"></i></li>
                            <li><i className="fab fa-react"></i></li>
                            {/* <li><a href="https://codepen.io/highsmithcodes" target="_blank"><i className="fas fa-code"></i></a></li> */}
                            <li><i className="fab fa-sass"></i></li>
                            <li><i className="fab fa-node"></i></li>
                            <li><i className="fa-brands fa-aws"></i></li>
                            <li><i className="fa-brands fa-npm"></i></li>
                            <li><i className="fa-brands fa-git-alt"></i></li>
                            <li><i className="fa-solid fa-database"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <About /> */}
            <Featured />
            {/* <Portfolio /> */}
            <Contact />
        </div>
        
    );
}

export default Header;
