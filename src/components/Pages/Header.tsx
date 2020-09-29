import React from 'react';
import '../../css/main.css';
import hand from '../../img/hand.png';

const Header: React.FC = () => {
    return (
        <div className="hero-body" id="home">
            <div className="container">
                <div className="columns is-mobile">
                    <div className="column is-two-thirds landing">
                        <h1>Hey (<img className="hand" src={hand}></img>) <br />
                            <span>I'm Ezra,</span><br /> I develop websites and web apps.
                        </h1>
                        <p> Full Stack Developer </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
