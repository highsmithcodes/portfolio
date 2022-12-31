import React from 'react';
import '../../css/main.css';

const Contact: React.FC = () => {
    return (
        <div id="contact">
            <div className="container">
                <div className="columns is-mobile">
                    <div className="column is-full">
                        <h2>Got a project in mind? I'd love to hear about it!</h2>
                        <a className="button pink" href="mailto:ezrahighsmith@gmail.com">Let's Connect!</a>
                    </div>
                </div>
            </div>
            <div className="copyright">Designed & Built by Ezra Highsmith</div>
        </div>
    );
}

export default Contact;