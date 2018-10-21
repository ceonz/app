import CreditCheck from './components/CreditCheck';
import FundList from './components/FundList';
import FundProfile from './components/FundProfile';
import FundRegistration from './components/FundRegistration';
import TransferFunds from './components/TransferFunds';
import Homepage from './components/Homepage';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Redirect, Route, Link } from 'react-router-dom';
import './App.scss';
import './util/firebase.js';

class App extends Component {

  render() {
    return <Router>
        <div className="App">
          <React.Fragment>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </React.Fragment>
          <Route exact path="/home" component={Homepage} />
          <Route exact path="/credit-check" component={CreditCheck} />
          <Route exact path="/register" component={FundRegistration} />
          <Route exact path="/funds/:id" component={FundProfile} />
          <Route exact path="/funds" component={FundList} />
          <Route exact path="/transfer-funds" component={TransferFunds} />

          <ul>
            <li>
              <Link to={`/home`}>Home</Link>
            </li>
            <li>
              <Link to={`/credit-check`}>Credit Check</Link>
            </li>
            <li>
              <Link to={`/register`}>Register Fund</Link>
            </li>
            <li>
              <Link to={`/funds/CbDncZSB4jmVZ7TjRR4s`}>Fund Profile</Link>
            </li>
            <li>
              <Link to={`/funds`}>Fund List</Link>
            </li>
          </ul>
        </div>
      </Router>;
  }
}

export default App;
