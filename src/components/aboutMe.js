import React, { Fragment } from 'react';
import './aboutMe.css';
import Cube from './cube/cube';

const AboutMe = () => {
  return (
    <Fragment>
      <div className='o-div'>{`<div>`}</div>
      <div className='aboutMe'>
        <div className='title'>{`<h1>`}</div>
        <h1 data-text='Jake Diorio'>
          <span style={{ fontSize: '5rem', color: '#bd0000' }}>About Me</span>
        </h1>
        <div className='title'>{`</h1>`}</div>

        <div className='title'>{`<p>`}</div>
        <h3 className='about-text'>
          I am a web developer based in New York. I have designed, developed,
          and maintained 25+ active websites for small businesses ranging from
          restaurant franchises to marketing consultants & branding agencies.
          Having worked in the online ordering business, I have also been
          responsible for front-end mobile app design for restaurants and
          e-commerce clients.
        </h3>
        <div className='title'>{`</p>`}</div>
      </div>
      <div className='about-img-div'>
        <Cube />
        {/* <img className='about-image' src='/mern.png' alt='' /> */}
      </div>
      <div className='c-div'>{`<div>`}</div>
    </Fragment>
  );
};

export default AboutMe;
