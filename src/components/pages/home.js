import React from 'react';
import CryptoCard from '../Card';
import {connect} from 'react-redux';

function Home(props){
  return (
    <div className="home">
      <br />
      <br />
      <br />
          <div className="cards">
            {props.cryptos.cryptos.map((crypto) => (<CryptoCard crypto={crypto} />))}
          </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    cryptos: state.cryptos,
  }
}

export default connect(mapStateToProps)(Home);

