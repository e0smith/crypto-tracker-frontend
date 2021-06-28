import React, { useState } from 'react';
import PortfolioEdit from './PortfolioEdit';

function PortfolioShow(props){
    const { name, quantity, id} = props.portfolio
    // const [formBoolean, setFormBoolean] = useState(false)
    // console.log(props.portfolio)
    return(
        <div className='card'>
            <p className="portfolio__info">Name: {name} Quantity: {quantity}</p>
            {/* <button onClick={() => setFormBoolean(!formBoolean)} >Edit Portfolio</button> */}
            {/* {formBoolean? <PortfolioEdit portfolio={id}/>: console.log(formBoolean)} */}
        </div>
    )
}

export default PortfolioShow;