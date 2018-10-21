import React, { Component } from 'react';
import { FormField, TextInput, Textarea, Button } from 'evergreen-ui';
import FormSpinner from '../FormSpinner';
import FormSteps from '../FormSteps';

class CreditCheck extends Component {
  state = {
    creditCheckForm: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      ssn: '',
      ccNumber: '',
    },
    isLoading: false,
  };

  saveCreditCheckForm = creditCheckForm => {
    this.setState({
      creditCheckForm: {
        ...this.state.creditCheckForm,
        ...creditCheckForm
      }
    });
  }

  onChange = (value, reference) => {
    this.setState({
      creditCheckForm: {
        ...this.state.creditCheckForm,
        [reference]: value,
      },
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });

    setTimeout(function () {
      this.setState({ isLoading: false });
      this.props.history.replace('/register');
    }.bind(this), 1000);
  };

  render() {
    const registerForm = <>
        <FormSteps step="1" />
        <form onSubmit={this.handleSubmit}>
          <h2>Credit Check</h2>
          {this.props.inputs.map(input =>
            <React.Fragment key={input.reference}>
              <FormField label={input.label}>
              <TextInput
                id={input.reference}
                value={this.state.creditCheckForm[input.reference]}
                type={input.type}
                required={true}
                onChange={e => this.onChange(e.target.value, input.reference)}
                placeholder={input.placeholder || '' }
              />
              </FormField>
            </React.Fragment>)}
            <Button
              justifyContent="center"
              height={48}
              marginBottom={`15px`}
              iconBefore="credit-card"
              onClick={this.handleCreateFundClick}
              className="submit-button"
            >
              Submit your credit check
              </Button>
        </form>
      </>;

    return <div>
        {this.state.isLoading ? <FormSpinner text={`Checking Credit Score...`} /> : registerForm}
      </div>
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