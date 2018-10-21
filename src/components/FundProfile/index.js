import React, { Component } from 'react';
import Failure from '../Banners/Failure';
import Success from '../Banners/Success';
import firebase from '../../util/firebase';
import {
  Table,
  Icon,
  Alert,
  Heading,
  Card,
  Pane,
  Paragraph,
  SideSheet,
  Tab,
  TabNavigation,
  Button
} from 'evergreen-ui';
import TransferFunds from '../TransferFunds/index';

class FundProfile extends Component {
  state = {
    fund_name: '',
    fund_balance: '',
    fund_owner: '',
    fund_description: '',
    isLoggedIn: true,
    isSuccessful: true,
    showTransferPanel: false,
    selectedTabIndex: 0,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({ fundId: id });

    firebase.listenToDoc(`funds/${id}`, {
      context: this,
      then(data) {
        this.setState({ fund_id: id, ...data });
        //do something with the data
      },
      onFailure(err) {
        //handle error
      },
    });

    firebase
      .get('donations', {
        context: this,
        query: ref => ref.where('fundId', '==', id),
      })
      .then(data => {
        console.log(data)
        if (data) {
          this.setState({
            donations: data,
          })
        }
        //do something with data
      })
      .catch(err => {
        //handle error
      });

    firebase
      .get('transfers', {
        context: this,
        query: ref => ref.where('fundId', '==', id),
      })
      .then(data => {
        console.log(data)
        if (data) {
          this.setState({
            transfers: data,
          })
        }
        //do something with data
      })
      .catch(err => {
        //handle error
      });
  }

  transferFunds = () => {
    this.setState({ showTransferPanel: true });
    //this.props.history.replace('/transfer-funds');
  };

  render() {
    const tabList = ['Donations', 'Transfers'];

    const donationsTab = <ul>
        {!this.state.donations && <p>No donations</p>}
        {this.state.donations && this.state.donations.map(
            (donation, index) => {
              return <li key={index}>{donation.donation_amount}</li>;
            }
          )}
      </ul>;

    const transfersTab = <ul>
      {
        !this.state.transfers  && <p>No transfers</p>
      }
      {this.state.transfers &&
        this.state.transfers.map((transfer, index) => {
          return <li key={index}>{transfer.transfer_description} -${transfer.transfer_amount}</li>;
        })}
      </ul>;

    return <div>
        <Alert intent="success" title="Congratulations! You have successfully created your community's fund" marginBottom={32} style={{ display: this.state.isSuccessful ? 'flex' : 'none' }} />
        <Pane>
          <h2>{this.state.fund_name}</h2>
          <h3>${this.state.fund_balance || '0.00'}</h3>
        </Pane>
        <SideSheet isShown={this.state.showTransferPanel} onCloseComplete={() => this.setState(
              { showTransferPanel: false }
            )}>
          <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
            <Pane padding={16}>
              <Heading size={600}>
                Transfer Funds from {this.state.fund_name}
              </Heading>
            </Pane>
          </Pane>
          <Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
            <Card backgroundColor="white" elevation={0} display="flex" alignItems="center" justifyContent="center" padding={16}>
              <TransferFunds fundId={this.state.fundId} name={this.state.fund_name} />
            </Card>
          </Pane>
        </SideSheet>
        {this.state.isLoggedIn && <Button justifyContent="center" height={48} marginBottom={`15px`} iconBefore="arrows-horizontal" onClick={this.transferFunds} className="submit-button">
            Transfer Funds
          </Button>}
        <Pane flex="1" background="tint1" padding={16}>
          <Card backgroundColor="white" elevation={0}>
            <Table>
              <Table.Body>
                {this.props.listItems.map(listItem => (
                  <Table.Row className="fund-profile" height={60}>
                    <Table.TextCell className="fund-profile-cell">
                      <p>
                        <label htmlFor={listItem.reference}>
                          <strong>{`${listItem.label}: `}</strong>
                        </label>
                        {this.state[listItem.reference]}
                      </p>
                    </Table.TextCell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Card>
        </Pane>
        <TabNavigation marginTop={10}>
          {tabList.map((tab, index) => (
            <Tab
              key={tab}
              is="a"
              href="#"
              id={tab}
              isSelected={this.state.selectedTabIndex === index}
              onClick={() => this.setState({ selectedTabIndex: index })}
              aria-controls={`panel-${tab}`}
            >
              {tab}
            </Tab>
          ))}
        </TabNavigation>
        <Pane padding={16} flex="1">
          {tabList.map((tab, index) => (
            <Pane
              key={tab}
              id={`panel-${tab}`}
              role="tabpanel"
              aria-labelledby={tab}
              aria-hidden={index !== this.state.selectedTabIndex}
              display={
                index === this.state.selectedTabIndex ? 'block' : 'none'
              }
            >
              <ul className="donations-list">
                {this.state.donations &&
                  this.state.donations.map((donation, index) => {
                  return (
                    <li key={index}><span>{`${donation.donation_merchant_name}: `}</span><span className="donation-amount">{`+ $${donation.donation_amount}`}</span></li>
                  );
                })}
              </ul>
              <Paragraph>Panel {tab}</Paragraph>
              {index == 0 ? donationsTab : ''}
              {index == 1 ? transfersTab : ''}
            </Pane>
          ))}
        </Pane>
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
