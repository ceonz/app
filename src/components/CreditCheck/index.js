import React, { Component } from 'react';
import { TextInput, Textarea } from 'evergreen-ui';

class CreditCheck extends Component {
  state = {
    creditCheckForm: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      ssn: '',
      ccNumber: '',
    }
  };

  onChange = (value, reference) => {
    this.setState({
      creditCheckForm: {
        ...this.state.creditCheckForm,
        [reference]: value,
      },
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h2>Credit Check</h2>
          {this.props.inputs.map((input) => (
            <div key={input.reference}>
              <label htmlFor={input.reference}>{input.label}</label>
              <TextInput
                id={input.reference}
                value={this.state.creditCheckForm[input.reference]}
                type={input.type}
                required={true}
                onChange={e => this.onChange(e.target.value, input.reference)}
              />
            </div>
          ))}
          <button type="submit">Submit Credit Check</button>
        </form>
      </div>
    );
  }
}

CreditCheck.defaultProps = {
  inputs: [
    {
      label: 'First Name',
      reference: 'firstName',
      type: 'text',
    },
    {
      label: 'Last Name',
      reference: 'lastName',
      type: 'text',
    },
    {
      label: 'Email',
      reference: 'email',
      type: 'email',
    },
    {
      label: 'Phone',
      reference: 'phone',
      type: 'number',
    },
    {
      label: 'Social Security Number',
      reference: 'ssn',
      type: 'number',
    },
    {
      label: 'Credit Card Number',
      reference: 'ccNumber',
      type: 'number',
    },
  ]
};

export default CreditCheck;