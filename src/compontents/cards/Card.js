import React from 'react';

function Card(props){
    return(
        <div className="card">
            <div className="container">
                <img src={props.crypto.image}  alt="img"/>
                <h2 className="card__title">{props.crypto.name}</h2>
                <p className="card__description">${props.crypto.current_price}</p>
                <button className="card__btn">View Coin</button>
            </div>
        </div>
    )
}

export default Card;