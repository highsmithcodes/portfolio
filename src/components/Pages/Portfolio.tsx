import React from 'react';
import '../../css/main.css';
import Gallery from './Gallery';

const Portfolio: React.FC = () => {
    return (
        <div className="hero-body" id="portfolio">
            <div className="container">
                <div className="columns is-mobile">
                    <div className="column is-three-quarters">
                        <Gallery />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;