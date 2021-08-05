import React, { Component } from 'react';
import CryptoCard from '../Card';
import { connect } from 'react-redux';

class Home extends Component {

  handleAlphabeticalSort = () => {
    this.setState({ cryptos: this.props.cryptos.cryptos.sort((a, b) => a.name > b.name ? 1 : -1)})
  }

  handlePriceSort = () => {
    this.setState({ cryptos: this.props.cryptos.cryptos.sort((a, b) => parseFloat(a.current_price) > parseFloat(b.current_price) ? 1 : -1)})
  }

  // state = { // USED FOR CODE CHALLENGE CAN BE ENABLED
  //   like: 0
  // }

  // handleChange = (event) => { // USED FOR CODE CHALLENGE CAN BE ENABLED
  //   this.setState({like: event.target.value})
  // }

  render() {
    return(
      <div className="home">
      <br />
      <br />
      <br />
      {/* <input id="like" name="like" type="number" onChange={this.handleChange} value={this.state.like} /> // USED FOR CODE CHALLENGE CAN BE ENABLED */} 
      <button className='sortCrypto' onClick={this.handleAlphabeticalSort}>Sort by Name</button><br />
      <button className='sortCrypto' onClick={this.handlePriceSort}>Sort by Price</button><br />
          <div className="cards">
            {this.props.cryptos.cryptos.map((crypto) => (<CryptoCard crypto={crypto} /* likeInc={this.state.like} USED FOR CODE CHALLENGE CAN BE ENABLED */ />))}
          </div>
  </div>)
  }
}

const mapStateToProps = (state) => {
  return{
    cryptos: state.cryptos,
  }
}
export default connect(mapStateToProps)(Home);

