import React from 'react';
import PortfolioForm from '../portfolio/PortfolioForm';
import PortfolioShow from '../portfolio/PortfolioShow';
import {connect} from 'react-redux';

const Portfolio = (props) => {
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
};

const mapStateToProps = (state) => {
  // console.log("state: ", state)
  return{
    portfolio: state.portfolio
  }

}
export default connect(mapStateToProps)(Portfolio);