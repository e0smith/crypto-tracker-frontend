import React from 'react';
import { Link } from 'react-router-dom';

function CryptoCard(props){
    const { image, name, current_price, id} = props.crypto
    return(
        <div class="card">
        <img src={image} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">${current_price}</p>
            <p><Link to={`currency/${id}`}>View Coin</Link></p>
        </div>
        </div>

    )
}

export default CryptoCard;