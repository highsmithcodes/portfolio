import React, { useState } from 'react';
import '../../css/main.css';
import doge from '../../img/doge.png';

const Personal: React.FC = () => {

    return (
        <div className="content about">
            <h2>Who am I?</h2>
            <p>I'm 25 years old currently listening to Nina Simone as I write this bio. I hail from everyones favorite place to hate - California. My favorite thing to do is to learn.Overtime I've realized I can be somewhat of a soundboard for a lot of people in my life, but hey, it makes for great connection and perspective. So, let's get coffee or something sometime. I have a beautiful wife, some sisters, my own personal meme as a pet ( <img src={doge}></img> ). Oh, and I have passion for a bunch of stuff:</p>
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
