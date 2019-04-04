import React from 'react';

const Home = () => {
  return (
    <div>
      <div>Hi! I'm the very best home component.</div>
      <button onClick={() => console.log('Hi There!')}>Press Me</button>
    </div>
  );
};

export default {
  component: Home
};
