import { Button } from 'evergreen-ui';
import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Link } from 'react-router-dom';

class GoHomeButton extends Component {

  handleGoHomeClick = () => {
    window.location.href = '/home';
  }

  render() {
    return (
      <Button
        justifyContent="center"
        height={48}
        marginBottom={`15px`}
        iconBefore="home"
        onClick={this.handleGoHomeClick}
        className="submit-button home-return"
      >
        Go to Home Page
      </Button>
    );
  };
}

export default GoHomeButton;
