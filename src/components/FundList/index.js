import React, { Component } from 'react';
import { Table, Icon, IconButton } from 'evergreen-ui';
import firebase from '../../util/firebase';
class FundList extends Component {
  state = {
    funds: [],
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

  handleCreateNewFund = () => {
    this.props.history.replace(`/credit-check`);
  }

  render() {
    return <div className="funds-list-container">
        <div className="funds-list-header">
          <h1>Disaster Relief - Local Community Funds</h1>
          <IconButton appearance="minimal" icon="plus" iconSize={30} onClick={this.handleCreateNewFund} />
        </div>
          <IconButton appearance="minimal" className="add-button" icon="plus" iconSize={30} />
        <table className="funds-list">
          <tbody>
            {this.state.funds && this.state.funds.map((fund, index) => (
              <tr key={index}>
                <td className="funds-list-name-balance">
                  <h2>{fund.fund_name}</h2>
                  <p>{`$${fund.fund_balance || '0.00'}`}</p>
                </td>
                <td className="funds-list-location">
                  <Icon className="location-icon" icon="map-marker" />
                  <p>{fund.fund_location}</p>
                </td>
                <Icon className="see-fund" icon="chevron-right" />
                <hr class="table-divider"/>
              </tr>
            ))}
          </tbody>
        </table>
      </div>;
  }
}

export default FundList;
