import React from 'react';
import '../../css/main.css';
import basement_brew from '../../img/basement-brew-iphone.png';

const Featured: React.FC = () => {
    return (
        <div id="featured">
            <div className="container">
                <div className="columns is-mobile">
                    <div className="column is-three-quarters">
                        <h2 className="border-left">Featured Case Study</h2>
                        <div className="card columns">
                            
                            <div className="card-description column is-three-fifths  has-text-left">
                                <div>
                                    <div className="card-title">Basement Brew</div>
                                    <div className="card-subtitle">A social network for home brewers</div>
                                    <div className="card-content">
                                        Basement Brew is a passion project I've been building with Android SDK and React Native. It's a platform that helps connect passionate beer brewers that want to share new recipes and meet other like minded people.
                                        <br/>
                                        <br/>
                                        Coming soon...
                                    </div>
                                </div>
                            </div>
                            <div className="card-image column is-two-fifths">
                                    <div>
                                            <img src={basement_brew} alt="iphone image of basement brew" />
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
