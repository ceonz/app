import React, { Component } from 'react';

class FundList extends Component {

  render() {
    return (
      <div>
        <h2>Funds</h2>
        {this.props.listOfFunds.map((individualFund) => (
          <div className="funds-list" key={individualFund.fund_paymentToken}>
            <h1>{individualFund.fund_name}</h1>
            <p>{individualFund.fund_location}</p>
            <h2>{individualFund.fund_balance}</h2>
          </div>
        ))}
      </div>
    );
  }
}

FundList.defaultProps = {
  listOfFunds: [
    {
      fund_balance: '$1,045,928',
      fund_location: 'Taipei',
      fund_name: 'Kyle Fund',
      fund_owner: 'Kyle',
      fund_paymentToken: '2389457230987',
    },
    {
      fund_balance: '$2,045,928',
      fund_location: 'Georgia',
      fund_name: 'Gil Fund',
      fund_owner: 'Gil',
      fund_paymentToken: '304567089252',
    },
    {
      fund_balance: '$3,045,928',
      fund_location: 'Kentucky',
      fund_name: 'Kate Fund',
      fund_owner: 'Kate',
      fund_paymentToken: '2389474523',
    },
    {
      fund_balance: '$4,045,928',
      fund_location: 'Iraq',
      fund_name: 'Ethan Fund',
      fund_owner: 'Ethan',
      fund_paymentToken: '09745609382',
    },
  ]
};

export default FundList;
