import React from 'react';
import './projects.css';

const projects = () => {
  return (
    <div className='projects-title'>
      {/* 1st group */}
      <h3 className='web-design'>Web Design</h3>
      <p className='work-description'>
        Here are some of the websites I have designed/developed for various
        small businesses.
      </p>
      <div className='pic-container'>
        <div className='pic-div1'>
          <a
            href='https://stellarledgers.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='text-center text'>
              <h4>Stellar Ledgers</h4>
              <p>Accounting Firm</p>
            </div>
          </a>
        </div>

        <div className='pic-div2'>
          <a
            href='https://www.lookout.com/uk/platform?fbclid=IwAR0KwhXIbiZdISrVke_3nEVUXbaqGyIcXcmlGBExVoCt1lpPZe_ROdzfD9U'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='text-center text'>
              <h4>Lookout</h4>
              <p>Mobile Security</p>
            </div>
          </a>
        </div>
        <div className='pic-div3'>
          <a
            href='https://yellowdoortalent.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='text-center text'>
              <h4>Yellow Door</h4>
              <p>Talent Development</p>
            </div>
          </a>
        </div>
        <div className='pic-div4'>
          <a
            href='https://www.mediakeys.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='text-center text'>
              <h4>MediaKeys</h4>
              <p>Media Agency</p>
            </div>
          </a>
        </div>
        <div className='pic-div5'>
          <a
            href='https://growingmetobe.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='text-center text'>
              <h4>Growing Me To Be</h4>
              <p>Childrens Educational Institute</p>
            </div>
          </a>
        </div>
        <div className='pic-div6'>
          <a
            href='https://www.snr-creative.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='text-center text'>
              <h4>SNR Creative</h4>
              <p>Branding Firm</p>
            </div>
          </a>
        </div>
      </div>
      {/* 2nd group */}
      <h3 className='mobile-ordering'>Mobile Ordering</h3>
      <p className='work-description'>
        A mobile ordering platform I revamped via extensive CSS & HTML
        templating without access to source code.
      </p>
      <div className='pic-container2'>
        <div className='pic-div7'>
          <a
            href='https://taquitosmexican.imenutogo.com/embed/menu?fbclid=IwAR2m00Kbx-pVb4L86SZRlwGZW-ID0_SpuBCkvMK8S6fFth9hY1xlZb4O1i4'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='text-center text'>
              <h4>Old Mobile Ordering</h4>
              <p>iMenuToGo</p>
            </div>
          </a>
        </div>
        <h1 className='work-pic'>
          <span
            style={{ color: '#0244fd', fontFamily: 'Open Sans, sans-serif' }}
          >{`=>`}</span>
        </h1>
        <div className='pic-div8'>
          <a
            href='https://gialina.imenutogo.com/?fbclid=IwAR3hr2gqSaivJ3J7kilbRjQq-UUmEb56_DKmiSf-GlmrfwZvodaZ-Eg0N7M#2'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='text-center text'>
              <h4>New Mobile Ordering</h4>
              <p>iMenuToGo</p>
            </div>
          </a>
        </div>
      </div>
      {/* 3rd group */}
      <h3 className='mobile-ordering'></h3>
      {/* <p className='work-description'> 
        A collection of some of my personal development projects.
      </p>
      <div className='pic-container'>
        <div className='pic-div7'>
          <div className='text-center text'>
            <h4>Old Mobile Ordering</h4>
            <p>iMenuToGo</p>
          </div>
        </div>
        <h1 className='work-pic'>
          <span
            style={{ color: '#0244fd', fontFamily: 'Open Sans, sans-serif' }}
          >{`=>`}</span>
        </h1>
        <div className='pic-div8'>
          <div className='text-center text'>
            <h4>New Mobile Ordering</h4>
            <p>iMenuToGo</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default projects;
