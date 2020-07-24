import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Nav from '../components/Sidebar';
import About from '../components/about';
import AboutMe from '../components/aboutMe';
import Ribbon from '../components/ribbon/ribbon';
import Contact from '../components/contact/contact';
import Rain from '../components/rain';
import Projects from '../components/projects/projects';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Layout = () => {
  return (
    <Router>
      <Nav />
      <Ribbon />
      <Rain />
      <TransitionGroup component={null}>
        <CSSTransition
          key={window.location.key}
          in={true}
          classNames='slide-in'
        >
          <Switch location={window.location}>
            <Route exact path='/' component={About} />
            <Route exact path='/about' component={AboutMe} />
            <Route exact path='/my-work' component={Projects} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Router>
  );
};

export default Layout;
