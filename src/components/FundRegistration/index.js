import React, { Component } from 'react';
import { TextInput, Textarea } from 'evergreen-ui';
import firebase from '../../util/firebase';

class FundRegistration extends Component {
  state = {
    fundRegistrationForm: {
      fund_name: '',
      fund_owner: '',
      fund_email: '',
      fund_description: '',
    }
  };

  onChange = (value, reference) => {
    this.setState({
      fundRegistrationForm: {
        ...this.state.fundRegistrationForm,
        [reference]: value,
      },
    });
  }

  handleSubmit = (e, history) => {
    e.preventDefault();

    const fund = {
      fund_name: this.state.fundRegistrationForm.fund_name,
      fund_owner: this.state.fundRegistrationForm.fund_owner,
      fund_email: this.state.fundRegistrationForm.fund_email,
      fund_description: this.state.fundRegistrationForm.fund_description
    }

    var addFund = firebase
      .addToCollection('funds', fund)
      .then(data => {
        const newFundId = data._key.path.segments[1];

        this.setState({
          fund_name: '',
          fund_owner: '',
          fund_email: '',
          fund_description: '',
        });

        this.props.history.replace(`/fund-profile/${newFundId}`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Fund Registration</h2>
          {this.props.inputs.map((input) => (
            <div key={input.reference}>
              <label htmlFor={input.reference}>{input.label}</label>
              <TextInput
                id={input.reference}
                value={this.state.fundRegistrationForm[input.reference]}
                type={input.type}
                required={true}
                onChange={e => this.onChange(e.target.value, input.reference)}
              />
            </div>
          ))}
          <label htmlFor="fund_description">Fund Description</label>
          <Textarea
            id="fund_description"
            onChange={e => this.onChange(e.target.value, 'fund_description')}
            value={this.state.fund_description}
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
      reference: 'fund_name',
      type: 'text',
    },
    {
      label: 'Owner Name',
      reference: 'fund_owner',
      type: 'text',
    },
    {
      label: 'Owner Email',
      reference: 'fund_email',
      type: 'email',
    },
  ]
};

export default FundRegistration;