import React from 'react';
import { Link, useParams } from 'react-router-dom';


function Card(props){
    const { image, name, current_price, id} = props.crypto
    return(
        <div className="card">
            <div className="container">
                <img src={image}  alt="img"/>
                <h2 className="card__title">{name}</h2>
                <p className="card__description">${current_price}</p>
                <Link to={`currency/${id}`}>View Coin</Link>
            </div>
        </div>
    )
}


export default Card;