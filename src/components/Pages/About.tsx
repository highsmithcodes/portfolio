import React from 'react';
import '../../css/main.css';
import headshot from '../../img/highsmith-headshot.png';

const About: React.FC = () => {
    return (
        <div className="hero-body" id="about">
            <div className="container">
                <span className='top left'>1</span>
                <span className='top right'>7</span>
                <div className="columns is-mobile">
                    <div className="column is-three-quarters">
                        <h2 className="border-left">About Me</h2>
                        <div className="columns">
                            <div className="column is-full has-text-left align-middle">
                                <p>I started developing websites at the tail end of high school - it was intimidating at first but I'm grateful to my past self for sticking it through. I genuinely love being a developer, it challenges me to be a good problem solver, to stay up to date with documentation, to be a good collaborator and to manage stress.</p>
                                <br />
                                <p>These are the technologies I'm usually working with:</p>
                                <br />

                                <div className='measured'>
                                    <div id="htmlcss"></div> 
                                    <div id="javascript"></div> 
                                    <div  id="react"></div>
                                    <div  id="typescript"></div> 
                                    <div  id="php"></div> 
                                    <div  id="postgres"></div> 
                                </div>

                                <table>
                                    <tbody>
                                    <tr className='top'>
                                    <td>Focus</td>
                                    <td>Tools</td>
                                    </tr>
                                    <tr>
                                    <td>Front-End</td>
                                    <td>HTML, CSS, SASS, Flexbox, Javascript, React, Redux, jQuery, JSON</td>
                                    </tr>
                                    <tr>
                                    <td>Back-End</td>
                                    <td>Express, Node, Rest APIs, PHP, PostgreSQL</td>
                                    </tr>
                                    <tr>
                                    <td>DevOPS</td>
                                    <td> Git, Docker, AWS</td>
                                    </tr>

                                    </tbody>
                                    </table>
                                


                                {/* <ul className="two-column">
                                    <li><i className="fas fa-caret-right"></i>Javascript</li>
                                    <li><i className="fas fa-caret-right"></i>React</li>
                                    <li><i className="fas fa-caret-right"></i>PHP</li>
                                    <li><i className="fas fa-caret-right"></i>Wordpress</li>
                                    <li><i className="fas fa-caret-right"></i>Node.js</li>
                                    <li><i className="fas fa-caret-right"></i>Sass/Less</li>
                                </ul> */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
