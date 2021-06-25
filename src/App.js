import { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './compontents/Navbar';
import Home from './compontents/pages';
import SignUp from './compontents/pages/signup';
import Portfolio from './compontents/pages/portfolio';
import {connect} from 'react-redux'
import { getCryptos } from './actions/crypto';
// import Coin from './compontents/Coin';
class App extends Component {
  componentDidMount(){
    this.props.getCryptos()
  }

  render(){
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/portfolio' component={Portfolio} />
          {/* <Route path='/currency/:id' compontent={Coin} /> */}
          {/* <Route path='/' component={Coin} /> */}
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    cryptos: state.cryptos,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getCryptos })(App);
