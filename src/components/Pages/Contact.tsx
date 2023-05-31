import React from 'react';
import '../../css/main.css';

const Contact: React.FC = () => {
    return (
        <div id="contact">
            <div className="container">
                <div className="columns is-mobile">
                    <div className="column is-three-quarters text-center">
                        <h2 className='text-center'>Contact me:</h2>
                        <ul className="contact text-center">
                            <li><a href="https://github.com/highsmithcodes" target="_blank"><i className="fab fa-github"></i></a></li>
                            {/* <li><a href="https://codepen.io/highsmithcodes" target="_blank"><i className="fas fa-code"></i></a></li> */}
                            <li><a href="mailto: ezrahighsmith@gmail.com" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/veronica-highsmith-07a04787/" target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;