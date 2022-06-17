import React from 'react';
import Spinner from '../components/layouts/Spinner';

function About() {
  return (
    <div style={{ backgroundColor: 'blue' }}>
      About
      <div>
        <Spinner />
      </div>
      <div>
        <svg
          width="126"
          height="1"
          viewBox="0 0 1000 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            className="line-one"
            y1="0.5"
            x2="126"
            y2="0.5"
            stroke="black"
          />
        </svg>
      </div>
    </div>
  );
}

export default About;
