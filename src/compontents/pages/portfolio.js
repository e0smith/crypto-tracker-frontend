import React from 'react';
import PortfolioForm from '../portfolio/PortfolioForm';
import PortfolioShow from '../portfolio/PortfolioShow';
import {connect} from 'react-redux';

const Portfolio = (props) => {
  return (
    <div>
      <h1>Portfolio</h1><br />
      <PortfolioForm /><br /><br />
      {props.portfolio.portfolio.map((portfolio) => (<PortfolioShow portfolio={portfolio} />))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    portfolio: state.portfolio
  }
}
export default connect(mapStateToProps)(Portfolio);