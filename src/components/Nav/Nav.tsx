import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Header from '../Pages/Header';
import Portfolio from '../Pages/Portfolio';
import logo from '../../img/highsmith-logo-white.png';

const routes = [
    { path: '/', name: 'Home', Component: Header, class: 'house' },
    { path: '/showcase', name: 'Showcase', Component: Portfolio, class: 'gallery' },
]

const Menu: React.FC = (props) => {
    return (
        <Router basename="/portfolio" >
            <>
                <nav role="navigation" aria-label="main navigation">
                    <div className="nav-container">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="#">
                                <img src={logo} alt="site logo"></img>
                            </a>
                        </div>
                        <div className="desktop-nav">
                            <ul className="menu">
                                <li className="navbar-item"><a href="#home">Home</a></li>
                                <li className="navbar-item"><a href="#about">About</a></li>
                                <li className="navbar-item"><a href="#portfolio">Work</a></li>
                                <li className="navbar-item"><a href="#contact">Contact</a></li>
                            </ul>
                        </div>

                        <div className="mobile-nav">
                            <div className="navbar-brand">
                                <i className="fas fa-bars"></i>
                            </div>
                            <div className="navbar-menu" id="mobileNav">
                             <i className="fas fa-times"></i>
                                <ul className="menu">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#portfolio">Work</a></li>
                                <li><a href="#contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="fixed-nav">
                    <div className="navbar-menu">
                        <ul className="contact">
                            <li><a href="https://www.linkedin.com/in/veronica-highsmith-07a04787/" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="https://github.com/highsmithcodes" target="_blank"><i className="fab fa-github"></i></a></li>
                            <li><a href="https://codepen.io/highsmithcodes" target="_blank"><i className="fas fa-code"></i></a></li>
                            <li><a href="mailto: veehighsmith@gmail.com" target="_blank"><i className="fas fa-at"></i></a></li>
                        </ul>
                    </div>
                </div>
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
                    <h4>Contact Me</h4>
                    <ul className="contact">
                        <li><a href="https://www.linkedin.com/in/veronica-highsmith-07a04787/" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="https://github.com/highsmithcodes" target="_blank"><i className="fab fa-github"></i></a></li>
                        <li><a href="https://codepen.io/highsmithcodes" target="_blank"><i className="fas fa-code"></i></a></li>
                        <li><a href="mailto: veehighsmith@gmail.com" target="_blank"><i className="fas fa-at"></i></a></li>
                    </ul>
                </footer>
            </>
        </Router >

    );
}

export default Menu;
