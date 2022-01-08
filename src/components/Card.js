import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from './Container.style'

class CryptoCard extends Component {

    render(){
        const { image, name, current_price, id} = this.props.crypto
        console.log(this.props.likeInc)
        return(
            <Card>
            <img src={image} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">${current_price}</p>
                    <p><Link to={`currency/${id}`}>View Coin</Link></p>
                </div>
            </Card>
        )
    }
}

export default CryptoCard;