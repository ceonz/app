import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let fundData = { 
    fundName: 'TEST FUND',
    ownerName: 'Kate',
    ownerEmail: 'Kate@test.com',
    fundDescription: 'I am a fund description'
  };

ReactDOM.render(<App fundData={fundData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
