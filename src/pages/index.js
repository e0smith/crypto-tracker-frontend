import React from 'react';
import App from '../compontents/cards/Card.js'
const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <App />
    </div>
  );
};

export default Home;
