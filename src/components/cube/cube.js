import React from 'react';
import './cube.css';

const cube = () => {
  return (
    <div id='stage' style={{ width: '300px', height: '300px' }}>
      <div className='spinner'>
        <div className='face1'></div>
        <div className='face2'></div>
        <div className='face3'></div>
        <div className='face4'></div>
        <div className='face5'></div>
        <div className='face6'></div>
      </div>
    </div>
  );
};

export default cube;
