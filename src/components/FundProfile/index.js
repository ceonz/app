import React, { Component } from 'react';
import Failure from '../Banners/Failure';
import Success from '../Banners/Success';
import firebase from '../../util/firebase';
import { Table, Icon, Alert, Tab, TabNavigation} from 'evergreen-ui';

class FundProfile extends Component {
  state = {
    fund_name: '',
    fund_balance: '',
    fund_owner: '',
    fund_description: '',
    isLoggedIn: true,
    isSuccessful: true
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

  transferFunds = () => {
    this.props.history.replace('/transfer-funds');
  }



  render() {
    return (
    <div>
      <Alert
          intent="success"
          title="You've succesfully created yur fund'"
          marginBottom={32}
          style={{display:this.state.isSuccessful ? "block" : "none"}}
        />
      <h2>{this.state.fund_name}</h2>
        {this.state.isLoggedIn ? 
      <button onClick={this.transferFunds}>Transfer Funds</button> : ''}
      <TabNavigation>
  {['Fund Information', 'Donations', 'Transfers'].map((tab, index) => (
    <Tab key={tab} is="a" href="#" id={tab} isSelected={index === 0}>
      {tab}
    </Tab>
  ))}
</TabNavigation>
      <Table>
        <Table.Body>
          {this.props.listItems.map((listItem) => (
            <Table.Row className="fund-profile" height={60}>
              <Table.TextCell className="fund-profile-cell">
                <label htmlFor={listItem.reference}>{`${listItem.label}: `}</label>
                {this.state[listItem.reference]}
              </Table.TextCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      </div>
    );
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
