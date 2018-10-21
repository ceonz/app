import React, { Component } from 'react';
import { Table, Icon } from 'evergreen-ui';
import firebase from '../../util/firebase';
class FundList extends Component {

  componentDidMount() {
    firebase.get('funds', {
      context: this,
    }).then(data => {
      console.log(data);
      if (!data.length) {
        return false;
      }
      this.setState({
        funds: data,
      });
    }).catch(err => {
      //handle error
    })
  }

  render() {
    return (
      <Table>
        <Table.Body>
          {this.props.listOfFunds.map((individualFund) => (
            <Table.Row className="funds-list" height={"auto"} key={individualFund.fund_paymentToken}>
              <Table.TextCell>
                <h1 className="funds-list-name">{individualFund.fund_name}</h1>
                <div className="funds-list-location">
                  <Icon className="location-icon" icon="map-marker" />
                  <span>{individualFund.fund_location}</span>
                </div>
              </Table.TextCell>
              <Table.TextCell isNumber className="funds-list-balance">{individualFund.fund_balance}</Table.TextCell>
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
