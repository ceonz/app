import CreditCheck from './components/CreditCheck';
import FundProfile from './components/FundProfile';
import FundRegistration from './components/FundRegistration';
import Homepage from './components/Homepage';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return <Router>
      <div className="App">
        <Route exact path="/home" component={Homepage} />
        <Route exact path="/credit-check" component={CreditCheck} />
        <Route exact path="/register-fund" component={FundRegistration} />
        <Route exact path="/fund-profile" component={FundProfile} />
        <ul>
          <li><Link to={`/home`}>Home</Link></li>
          <li><Link to={`/credit-check`}>Credit Check</Link></li>
          <li><Link to={`/register-fund`}>Register Fund</Link></li>
          <li><Link to={`/fund-profile`}>Register Fund</Link></li>
        </ul>
      </div>
      </Router>
  }
}

export default App;
