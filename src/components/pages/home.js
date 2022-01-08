import React, { Component } from 'react';
import CryptoCard from '../Card';
import { connect } from 'react-redux';
import { Wrapper, Cards } from '../Container.style'

class Home extends Component {

  handleAlphabeticalSort = () => {
    this.setState({ cryptos: this.props.cryptos.cryptos.sort((a, b) => a.name > b.name ? 1 : -1)})
  }

  handlePriceSort = () => {
    this.setState({ cryptos: this.props.cryptos.cryptos.sort((a, b) => parseFloat(a.current_price) > parseFloat(b.current_price) ? 1 : -1)})
  }

  render() {
    return(
      <div className="home">
      <br />
      <br />
      <br />
      <button className='sortCrypto' onClick={this.handleAlphabeticalSort}>Sort by Name</button><br />
      <button className='sortCrypto' onClick={this.handlePriceSort}>Sort by Price</button><br />
          <Cards>
            {this.props.cryptos.cryptos.map((crypto) => (
            <Wrapper>
              <CryptoCard crypto={crypto}/>
            </Wrapper>
            ))}
          </Cards>
  </div>)
  }
}

const mapStateToProps = (state) => {
  return{
    cryptos: state.cryptos,
  }
}
export default connect(mapStateToProps)(Home);

