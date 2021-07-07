import { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/pages/home';
import Info from './components/pages/coin';
import SignUp from './components/pages/signup';
import SignIn from './components/pages/signin';
import Portfolio from './components/pages/portfolio';
import ProjectInfo from './components/pages/info';
import LogOut from './components/pages/logout';
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
          <Route path='/sign-up' component={SignUp} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/info' component={ProjectInfo} />
          <Route path='/log-out' component={LogOut} />
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


// if((localStorage.user == "" ) ? localStorage.user = "0" : console.log(localStorage.user) )