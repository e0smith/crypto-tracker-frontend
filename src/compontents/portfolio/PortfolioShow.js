// import React, { useState }from 'react';
// import PortfolioEdit from './PortfolioEdit';
import React from 'react';
import DeletePortfolio from './PortfolioDelete';
import PortfolioCalculator from './PortfolioCalculator';

function PortfolioShow(props){
    const { name, quantity} = props.portfolio

    // const [formBoolean, setFormBoolean] = useState(false)
    // console.log(props.portfolio)
    return(
        <div className='card'>
            <p className="portfolio__info">Name: {name} Quantity: {quantity}</p>
            <DeletePortfolio portfolio={props.portfolio}/>
            <PortfolioCalculator portfolio={name} />
            {/* <button onClick={() => setFormBoolean(!formBoolean)} >Edit Portfolio</button> */}
            {/* {formBoolean? <PortfolioEdit portfolio={id}/>: console.log(formBoolean)} */}
        </div>
    )
}

export default PortfolioShow;