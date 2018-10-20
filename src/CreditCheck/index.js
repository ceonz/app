import React, { Component } from 'react';

class CreditCheck extends Component {
  state = {
    form: {
      fundName: '',
      ownerName: '',
      ownerEmail: '',
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h2>Credit Check</h2>
          <input></input>
          <button type="submit">Button</button>
        </form>
      </div>
    );
  }
}

CreditCheck.defaultProps = {
  inputs: [
    {
      label: 'Fund Name',
      reference: 'fundName',
      type: 'text',
    },
    {
      label: 'Owner Name',
      reference: 'ownerName',
      type: 'text',
    },
    {
      label: 'Owner Email',
      reference: 'ownerEmail',
      type: 'email',
    },
  ]
};

export default CreditCheck;