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
                <a href='/'>
                  <i className='fas fa-home' aria-hidden='true'></i>
                  <p style={{ display: 'none' }}>about</p>
                </a>
              </li>
              <li>
                {/* eslint-disable-next-line */}

                <a href='/about'>
                  <i className='fas fa-user' aria-hidden='true'></i>
                </a>
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <a href='/my-work'>
                  <i className='fas fa-laptop-code' aria-hidden='true'></i>
                </a>
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <a href=''>
                  <i
                    className='fas fa-envelope-open-text'
                    aria-hidden='true'
                  ></i>
                </a>
              </li>
            </nav>
          </ul>
          <ul className='social-links  unstyled list-hover-slide text-center'>
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
