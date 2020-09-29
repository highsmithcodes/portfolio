import React, { useState } from 'react';
import '../../css/main.css';

const Professional: React.FC = () => {

    return (
        <div className="content about">
            <h2>What have I been doing in Tech?</h2>
            <p>I’m an full stack developer with significant experience in  React, Typescript, Angular, Vue and PHP. </p>
            {/* <p>In my career I strive to find work that puts focus on accessibility and tech for social good. With a passion for WCAG compliance/mobile first/TDD sites - I have obtained the skills listed below.</p> */}
            <ul>
                <li>Javascript/Typescript/React/jQuery/PHP/VueJS</li>
                <li>Jest/Mocha</li>
                <li>Foundation/Bulma/Bootstrap</li>
                <li>Web Accessibility</li>
                <li>Firebase/AWS</li>
            </ul>
        </div>
    );
}

export default Professional;
