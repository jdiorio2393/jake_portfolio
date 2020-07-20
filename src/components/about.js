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
        <h1 data-text='Jake Diorio'>
          <span style={{ fontSize: '5rem' }}>
            My name is <span style={{ color: 'red' }}>Jake.</span>
          </span>{' '}
          <br></br> I'm a web developer & designer based in NY.
        </h1>
        {/* <h5 style={{ fontSize: '1.7rem', color: 'white' }}>
          Full Stack Development // Web Design
        </h5> */}

        {/* <Typical
          steps={[
            'Full Stack Development',
            2000,
            'React Development',
            2000,
            'Web Design',
            2000,
          ]}
          loop={Infinity}
          wrapper='h4'
        /> */}
        <div className='title'>{`</h1>`}</div>
        <div className='github-btn'>
          <div className='title'>{`<button>`}</div>
          <h3 className='github-link'>
            <a
              className='gitbtn'
              href='https://github.com/jdiorio2393'
              target='_blank'
              rel='noopener noreferrer'
              // style={{
              //   backgroundColor: 'red',
              //   padding: '2%',
              //   borderRadius: '5px',
              // }}
            >
              Check out my github
            </a>
          </h3>
          <div className='title'>{`</button>`}</div>
        </div>
      </div>
      <div className='c-div'>{`<div>`}</div>
    </Fragment>
  );
};

export default About;
