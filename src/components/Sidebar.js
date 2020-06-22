import React, { Fragment } from 'react';

const Sidebar = () => {
  return (
    <Fragment>
      <header class='header navbar-expand-md' role='banner'>
        <h1 class='logo'>
          {/* eslint-disable-next-line */}
          <a href=''>
            Jake <span>Diorio</span>
          </a>
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
                <a href=''>About</a>
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <a href=''>Work</a>
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <a href=''>Contact</a>
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <a href=''>Blog</a>
              </li>
            </nav>
          </ul>
          <ul class='social-links list-inline unstyled list-hover-slide'>
            <li>
              {/* eslint-disable-next-line */}
              <a href='#'>Twitter</a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href='#'>Google+</a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href='#'>GitHub</a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href='#'>CodePen</a>
            </li>
          </ul>
        </div>
      </header>
    </Fragment>
  );
};

export default Sidebar;
