import { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './compontents/Navbar';
import Home from './compontents/pages';
import SignUp from './compontents/pages/signup';
import Portfolio from './compontents/pages/portfolio';
import Card from './compontents/cards/Card';

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
          <Route path='/home' exact component={Home} />
          <Route path='/portfolio' component={Portfolio} />
          {/* <Route path='/currency/:id' compontent={Coin} /> */}
          {/* <Route path='/' component={Coin} /> */}
          <Route path='/sign-up' component={SignUp} />
        </Switch>
        {/* <Card /> */}
        <div className="cards">
          {this.state.crypto.map((crypto) => (<Card crypto={crypto} />))}
        </div>
      </Router>
    );
  }
}
export default App;
