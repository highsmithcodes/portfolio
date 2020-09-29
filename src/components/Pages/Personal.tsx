import React, { useState } from 'react';
import '../../css/main.css';
import doge from '../../img/doge.png';

const Personal: React.FC = () => {

    return (
        <div className="content about">
            <h2>Who am I?</h2>
            <p>Nice to meet you, my name is Ezra, I am 26 years old and I've been in tech for 6 years. When I'm not on my computer I spend most of my free time playing video games or re-reading some of my favorite graphic novels</p>
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
