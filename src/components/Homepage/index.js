import React, { Component } from 'react';
import { Avatar } from 'evergreen-ui';

class Homepage extends Component {

  render() {
    return (
      <div className="homepage">
        <Avatar
          src="https://pbs.twimg.com/profile_images/915954899925467136/MQFzXfTQ_400x400.jpg"
          size={150}
          className="home-avatar"
        />
        <div className="homepage-buttons">
          <button type="submit"><a href="/credit-check">Start Credit Check</a></button>
          <button type="submit"><a href="/register">Create A Fund</a></button>
          <button type="submit"><a href="/fund-profile">See List of Funds</a></button>
        </div>
        <div className="credits">
          <h3>Created by:</h3>
          <ul>
            <li>Kate Eldridge</li>
            <li>Gil Greenberg</li>
            <li>Kyle Leighton</li>
            <li>Ethan Yehuda</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Homepage;