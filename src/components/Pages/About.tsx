import React from 'react';
import '../../css/main.css';
import headshot from '../../img/highsmith-headshot.png';

const About: React.FC = () => {
    return (
        <div className="hero-body" id="about">
            <div className="container">
                <div className="columns is-mobile">
                    <div className="column is-three-quarters">
                        <h2 className="border-left">About Me</h2>
                        <div className="columns">
                            <div className="column is-half has-text-left align-middle">
                                <p>After teaching myself the very basics of web development in high school, 
                                    I've spent the last 7 years working as both a freelance developer and a full time employee for various companies. 
                                    I'm a self motivated and naturally curious developer, I love what I do and find great joy in furthering my development skills. I pride myself on creating clean, scalable and responsive code.
                                </p>
                                <br />
                                <p>Here are a few technologies I'm usually working with:</p>
                                <ul className="two-column">
                                    <li><i className="fas fa-caret-right"></i>Javascript</li>
                                    <li><i className="fas fa-caret-right"></i>React</li>
                                    <li><i className="fas fa-caret-right"></i>PHP</li>
                                    <li><i className="fas fa-caret-right"></i>Wordpress</li>
                                    <li><i className="fas fa-caret-right"></i>Node.js</li>
                                    <li><i className="fas fa-caret-right"></i>Sass/Less</li>
                                </ul>
                            </div>
                            <div className="column is-half">
                                <div id="headshot">
                                    <img src={headshot} alt="highsmith headshot"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
