// import React, { useState }from 'react';
// import PortfolioEdit from './PortfolioEdit';
import React from 'react';
import DeletePortfolio from './PortfolioDelete';
import PortfolioCalculator from './PortfolioCalculator';

function PortfolioShow(props){
    const { name, quantity} = props.portfolio
    console.log(props)
    // const [formBoolean, setFormBoolean] = useState(false)
    // console.log(props.portfolio)
    return(
        <div className='card'>
            <p> Name: {name}</p>
            <p> Quantity: {quantity}</p> 
            <p> Total Value = {<PortfolioCalculator portfolio={props.portfolio} />}</p>
            <DeletePortfolio portfolio={props.portfolio}/>
            {/* <button onClick={() => setFormBoolean(!formBoolean)} >Edit Portfolio</button> */}
            {/* {formBoolean? <PortfolioEdit portfolio={id}/>: console.log(formBoolean)} */}
        </div>
    )
}

export default PortfolioShow;