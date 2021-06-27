import { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './compontents/Navbar';
import Home from './compontents/pages';
import Info from './compontents/pages/coin';
import SignUp from './compontents/pages/signup';
import Portfolio from './compontents/pages/portfolio';
import {connect} from 'react-redux'
import { getCryptos } from './actions/crypto';
import { getPortfolio } from './actions/portfolio';
class App extends Component {
  componentDidMount(){
    this.props.getCryptos()
    this.props.getPortfolio()
  }

  render(){
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/portfolio' component={Portfolio} />
          <Route
            exact
            path="/currency/:id"
            render={(props) => <Info {...props} cryptos={this.props.cryptos} />}
          />
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
    portfolio: state.Portfolio,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getCryptos, getPortfolio })(App);
