import React, { Component } from 'react';
import Failure from '../Banners/Failure';
import Success from '../Banners/Success';
import firebase from '../../util/firebase';

class FundProfile extends Component {
  state = {
    fund_name: '',
    fund_balance: '',
    fund_owner: '',
    fund_description: '',
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    firebase.listenToDoc(`funds/${id}`, {
      context: this,
      then(data) {
        this.setState({ fund_id: id, ...data });
        //do something with the data
      }, onFailure(err) {
        //handle error
      }});
  }

  render() {
    return <div>
        <h2>Fund Name</h2>
        {this.props.listItems.map(listItem => <div key={listItem.reference}>
            <label htmlFor={listItem.reference}>{`${listItem.label}: `}</label>
            <p>{this.state[listItem.reference] || listItem.value}</p>
          </div>)}
      </div>;
  }
}

FundProfile.defaultProps = {
  listItems: [
    {
      label: 'Fund Name',
      reference: 'fund_name',
      value: '',
    },
    {
      label: 'Fund ID',
      reference: 'fund_id',
      value: '',
    },
    {
      label: 'Fund Owner',
      reference: 'fund_owner',
      value: '',
    },
    {
      label: 'Fund Description',
      reference: 'fund_description',
      value: '',
    },
    {
      label: 'Fund Balance',
      reference: 'fund_balance',
      value: '0',
    },
  ],
};

export default FundProfile;
