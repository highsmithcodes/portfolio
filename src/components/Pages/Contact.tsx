import React from 'react';
import '../../css/main.css';

const Contact: React.FC = () => {
    return (
        <div id="contact">
            <div className="container">
                <div className="columns is-mobile">
                    <div className="column is-full">
                        <h2>Got a project in mind?</h2>
                        <a className="button pink" href="mailto:ezrahighsmith@gmail.com">Let's Connect!</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;