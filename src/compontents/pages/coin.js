import React from 'react';

const Info = ({ match, cryptos}) => {
  let crypto = cryptos.find(c => c.id === parseInt(match.params.id))
  return (
    <div
      // style={{
      //   display: 'flex',
      //   justifyContent: 'center',
      //   // alignItems: 'center',
      //   height: '20vh'
      // }}
    >
      <img src={crypto.image}  alt="img" align="middle"/>
      <h1 align="center" >{crypto.name}({crypto.symbol})</h1>
      <h3>Current Price: ${crypto.current_price}</h3>
      <h3>Market Cap: ${crypto.market_cap}</h3>
      <h3>24 Hour Market Cap Change: ${crypto.market_cap_change_24h}</h3>
      <h3>24 Hour Market Cap Change Percentage: {crypto.market_cap_change_percentage_24h}%</h3>
      <h3>Total Volume: ${crypto.total_volume}</h3>
      <h3>24 Hour High: ${crypto.high_24h}</h3>
      <h3>24 Hour Low: ${crypto.low_24h}</h3>
      <h3>24 Hour Price Change: ${crypto.price_change_24h}</h3>
      <h3>24 Hour Price Change Percentage: {crypto.price_change_percentage_24h}% </h3>
      <h3>7 Day Price Change Percentage: {crypto.price_change_percentage_7d}% </h3>
      <h3>14 Day Price Change Percentage: {crypto.price_change_percentage_14d}% </h3>
      <h3>30 Day Price Change Percentage: {crypto.price_change_percentage_30d}% </h3>
      <h3>60 Day Price Change Percentage: {crypto.price_change_percentage_60d}% </h3>
      <h3>One Year Price Change Percentage: {crypto.price_change_percentage_1y}% </h3>
      <h3>Total Supply: {crypto.total_supply}</h3>
      <h3>Circulating Supply: {crypto.circulating_supply}</h3>
      <h3></h3>
      <h3></h3>
    </div>
  );
};

export default Info;