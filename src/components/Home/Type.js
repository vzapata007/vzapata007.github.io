import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'DotNet Developer passionate about ASP.NET Core and API development',
          'Self-learning new technologies like React and TypeScript',
          'Enthusiastic gamer',
          'A happy father of two beautiful daughters',
          // Add more specific and relevant messages as needed
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
