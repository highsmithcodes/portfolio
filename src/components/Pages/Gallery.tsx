import React from 'react';
import { Transition } from "react-transition-group";
import '../../css/main.css';
import image_5 from '../../img/ibm.png';
import image_2 from '../../img/chipotle.png';
import image_3 from '../../img/skrillex.png';
import image_1 from '../../img/dish.png';
import image_4 from '../../img/lifetime.png';
import image_6 from '../../img/purina.png';
import image_7 from '../../img/soda.png';
import image_8 from '../../img/cision.png';


const Gallery: React.FC = () => {

    return (
        <div className="container" id="gallery">
            <div className="columns is-multiline is-mobile">
                <div className="column">
                    <div className="card">
                        <div className="card-image">

                            <img src={image_5} alt="" />

                        </div>
                        <div className="card-description">
                            <div>
                                <text><a href="https://www.ibm.com/investor/">IBM</a></text>
                                <ul>
                                    <li>PHP</li>
                                    <li>React</li>
                                    <li>JQuery</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <div className="card-image">

                            <img src={image_3} alt="Placeholder image" />

                        </div>
                        <div className="card-description">
                            <div>
                                <text><a href="https://skrillex.com/collections/shop">Skrillex</a></text>
                                <ul>
                                    <li>React</li>
                                    <li>Drupal</li>
                                    <li>PHP</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <div className="card-image">

                            <img src={image_2} alt="Placeholder image" />

                        </div>
                        <div className="card-description">
                            <div>
                                <text><a href="https://ir.chipotle.com/">Chipotle</a></text>
                                <ul>
                                    <li>PHP</li>
                                    <li>Javascript</li>
                                    <li>JQuery</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <div className="card-image">

                            <img src={image_4} alt="Placeholder image" />

                        </div>
                        <div className="card-description">
                            <div>
                                <text><a href="http://news.lifetime.life/">Lifetime Fitness</a></text>
                                <ul>
                                    <li>PHP</li>
                                    <li>Javascript</li>
                                    <li>JQuery</li>
                                    <li>Sass</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="columns is-multiline is-mobile">
                <div className="column">
                    <div className="card">
                        <div className="card-image">

                            <img src={image_1} alt="Placeholder image" />

                        </div>
                        <div className="card-description">
                            <div>
                                <text><a href="http://about.dish.com/">Dish</a></text>
                                <ul>
                                    <li>PHP</li>
                                    <li>Javascript</li>
                                    <li>jQuery</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <div className="card-image">

                            <img src={image_6} alt="Placeholder image" />

                        </div>
                        <div className="card-description">
                            <div>
                                <text><a href="http://newscenter.purina.com/">Purina</a></text>
                                <ul>
                                    <li>PHP</li>
                                    <li>Javascript</li>
                                    <li>JQuery</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <div className="card-image">

                            <img src={image_7} alt="Placeholder image" />

                        </div>
                        <div className="card-description">
                            <div>
                                <text><a href="https://corp.sodastream.com/">Soda Stream</a></text>
                                <ul>
                                    <li>React</li>
                                    <li>PHP</li>
                                    <li>JQuery</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <div className="card-image">

                            <img src={image_8} alt="Placeholder image" />

                        </div>
                        <div className="card-description">
                            <div>
                                <text><a href="https://www.cision.com/us/">Cision</a></text>
                                <ul>
                                    <li>React</li>
                                    <li>Sass</li>
                                    <li>Laravel</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
