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
                        <h1>Ezra Highsmith <br />
                            <span>Front-End Developer</span>
                        </h1>
                        {/* <a className="button pink" href="mailto:ezrahighsmith@gmail.com">Let's Connect</a> */}
                        <ul className="contact">
                            <li><a href="https://github.com/highsmithcodes" target="_blank"><i className="fab fa-github"></i></a></li>
                            <li><a href="https://codepen.io/highsmithcodes" target="_blank"><i className="fas fa-code"></i></a></li>
                            <li><a href="mailto: ezrahighsmith@gmail.com" target="_blank"><i className="fas fa-at"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <About />
            <Portfolio />
            <Featured />
            <Contact />
        </div>
        
    );
}

export default Header;
