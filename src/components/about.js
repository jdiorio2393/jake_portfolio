import React, { Fragment } from 'react';
import './about.css';
import Typical from 'react-typical';
import AboutImages from './AboutImgs';

const About = () => {
  return (
    <Fragment>
      <div className='o-div'>{`<div>`}</div>
      <div className='about'>
        <div className='title'>{`<h1>`}</div>

        {/* <div className='title'>{`</h3>`}</div>
        <div className='name'>{`<h1>`}</div> */}
        <h1 className='JakeDiorio'>
          <span className='header-text'>
            My name is <span style={{ color: '#bd0000' }}>Jake.</span>
          </span>{' '}
          <br></br> I'm a web developer & designer based in NY.
        </h1>
        <div className='title'>{`</h1>`}</div>
        <div className='github-btn'>
          <div className='title'>{`<button>`}</div>
          <h3 className='github-link'>
            <a
              className='gitbtn'
              href='https://github.com/jdiorio2393'
              target='_blank'
              rel='noopener noreferrer'
              style={{ letterSpacing: '.2rem' }}
            >
              Check out my github
            </a>
            <a
              className='gitbtn'
              href='https://github.com/jdiorio2393'
              target='_blank'
              rel='noopener noreferrer'
              style={{ letterSpacing: '.2rem' }}
            >
              View my work
            </a>
          </h3>
          <div className='title'>{`</button>`}</div>
        </div>
      </div>
      <div className='c-div'>{`<div>`}</div>
      <div className='avatar'>
        <img className='avatar-img' src='/avatar.gif' alt='' />
      </div>
    </Fragment>
  );
};

export default About;
