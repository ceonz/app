import React, { Component } from 'react';
import firebase from '../util/firebase';

class Profile extends Component {
    state = {
        name: '',
        location: '',
        description: '',
        balance: '0',
    };

    componentWillMount() {
        firebase
            .get('pool/MHF0GUfi08wj1W21OjPo', {
            context: this,
            }).then(data => {
                const { name, location, description, balance } = data;
                this.setState(state => ({
                    ...state,
                    name,
                    location,
                    description,
                    balance,
                    isLoading: false
                }))
                console.log(data)
                //do something with data
            }).catch(err => {
                //handle error
            });
    }

  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
        <h2>${this.state.balance}</h2>
        <h3>{this.state.location}</h3>
        <p>{this.state.description}</p>
      </>
    );
  }
}

export default Profile;