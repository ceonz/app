import React, { Component } from 'react';
import { Table, Icon, IconButton } from 'evergreen-ui';
import firebase from '../../util/firebase';
class FundList extends Component {
  state = {
    fund_name: '',
    fund_balance: '',
    fund_location: '',
  }

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
      <div className="funds-list-container">
        <div className="funds-list-header">
          <h1>Funds</h1>
          <IconButton appearance="minimal" icon="plus" iconSize={30} />
        </div>
        <Table>
          <Table.Body>
            {this.state.funds && this.state.funds.map((fund) => (
              <Table.Row className="funds-list" height={"auto"}>
                <Table.TextCell>
                  <h1 className="funds-list-name">{fund.fund_name}</h1>
                  <div className="funds-list-location">
                    <Icon className="location-icon" icon="map-marker" />
                    <span>{fund.fund_location}</span>
                  </div>
                </Table.TextCell>
                <Table.TextCell isNumber className="funds-list-balance">{fund.fund_balance}</Table.TextCell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default FundList;
