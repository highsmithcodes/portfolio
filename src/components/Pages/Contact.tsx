import React from 'react';
import '../../css/main.css';
import Posts from '../Functions/BlogPosts';

const Contact: React.FC = () => {
    return (
        <>
            <Posts/>
            {/* <div id="contact">
                <div className="container">
                    <div className="columns is-mobile">
                        <div className="column is-three-quarters text-center">
                            <h2 className='text-center'>Contact me:</h2>
                            <ul className="contact text-center">
                                <li>
                                    <a href="https://github.com/highsmithcodes" target="_blank" className="d-flex-row">
                                        <i className="fab fa-github"></i>
                                        <div className="lighter">Github</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto: ezrahighsmith@gmail.com" target="_blank" className="d-flex-row">
                                        <i className="fa-solid fa-envelope"></i>
                                        <div className="lighter">Email</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/veronica-highsmith-07a04787/" target="_blank" className="d-flex-row">
                                        <i className="fa-brands fa-linkedin"></i>
                                        <div className="lighter">LinkedIn</div>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default Contact;