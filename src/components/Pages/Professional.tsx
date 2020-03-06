import React, { useState } from 'react';
import '../../css/main.css';

const Professional: React.FC = () => {

    return (
        <div className="content about">
            <h2>What have I been doing in Tech?</h2>
            <p>As a self taught Front End Developer, I've been fortunate enough to work at companies just starting out to companies that have an established consumer base. Creating ecommerce sites for well known music artists, to compelling investor relations sites. From custom builds to redesigns and full restructuring of inherited code. Working in both small development teams and large. Developing sites while project managing to building scalable/mobile friendly sites.</p>
            {/* <p>In my career I strive to find work that puts focus on accessibility and tech for social good. With a passion for WCAG compliance/mobile first/TDD sites - I have obtained the skills listed below.</p> */}
            <ul>
                <li>Javascript/Typescript/React/jQuery/PHP/VueJS</li>
                <li>Jest/Mocha</li>
                <li>Foundation/Bulma/Bootstrap</li>
                <li>Sass/Less</li>
                <li>Firebase/AWS</li>
            </ul>
        </div>
    );
}

export default Professional;
