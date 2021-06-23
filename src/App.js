import { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './compontents/Navbar';
import Home from './pages';
import SignUp from './pages/signup';
import Portfolio from './pages/portfolio';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crypto: []
    }
  }
  componentDidMount(){
    fetch("http://localhost:3000/cryptos")
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          crypto: json
        })
      })
  }

  render(){
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/portfolio' component={Portfolio} />
          {/* <Route path='/currency/:id' compontent={Coin} /> */}
          {/* <Route path='/' component={Coin} /> */}
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    );
  }
}
export default App;
