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
          {/* <div className='text-div'> */}
          <div className='text-center text'>
            <h4>Stellar Ledgers</h4>
            <p>Accounting Firm</p>
          </div>
          {/* </div> */}
          {/* <img
            className='work-pic'
            id='stellar'
            src='/projects/stellarledgers.png'
            alt=''
          ></img> */}
        </div>
        <div className='pic-div2'>
          <div className='text-div'>
            <h4>Stellar Ledgers</h4>
            <p>Accounting Firm</p>
          </div>
          {/* <img
            className='work-pic'
            id='lookout'
            src='/projects/lookout.png'
            alt=''
          ></img> */}
        </div>
        <div className='pic-div3'>
          <div className='text-div'>
            <h4>Stellar Ledgers</h4>
            <p>Accounting Firm</p>
          </div>
          {/* <img
            className='work-pic'
            id='yellowdoor'
            src='/projects/yellowdoor.png'
            alt=''
          ></img> */}
        </div>
        <div className='pic-div4'>
          <div className='text-div'>
            <h4>Stellar Ledgers</h4>
            <p>Accounting Firm</p>
          </div>
          {/* <img
            className='work-pic'
            id='media'
            src='/projects/mediakeys.png'
            alt=''
          ></img> */}
        </div>
        <div className='pic-div5'>
          <div className='text-div'>
            <h4>Stellar Ledgers</h4>
            <p>Accounting Firm</p>
          </div>
          {/* <img
            className='work-pic'
            id='gmtb'
            src='/projects/gmtb.png'
            alt=''
          ></img> */}
        </div>
        <div className='pic-div6'>
          <div className='text-div'>
            <h4>Stellar Ledgers</h4>
            <p>Accounting Firm</p>
          </div>
          {/* <img
            className='work-pic'
            id='snr'
            src='/projects/snrcreative.png'
            alt=''
          ></img> */}
        </div>
      </div>
      <h3 className='mobile-ordering'>Mobile Ordering</h3>
      <p className='work-description'>
        A mobile ordering platform I Revamped via extensive CSS & HTML
        templating without access to source code.
      </p>
      <img className='work-pic' src='/projects/old.png' alt=''></img>
      <h1 className='work-pic'>
        <span style={{ color: '#0244fd' }}>{`=>`}</span>
      </h1>
      <img className='work-pic' src='/projects/new.png' alt=''></img>
    </div>
  );
};

export default projects;
