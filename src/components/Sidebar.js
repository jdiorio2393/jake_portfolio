import React, { Fragment } from 'react';

const Sidebar = () => {
  return (
    <Fragment>
      <header className='header navbar-expand-md' role='banner'>
        <div className='text-center'>
          <img className='profile-pic' src='/portfolio-pic.jpg' alt='' />
        </div>
        <h1 className='logo'>
          {/* eslint-disable-next-line */}
          Jake Diorio
        </h1>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#collapsibleNavbar'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='nav-wrap'>
          <ul className='unstyled list-hover-slide'>
            <nav
              className='main-nav "collapse navbar-collapse" id="collapsibleNavbar"'
              role='navigation'
            >
              <li>
                {/* eslint-disable-next-line */}
                <a href='/'>Home</a>
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <a href='/about'>About</a>
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <a href='/my-work'>Work</a>
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <a href=''>Contact</a>
              </li>
            </nav>
          </ul>
          <ul class='social-links  unstyled list-hover-slide text-center'>
            <li>
              {/* eslint-disable-next-line */}
              <a href='#'>Twitter</a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href='#'>Google+</a>
            </li>
          </ul>
        </div>
      </header>
    </Fragment>
  );
};

export default Sidebar;
