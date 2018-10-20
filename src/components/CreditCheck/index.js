import React, { Component } from 'react';
import { TextInput } from 'evergreen-ui';

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
          {this.props.inputs.map((input) => (
            <TextInput
              id={input.reference}
              // value={this.state.form[input.reference]}
              type={input.type}
              required={true}
            />
          ))}
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