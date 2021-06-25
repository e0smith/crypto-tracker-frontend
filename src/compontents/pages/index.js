import React from 'react';
import Card from '../cards/Card';
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
            {props.cryptos.map((crypto) => (<Card crypto={crypto} />))}
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

