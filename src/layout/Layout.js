import React, { Fragment } from 'react';
import Nav from '../components/Sidebar';
import About from '../components/about';

const Layout = () => {
  return (
    <Fragment>
      <div>
        <Nav />
        <div className='main-body'>
          <About />
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
