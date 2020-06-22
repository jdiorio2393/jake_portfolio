import React from 'react';
import './about.css';
import Typical from 'react-typical';

const About = () => {
  return (
    <div className='container-fluid '>
      <div className='about'>
        <h3>Hello I'm</h3>
        <h1 className='glitch' data-text='Jake Diorio'>
          Jake Diorio
        </h1>
        <Typical
          steps={['Web Developer', 2000, 'Web Designer', 2000]}
          loop={Infinity}
          wrapper='h4'
        />
        <h3 className='github-link'>
          <a
            href='https://github.com/jdiorio2393'
            target='_blank'
            rel='noopener noreferrer'
          >
            Check out my github
          </a>
        </h3>
      </div>
    </div>
  );
};

export default About;
