import React from 'react';
import DeletePortfolio from './PortfolioDelete';
import PortfolioCalculator from './PortfolioCalculator';
import { Component } from 'react';
import { updatePortfolio } from "../../actions/portfolio.js"
import { connect } from 'react-redux';

class PortfolioShow extends Component {

    state={
        name: this.props.portfolio.name,
        quantity: 0 ,
        user_id: parseInt(localStorage.user)
    }

    handleChange = (event) => {
        console.log(event.target.name, event.target.value)
        this.setState({[event.target.name]: parseFloat(event.target.value)})
    }

    handleSubmit = () => {
        this.props.updatePortfolio(this.state, this.props.portfolio.id)
    }

    render() {
        const { name, quantity} = this.props.portfolio
        return(
                <div className='card'>
                    <p> Name: {name}</p>
                    <p> Quantity: {quantity}</p> 
                    <p> Total Value = {<PortfolioCalculator portfolio={this.props.portfolio} />}</p>
                    <form onSubmit={this.handleSubmit}>
                        <label name="quantity">Update Quantity: </label>
                        <input id="quantity" name="quantity" type="number" step="any" onChange={this.handleChange} value={this.state.quantity} />
                        <input type="submit" value="Update Quantity" />
                    </form>
                    <DeletePortfolio portfolio={this.props.portfolio}/>
                </div>
            )
    }
}

export default connect(null, {updatePortfolio})(PortfolioShow);
