import React, { Component } from 'react';
import {Table} from 'evergreen-ui';
class FundList extends Component {

  render() {
    return (
      <Table>
        <Table.Head>
          <Table.TextHeaderCell>Fund Name</Table.TextHeaderCell>
          <Table.TextHeaderCell>Fund Location</Table.TextHeaderCell>
          <Table.TextHeaderCell>Fund Balance</Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={240}>
          {this.props.listOfFunds.map((individualFund) => (
            <Table.Row key={individualFund.fund_paymentToken}>
              <Table.TextCell>{individualFund.fund_name}</Table.TextCell>
              <Table.TextCell>{individualFund.fund_location}</Table.TextCell>
              <Table.TextCell isNumber>{individualFund.fund_balance}</Table.TextCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
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
