import React from 'react';
import { connect } from 'react-redux';
import { editPortfolio } from '../../actions/portfolio.js'
class PortfolioEdit extends React.Component {
    state = {
        name:'',
        quantity:''
    }

    constructor(props){
        super(props)
    }

    handleChange = (event) => {
        
       this.setState({
           [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let portfolio = {...this.state, id: this.props.portfolio.id}
        this.props.editPortfolio(portfolio)
        this.setState({
            name:'',
            quantity:''
        })

    }

    render = (props) => {
            return(
                <div>
                    <h3>Edit Portfolio:</h3>
                    <form onSubmit={this.handleSubmit}>
                        <label>Name: </label>
                        <input type='text' placeholder = 'Name' name='name' value={props.portfolio.name} onChange={this.handleChange}/><br/>
                        <label>Quantity: </label>
                        <input type='integer' placeholder = 'Quantity' name='quantity' value={props.portfolio.quantity} onChange={this.handleChange}/><br/>
                        <input type='submit' />
                    </form>
                    <button onClick={this.props.hidePortfolio}>Close Form</button>
                </div>
        )
    }
}

export default connect(null,{editPortfolio})(PortfolioEdit)