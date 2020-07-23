import React from 'react';
import './projects.css';

const projects = () => {
  return (
    <div className='projects-title'>
      <h3 className='web-design'>Web Design</h3>
      <p className='work-description'>
        Here are some of the websites I have designed/developed for various
        small businesses.
      </p>
      <div className='pic-container'>
        <div className='pic-div1'>
          <div className='text-center text'>
            <h4>Stellar Ledgers</h4>
            <p>Accounting Firm</p>
          </div>
        </div>
        <div className='pic-div2'>
          <div className='text-center text'>
            <h4>Lookout</h4>
            <p>Mobile Security</p>
          </div>
        </div>
        <div className='pic-div3'>
          <div className='text-center text'>
            <h4>Yellow Door</h4>
            <p>Talent Development</p>
          </div>
          {/* <img
            className='work-pic'
            id='yellowdoor'
            src='/projects/yellowdoor.png'
            alt=''
          ></img> */}
        </div>
        <div className='pic-div4'>
          <div className='text-center text'>
            <h4>MediaKeys</h4>
            <p>Media Agency</p>
          </div>
          {/* <img
            className='work-pic'
            id='media'
            src='/projects/mediakeys.png'
            alt=''
          ></img> */}
        </div>
        <div className='pic-div5'>
          <div className='text-center text'>
            <h4>Growing Me To Be</h4>
            <p>Childrens Educational Institute</p>
          </div>
        </div>
        <div className='pic-div6'>
          <div className='text-center text'>
            <h4>SNR Creative</h4>
            <p>Branding Firm</p>
          </div>
        </div>
      </div>
      <h3 className='mobile-ordering'>Mobile Ordering</h3>
      <p className='work-description'>
        A mobile ordering platform I revamped via extensive CSS & HTML
        templating without access to source code.
      </p>
      <div className='pic-container2'>
        <div className='pic-div7'>
          <div className='text-center text'>
            <h4>iMenuToGo</h4>
            <p>Old Online Ordering</p>
          </div>
        </div>
        {/* <img className='work-pic' src='/projects/old.png' alt=''></img> */}
        <h1 className='work-pic'>
          <span style={{ color: '#0244fd' }}>{`=>`}</span>
        </h1>
        <div className='pic-div8'>
          <div className='text-center text'>
            <h4>iMenuToGo</h4>
            <p>New Online Ordering</p>
          </div>
        </div>
        <img className='work-pic' src='/projects/new.png' alt=''></img>
      </div>
    </div>
  );
};

export default projects;
