import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

function CryptoCard(props){
    const { image, name, current_price, id} = props.crypto
    return(
        <div class="row row-cols-4 row-cols-md-2 g-4">
            <div class="col">
                <div class="card">
                <img src={image} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">${current_price}</p>
                    <Link to={`currency/${id}`}>View Coin</Link>
                </div>
                </div>
            </div>
        </div>

    )
}

export default CryptoCard;