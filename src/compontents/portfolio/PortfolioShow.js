import React from 'react';

function PortfolioShow(props){
    const { name, quantity} = props.portfolio
    // console.log(props.portfolio)
    return(
        <div className='card'>
            <p className="portfolio__info">Name: {name} Quantity: {quantity}</p>
        </div>
    )
}


export default PortfolioShow;