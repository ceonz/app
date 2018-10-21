import React, { Component } from 'react';
import { Avatar, Button } from 'evergreen-ui';

class Homepage extends Component {
  handleCreateFundClick = () => {
    this.props.history.replace(`/credit-check`);
  }

  handleListFundsClick = () => {
    this.props.history.replace(`/funds/`);
  }

  render() {
    return <div className="homepage">
        <Avatar src="https://pbs.twimg.com/profile_images/915954899925467136/MQFzXfTQ_400x400.jpg" size={150} className="home-avatar" />
        <div className="homepage-buttons">
          <Button
            justifyContent="center"
            height={48}
            marginBottom={`15px`}
            iconBefore="bank-account"
            onClick={this.handleCreateFundClick}
            className="submit-button"
          >
            Start Your Community Fund
          </Button>
          <Button
            justifyContent="center"
            height={48}
            marginBottom={`15px`}
            iconBefore="th-list"
            onClick={this.handleListFundsClick}
            className="submit-button"
          >
            See List of Community Funds
          </Button>
        </div>
      </div>;
  }
}

export default Homepage;