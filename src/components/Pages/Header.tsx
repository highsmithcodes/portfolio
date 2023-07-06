import React from 'react';
import '../../css/main.css';
import Portfolio from './Portfolio';
import About from './About';
import Featured from './Featured';
import Contact from './Contact';
import CurrentSong from '../Functions/Spotify';
import GithubCalendar from '../Functions/GithubCalendar';
import Menu from '../Nav/Nav';

const Header: React.FC = () => {
    
    return (
        <>
        {/* <Menu /> */}

        <div className="hero-body" id="home">
            <div className="container landing-container floating relative">
                <div className="columns is-mobile">
                    <div className="column is-three-quarters landing">
                        <a href="https://github.com/highsmithcodes" target="_blank">
                            <GithubCalendar/>
                        </a>
                    </div>
                </div>
            </div>

        </div>
        </>
    );
}

export default Header;
