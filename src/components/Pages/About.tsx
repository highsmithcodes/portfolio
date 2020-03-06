import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import '../../css/main.css';
import Personal from './Personal';
import Professional from './Professional';

const About: React.FC = () => {
    return (
        <div className="hero-body" id="about">
            <div className="column">
                <Router basename="/portfolio">
                    <div>
                        <div className="column is-mobile is-three-quarters">
                            <div className="columns about">

                                <NavLink className="column is-half" exact activeClassName='active' to="/personal">
                                    <h2 className="navbar-item underline">Personal</h2>
                                </NavLink>


                                <NavLink className="column is-half" activeClassName='active' to="/professional">
                                    <h2 className="navbar-item underline">Professional</h2>
                                </NavLink>

                            </div>
                        </div>

                        {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                        <div className="column is-mobile is-three-quarters">
                            <Switch>
                                <Route path="/personal">
                                    <Personal />
                                </Route>
                                <Route path="/professional">
                                    <Professional />
                                </Route>
                                <Redirect from="/" to="/personal" />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </div>
        </div>
    );
}

export default About;
