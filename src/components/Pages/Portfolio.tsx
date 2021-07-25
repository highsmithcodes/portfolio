import React from 'react';
import '../../css/main.css';
import Work from './Work';

const Portfolio: React.FC = () => {
    return (
        <div id="portfolio">
            <div className="container">
                <div className="columns is-mobile">
                    <div className="column is-three-quarters">
                        <h2>Some Sites I've Made</h2>
                        <Work />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;