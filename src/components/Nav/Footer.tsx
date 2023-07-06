import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Header from '../Pages/Header';
import Portfolio from '../Pages/Portfolio';
import About from '../Pages/About';
import logo from '../../img/highsmith-logo-white.png';


const Footer: React.FC = (props) => {
  

  return (
      <>
        <footer>
          <div className="copyright">© {(new Date().getFullYear())} Highsmith Codes. All rights reserved.
          </div>
          <ul className="contact text-center">
            <li>
              <a href="https://github.com/highsmithcodes" target="_blank" className="d-flex-row">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="mailto: ezrahighsmith@gmail.com" target="_blank" className="d-flex-row">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/veronica-highsmith-07a04787/" target="_blank" className="d-flex-row">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </footer>
      </>
  );
}

export default Footer;
