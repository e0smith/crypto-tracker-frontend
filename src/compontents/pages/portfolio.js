import React from 'react';
import PortfolioForm from '../PortfolioForm';
const Portfolio = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20vh'
      }}
    >
      {/* <h1>Portfolio</h1> */}
      <PortfolioForm />
    </div>
  );
};

export default Portfolio;
