import React from 'react';

const Info = ({ match, cryptos}) => {
  let crypto = cryptos.find(c => c.id === parseInt(match.params.id))
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20vh'
      }}
    >
      <h1>{crypto.name}</h1>
      
    </div>
  );
};

export default Info;