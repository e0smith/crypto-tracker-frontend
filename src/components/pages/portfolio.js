import React from 'react';
import PortfolioForm from '../portfolio/PortfolioForm';
import PortfolioShow from '../portfolio/PortfolioShow';
import {connect} from 'react-redux';

function Portfolio(props){
  if (localStorage.user !== "0"){
    return (
      <div>
        <br /><h1>Portfolio</h1><br />
        <PortfolioForm />
        <br />
        <br />
        <br />
        <br />
        <div 
              style={{
                display: 'grid',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                {props.portfolio.portfolio.map((portfolio) => (<PortfolioShow portfolio={portfolio} />))}
              </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '35vh'
        }}>
        <h1>Please Log-In or Sign-Up to view your portfolio</h1>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  // console.log("state: ", state)
  return{
    portfolio: state.portfolio
  }

}
export default connect(mapStateToProps)(Portfolio);
