import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class CryptoCard extends Component {

    // state = { // USED FOR CODE CHALLENGE CAN BE ENABLED
    //     like: 0
    // }

    // handleChange(event){ // USED FOR CODE CHALLENGE CAN BE ENABLED
    //     this.setState({like: event.target.value})
    // }


    render(){
        const { image, name, current_price, id} = this.props.crypto
        console.log(this.props.likeInc)
        return(
            <div class="card">
            <img src={image} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">${current_price}</p>
                <p><Link to={`currency/${id}`}>View Coin</Link></p>
                {/* <p> Likes: {this.state.like}</p> */} {/*  USED FOR CODE CHALLENGE CAN BE ENABLED*/}
                {/* <button onClick={() => this.setState({like: this.state.like + parseInt(this.props.likeInc)})}> Like </button> */} {/*  USED FOR CODE CHALLENGE CAN BE ENABLED*/}
            </div>
            </div>
        )
    }
}

export default CryptoCard;