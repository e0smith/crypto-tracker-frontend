import React from 'react';
import PortfolioForm from '../portfolio/PortfolioForm';
import PortfolioShow from '../portfolio/PortfolioShow';
import {connect} from 'react-redux';

const Portfolio = (props) => {
  // const portfolios = props.portfolio.portfolio.map((p) => p)
  return (
    <div>
      <h1>Portfolio</h1><br />
      <PortfolioForm /><br /><br />
      {/* {portfolios.map((p) => <PortfolioShow portfolio={p} />)} */}
      {/* <PortfolioEdit /> */}
      {/* {props.portfolio.portfolio.map((portfolio) => (<PortfolioEdit portfolio={portfolio} />))} */}
      {props.portfolio.portfolio.map((portfolio) => (<PortfolioShow portfolio={portfolio} />))}
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