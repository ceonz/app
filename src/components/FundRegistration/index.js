import React, { Component } from 'react';
import { FormField, TextInput, Textarea, Button } from 'evergreen-ui';
import firebase from '../../util/firebase';
import FormSpinner from '../FormSpinner';
import FormSteps from '../FormSteps';
import {Icon} from 'evergreen-ui';

class FundRegistration extends Component {
  state = {
    fundRegistrationForm: {
      fund_name: '',
      fund_location: '',
      fund_owner: '',
      fund_email: '',
      fund_description: '',
      fund_password: '',
    },
    isLoading: false
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
      fund_location: this.state.fundRegistrationForm.fund_location,
      fund_owner: this.state.fundRegistrationForm.fund_owner,
      fund_email: this.state.fundRegistrationForm.fund_email,
      fund_description: this.state.fundRegistrationForm.fund_description,
      fund_password: this.state.fundRegistrationForm.fund_password
    }

    const addFund = firebase
      .addToCollection('funds', fund)
      .then(data => {
        const newFundId = data._key.path.segments[1];

        this.setState({
          fund_name: '',
          fund_location: '',
          fund_owner: '',
          fund_email: '',
          fund_description: '',
          fund_password: '',
        });

        this.setState({isLoading: true});
        setTimeout(function(){
            this.setState({isLoading: false});
            this.props.history.replace(`/funds/${newFundId}`);
        }.bind(this),1000);
        })

      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const registerForm = <>
        <FormSteps step="2" />
        <form onSubmit={this.handleSubmit}>
          <h2>Fund Registration</h2>
          {this.props.inputs.map(input => (
            <React.Fragment key={input.reference}>
              <FormField label={input.label}>
                <TextInput
                  id={input.reference}
                  value={this.state.fundRegistrationForm[input.reference]}
                  type={input.type}
                  required={true}
                  onChange={e =>
                    this.onChange(e.target.value, input.reference)
                  }
                  placeholder={input.placeholder || ''}
                />
              </FormField>
            </React.Fragment>
          ))}
        <FormField className="fund_description" label='Fund Description'>
          <Textarea onChange={e => this.onChange(e.target.value, 'fund_description')} value={this.state.fund_description} required={true} />
        </FormField>
        <Button
          justifyContent="center"
          height={48}
          marginBottom={`15px`}
          iconBefore="form"
          onClick={this.handleCreateFundClick}
          className="submit-button"
        >
          Register Fund
        </Button>
        </form>
      </>;
    return <div>
        {this.state.isLoading ? <FormSpinner text={`Creating Community Fund...`} /> : registerForm}
      </div>;
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
      label: 'Fund Location',
      reference: 'fund_location',
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
    {
      label: 'Password',
      reference: 'fund_password',
      type: 'password',
    },
  ]
};

export default FundRegistration;