import React, { Component } from 'react';
import { TextInput, Textarea } from 'evergreen-ui';

class CreditCheck extends Component {
  state = {
    form: {
      fundName: '',
      ownerName: '',
      ownerEmail: '',
    }
  };

  onChange = (value, reference) => {
    this.setState({
      form: {
        ...this.state.form,
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
            <div>
              <label htmlFor={input.reference}>{input.label}</label>
              <TextInput
                id={input.reference}
                value={this.state.form[input.reference]}
                type={input.type}
                required={true}
                onChange={e => this.onChange(e.target.value, input.reference)}
              />
            </div>
          ))}
          <label htmlFor="fundDescription">Fund Description</label>
          <Textarea
            id="fundDescription"
            onChange={e => this.setState({ fundDescription: e.target.value })}
            value={this.state.fundDescription}
            required={true}
          />
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