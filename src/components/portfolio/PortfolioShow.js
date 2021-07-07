import React from 'react';
import DeletePortfolio from './PortfolioDelete';
import PortfolioCalculator from './PortfolioCalculator';

function PortfolioShow(props){
    const { name, quantity} = props.portfolio
    console.log(props)
    return(
        <div className='card'>
            <p> Name: {name}</p>
            <p> Quantity: {quantity}</p> 
            <p> Total Value = {<PortfolioCalculator portfolio={props.portfolio} />}</p>
            <DeletePortfolio portfolio={props.portfolio}/>
        </div>
    )
}

export default PortfolioShow;