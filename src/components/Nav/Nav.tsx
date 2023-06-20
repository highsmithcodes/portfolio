import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Header from '../Pages/Header';
import Portfolio from '../Pages/Portfolio';
import About from '../Pages/About';
import logo from '../../img/highsmith-logo-white.png';

const routes = [
    { path: '/', name: 'Home', Component: Header, class: 'house' },
    { path: '/showcase', name: 'Showcase', Component: Portfolio, class: 'gallery' }
]

const Menu: React.FC = (props) => {
    const[openMenu, toggleOpenMenu] = useState(false);

    return (
        <Router basename="/portfolio" >
            <>
                <nav role="navigation" aria-label="main navigation">
                    <div className="nav-container">
                        <div className="navbar-brand">
                            <a className="navbar-item white light" href="#">
                                <img src={logo}></img>
                            </a>
                        </div>
                        <div className="desktop-nav">
                            <ul className="menu">
                                <li className="navbar-item"><a href="#home">Home</a></li>
                                {/* <li className="navbar-item"><a href="#about">About</a></li> */}
                                <li className="navbar-item"><a href="#about">About</a></li>
                                <li className="navbar-item"><a href="#featured">Portfolio</a></li>
                                <li className="navbar-item"><a href="#blog">Blog</a></li>
                            </ul>
                        </div>
      

                        <div className="mobile-nav" onClick={() => {
                                toggleOpenMenu(true);
                            }}>
                            <div className="navbar-brand">
                                <i className="fas fa-bars"></i>
                            </div>
                            <div className="navbar-menu" id="mobileNav">
                             <i className="fas fa-times"></i>
                                <ul className="menu">
                                <li><a href="#home">Home</a></li>
                                {/* <li><a href="#about">About</a></li> */}
                                <li><a href="#about">About</a></li>
                                <li><a href="#featured">Portfolio</a></li>
                                <li><a href="#blog">Blog</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <section>
                    {routes.map(({ path, Component }) => (
                        <Route key={path} exact path={path}>
                            {({ match }) => (
                                <CSSTransition
                                    in={match != null}
                                    timeout={300}
                                    classNames="page"
                                    unmountOnExit
                                >
                                    <div className="page">
                                        <Component />
                                    </div>
                                </CSSTransition>
                            )}
                        </Route>
                    ))}
                </section>
                <footer>
                    <div className="copyright">© {(new Date().getFullYear())} Highsmith Codes. All rights reserved.</div>
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
        </Router >

    );
}

export default Menu;
