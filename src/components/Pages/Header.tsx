import React from 'react';
import '../../css/main.css';
import Portfolio from './Portfolio';
import About from './About';
import Featured from './Featured';
import Contact from './Contact';

const Header: React.FC = () => {
    return (
        <div className="hero-body" id="home">
            <div className="container">
                <div className="columns is-mobile">
                    <div className="column is-four-fifths landing">
                        <h1>Ezra Highsmith <br />
                            <span>Front-End Developer & UI Designer</span>
                        </h1>
                        <p>I design and code clean, user-friendly websites.</p>
                        <a className="button pink" href="mailto:ezrahighsmith@gmail.com">Let's Connect</a>
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
