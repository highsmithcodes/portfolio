import React, { useState } from 'react';
import '../../css/main.css';
import doge from '../../img/doge.png';

const Personal: React.FC = () => {

    return (
        <div className="content about">
            <h2>Who am I?</h2>
            <p>I'm 25 years old currently listening to Nina Simone as I write this bio. I hail from everyones favorite place to hate - California. I spend most of my free time exploring the great city of Austin, visiting my niece in San Antonio, and working on my passion projects at coffee shops. I have a beautiful wife, some sisters and my own personal meme as a pet ( <img src={doge}></img> ). I have a passion for:</p>
            <ul>
                <li>Creating <a href="https://soundcloud.com/bridebrides" target="blank">music</a></li>
                <li>Watching silent films or claymation monster movies</li>
                <li>Collaging postcards of old graphic novels</li>
                <li>Juggling oranges</li>
                <li>Tending to my everygrowing plant collection</li>
            </ul>
        </div>
    );
}

export default Personal;
