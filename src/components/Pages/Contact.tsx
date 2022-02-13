import React from 'react';
import '../../css/main.css';

const Contact: React.FC = () => {
    return (
        <div id="contact">
            <div className="container">
                <div className="columns is-mobile">
                    <div className="column is-full">
                        <h2>Got a project in mind? I'd love to hear about it!</h2>
                        <a className="button pink" href="mailto:veehighsmith@gmail.com">Let's Connect!</a>
                    </div>
                </div>
            </div>
            <div className="copyright">Designed & Built by Veronica Highsmith</div>
            <div className="made-by-bulma"><a href="https://bulma.io"><img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="163" height="31"/></a></div>
        </div>
    );
}

export default Contact;