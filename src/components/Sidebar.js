import React, { Fragment } from 'react';
import './sidebar.css';

const Sidebar = () => {
  return (
    <Fragment>
      <nav className='menu' tabindex='0'>
        <div className='smartphone-menu-trigger'></div>
        <header className='avatar-profile'>
          <img src='/portfolio-pic.jpg' />
          <h2>Jake Diorio</h2>
        </header>
        <ul className=' unstyled list-hover-slide'>
          <li tabindex='0'>
            <a href='/'>
              <i className='fas fa-home' aria-hidden='true'></i>
              <p className='icon-text'>Home</p>
            </a>
          </li>
          <li tabindex='0'>
            <a href='/about'>
              <i className='fas fa-user' aria-hidden='true'></i>
              <p className='icon-text'>About</p>
            </a>
          </li>
          <li tabindex='0'>
            <a href='/my-work'>
              <i className='fas fa-laptop-code' aria-hidden='true'></i>
              <p className='icon-text'>Work</p>
            </a>
          </li>
          <li tabindex='0'>
            <a href='/contact'>
              <i className='fas fa-envelope-open-text' aria-hidden='true'></i>
              <p className='icon-text'>Contact</p>
            </a>
          </li>
        </ul>
      </nav>

      {/* <header className='header navbar-expand-md' role='banner'>
        <div className='text-center'>
          <img className='profile-pic' src='/portfolio-pic.jpg' alt='' />
        </div>
        <h1 className='logo'>Jake Diorio</h1>
        <a href='javascript:void(0)' className='closebtn' onclick='closeNav()'>
          &times;
        </a>
        <div className='nav-wrap'>
          <ul className='unstyled list-hover-slide'>
            <nav
              className='main-nav "collapse navbar-collapse" id="collapsibleNavbar"'
              role='navigation'
            >
              <li>
                <a href='/'>
                  <i className='fas fa-home' aria-hidden='true'></i>
                  <p className='icon-text'>Home</p>
                </a>
              </li>
              <li>
                <a href='/about'>
                  <i className='fas fa-user' aria-hidden='true'></i>
                  <p className='icon-text'>About</p>
                </a>
              </li>
              <li>
                <a href='/my-work'>
                  <i className='fas fa-laptop-code' aria-hidden='true'></i>
                  <p className='icon-text'>Work</p>
                </a>
              </li>
              <li>
                <a href='/contact'>
                  <i
                    className='fas fa-envelope-open-text'
                    aria-hidden='true'
                  ></i>
                  <p className='icon-text'>Contact</p>
                </a>
              </li>
            </nav>
          </ul>
        </div>
      </header> */}
    </Fragment>
  );
  // }
};

export default Sidebar;
