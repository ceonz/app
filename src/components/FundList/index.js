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
        <table className="funds-list">
          <tbody>
            {this.state.funds && this.state.funds.map((fund) => (
              <tr>
                <td className="funds-list-name-balance">
                  <h2>Awesome Fund name</h2>
                  <p>350,000</p>
                </td>
                <td className="funds-list-location">
                  <Icon className="location-icon" icon="map-marker" />
                  <p>America</p>
                </td>
              <hr class="table-divider"/>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FundList;
