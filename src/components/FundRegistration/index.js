import React, { Component } from 'react';
import { TextInput, Textarea } from 'evergreen-ui';

class FundRegistration extends Component {
  state = {
    form: {
      fundName: '',
      ownerName: '',
      ownerEmail: '',
      fundDescription: '',
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
          <h2>Fund Registration</h2>
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
            onChange={e => this.onChange(e.target.value, 'fundDescription')}
            value={this.state.fundDescription}
            required={true}
          />
          <button type="submit">Register Fund</button>
        </form>
      </div>
    );
  }
}

FundRegistration.defaultProps = {
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

export default FundRegistration;