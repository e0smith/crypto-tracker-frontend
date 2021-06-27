import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPortfolio } from "../../actions/portfolio.js"
class PortfolioForm extends Component {

    state={
        name:'',
        quantity: 0
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createPortfolio(this.state)
        this.setState({
            name:'',
            quantity:''
        })
    }

    render(){
        return(
            <div id="portfolio-form">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Currency Name: </label>
                        <input id="name" name="name" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="quantity">Quantity: </label>
                        <input id="quantity" name="quantity" type="number" onChange={this.handleChange} value={this.state.quantity} />
                    </div>
                    <div>
                        <input type="submit" value="Add to Portfolio" />
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, {createPortfolio})(PortfolioForm);