import React from 'react';
import '../../css/main.css';
import basement_brew from '../../img/basement-brew-iphone.png';

const Featured: React.FC = () => {
    return (
        <div id="featured">
            <div className="container">
                
                <div className="columns is-mobile">
                    <div className="column is-three-quarters">
                        <h2 className="border-left">Side Projects</h2>
                        <p>I'm almost always working on a side projects.</p>
                        <div className="card columns">
                            
                            <div className="card-description column is-full has-text-left">
                                <div className="featured-item labels">
                                    <p>Title</p>
                                    <p>Description</p>
                                    <p>Git Repo</p>
                                    <p>Languages</p>
                                </div>
                                <div className="featured-item">
                                    <div className="card-title">Basement Brew</div>
                                    <div className="card-subtitle">Beer Brewing Social Network</div>
                                    <div className="card-repository"><a href="#" target="_blank"><i className="fab fa-github"></i></a></div>
                                    <div className="card-languages">Typescript | React | Firebase</div>
                                </div>
                                <div className="featured-item">
                                    <div className="card-title">Basement Brew</div>
                                    <div className="card-subtitle">A social network for home brewers</div>
                                    <div className="card-repository"><a href="#" target="_blank"><i className="fab fa-github"></i></a></div>
                                    <div className="card-languages">Typescript | React | Firebase</div>
                                </div>
                                <div className="featured-item">
                                    <div className="card-title">Basement Brew</div>
                                    <div className="card-subtitle">A social network for home brewers</div>
                                    <div className="card-repository"><a href="#" target="_blank"><i className="fab fa-github"></i></a></div>
                                    <div className="card-languages">Typescript | React | Firebase</div>
                                </div>
                                <div className="featured-item">
                                    <div className="card-title">Basement Brew</div>
                                    <div className="card-subtitle">A social network for home brewers</div>
                                    <div className="card-repository"><a href="#" target="_blank"><i className="fab fa-github"></i></a></div>
                                    <div className="card-languages">Typescript | React | Firebase</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured;
