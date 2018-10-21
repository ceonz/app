import React, { Component } from 'react';
import firebase from '../util/firebase';

class Profile extends Component {
  state = {
    fund_name: '',
    fund_location: '',
    fund_description: '',
    fund_balance: '0',
  };

  componentWillMount() {
    firebase
      .get('pool/MHF0GUfi08wj1W21OjPo', {
        context: this,
      })
      .then(data => {
          const { fund_name, fund_location, fund_description, fund_balance } = data;
        this.setState(state => ({
            ...state,
            fund_name,
            fund_location,
            fund_description,
            fund_balance,
            isLoading: false,
        }));
        console.log(data);
        //do something with data
      })
      .catch(err => {
        //handle error
      });
  }

  render() {
    return (
      <>
        <h1>{this.state.fund_name}</h1>
        <h2>${this.state.fund_balance}</h2>
        <h3>{this.state.fund_location}</h3>
        <p>{this.state.fund_description}</p>
      </>
    );
  }
}

export default Profile;