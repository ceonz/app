import React, { Component } from 'react';
import Failure from '../Banners/Failure';
import Success from '../Banners/Success';

class FundProfile extends Component {

  render() {
    return (
      <div>
        <h2>Fund Name</h2>
        {this.props.listItems.map((listItem) => (
          <div key={listItem.reference}>
            <label htmlFor={listItem.reference}>{`${listItem.label}: `}</label>
            <p></p>
          </div>
        ))}
      </div>
    );
  }
}

FundProfile.defaultProps = {
  listItems: [
    {
      label: 'Fund Name',
      reference: 'fundName',
    },
    {
      label: 'Fund ID',
      reference: 'fundId',
    },
    {
      label: 'Fund Owner',
      reference: 'fundOwner',
    },
    {
      label: 'Fund Description',
      reference: 'fundDescription',
    },
    {
      label: 'Fund Total',
      reference: 'fundTotal',
    },
  ]
};

export default FundProfile;
