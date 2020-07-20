import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Nav from '../components/Sidebar';
import About from '../components/about';
import AboutMe from '../components/aboutMe';
import Ribbon from '../components/ribbon/ribbon';
import Projects from '../components/projects/projects';

const Layout = () => {
  return (
    <Fragment>
      <Router>
        <div>
          <Nav />
          <Ribbon />
          <Switch>
            <div className='main-body'>
              <Route exact path='/' render={About} />
              <Route exact path='/about' render={AboutMe} />
              <Route exact path='/my-work' render={Projects} />
            </div>
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
};

export default Layout;
