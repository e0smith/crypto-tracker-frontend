import { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './compontents/Navbar';
import Home from './pages';
import SignUp from './pages/signup';
import Portfolio from './pages/portfolio';

class App extends Component {


  render(){
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/portfolio' component={Portfolio} />
          {/* <Route path='/' component={Coin} /> */}
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    );
  }
}
export default App;
