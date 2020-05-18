import React, { useState } from 'react';
import '../../css/main.css';
import doge from '../../img/doge.png';

const Personal: React.FC = () => {

    return (
        <div className="content about">
            <h2>Who am I?</h2>
            <p>I'm 25 years old, currently listening to Nina Simone as I write this bio. I spend most of my free time learning new tech skills, spending quality time with family, and practicing guitar.</p>
            <ul>
                <li>Creating <a href="https://soundcloud.com/bridebrides" target="blank">music</a></li>
                <li>Watching claymation movies</li>
                <li>Knitting</li>
                <li>Juggling oranges</li>
                <li>Tending to my everygrowing plant collection</li>
            </ul>
        </div>
    );
}

export default Personal;
