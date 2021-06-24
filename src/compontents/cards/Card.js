import React from 'react';


function Card(){
    const { image, name, current_price} = this.props.crypto
    return(
        <div className="card">
            <div className="container">
                <img src={image}  alt="img"/>
                <h2 className="card__title">{name}</h2>
                <p className="card__description">${current_price}</p>
                <button className="card__btn">View Coin</button>
            </div>
        </div>
    )
}

export default Card;