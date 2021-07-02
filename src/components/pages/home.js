import React from 'react';
import CryptoCard from '../cards/Card';
import {connect} from 'react-redux';

const Home = (props) => {
  return (
    <div
      style={{
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
          <div className="cards">
            {props.cryptos.cryptos.map((crypto) => (<CryptoCard crypto={crypto} />))}
          </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    cryptos: state.cryptos
  }
}
export default connect(mapStateToProps)(Home);

