import React from 'react';
import './rain.css';

const rain = () => {
  return (
    <div>
      <div class='snowflakes' aria-hidden='true'>
        <div class='snowflake'>{`<h1>`}</div>
        <div class='snowflake'>{`<h3>`}</div>
        <div class='snowflake'>{`<p>`}</div>
        <div class='snowflake'>{`<body>`}</div>
        <div class='snowflake'>{`JS`}</div>
        <div class='snowflake'>{`CSS`}</div>
        <div class='snowflake'>{`<div>`}</div>
        <div class='snowflake'>{`JSX`}</div>
        <div class='snowflake'>{`SQL`}</div>
        <div class='snowflake'>{`EJS`}</div>
        <div class='snowflake'>{`<style>`}</div>
        <div class='snowflake'>{`<img>`}</div>
      </div>
    </div>
  );
};

export default rain;
