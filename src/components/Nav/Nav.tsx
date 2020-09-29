import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Header from '../Pages/Header';
import About from '../Pages/About';
import Portfolio from '../Pages/Portfolio';
import logo from '../../img/vee_logo.png';

const routes = [
    { path: '/', name: 'Home', Component: Header, class: 'house' },
    { path: '/about', name: 'About', Component: About, class: 'person' },
    { path: '/showcase', name: 'Showcase', Component: Portfolio, class: 'gallery' },
]

const Menu: React.FC = (props) => {
    return (
        <Router basename="/portfolio" >
            <>
                <nav role="navigation" aria-label="main navigation">
                    <div className="mobile-nav">
                        <div className="navbar-brand">
                            <img src={logo} alt="site logo"></img>
                            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="mobileNav">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>
                        <div className="navbar-menu" id="mobileNav">
                            <ul className="menu">
                                {routes.map(route => (
                                    <li key={route.path} className="navbar-item">
                                        <NavLink
                                            key={route.path}
                                            to={route.path}
                                            className={route.class}
                                            activeClassName="active"
                                            exact><p>{route.name}</p>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="fixed-nav">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="#">
                                <img src={logo} alt="site logo"></img>
                            </a>
                        </div>
                        <div className="navbar-menu">
                            <ul className="menu">
                                {routes.map(route => (
                                    <li key={route.path} className="navbar-item">
                                        <NavLink
                                            key={route.path}
                                            to={route.path}
                                            className={route.class}
                                            activeClassName="active"
                                            exact><span>{route.name}</span>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                            <ul className="contact">
                                <li><a href="https://www.linkedin.com/in/veronica-highsmith-07a04787/" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="https://github.com/ezrahighsmith" target="_blank"><i className="fab fa-github"></i></a></li>
                                <li><a href="https://codepen.io/ezrahighsmith" target="_blank"><i className="fas fa-code"></i></a></li>
                                <li><a href="mailto: ezrahighsmith@gmail.com" target="_blank"><i className="fas fa-at"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <section className="hero is-fullheight">
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
                        <li><a href="https://github.com/123Fives" target="_blank"><i className="fab fa-github"></i></a></li>
                        <li><a href="https://codepen.io/123Fives" target="_blank"><i className="fas fa-code"></i></a></li>
                        <li><a href="mailto: veehighsmith@gmail.com" target="_blank"><i className="fas fa-at"></i></a></li>
                    </ul>
                </footer>
            </>
        </Router >

    );
}

export default Menu;
