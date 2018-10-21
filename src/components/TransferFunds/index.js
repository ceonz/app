import React, { Component } from 'react';
import { TextInput, Textarea, Button } from 'evergreen-ui';
import firebase from '../../util/firebase';

class TransferFunds extends Component {
  state = {
    fundRegistrationForm: {
      fund_name: '',
      fund_transfer_amount: '',
      fund_transfer_description: ''
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

  handleSubmit = (e) => {
    e.preventDefault();

    const transfer = {
      fundId: this.props.fundId,
      transfer_amount: this.state.fundRegistrationForm.fund_transfer_amount,
      transfer_description: this.state.fundRegistrationForm.fund_transfer_description,
    }

    const addTransfer = firebase
      .addToCollection('transfers', transfer)
      .then(data => {
        console.log('success');
        console.log(data);
        this.setState({
          fundRegistrationForm: {
            fund_transfer_amount: '',
            fund_transfer_description: '',
          }
        })

        // close panel
        // this.props.closeSidePanel();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="fund_id">Fund ID</label>
          <TextInput name="fund_id" type="text" value={this.props.fundId} disabled />
          {this.props.inputs.map(input => <div key={input.reference}>
              <label htmlFor={input.reference}>{input.label}</label>
              <TextInput id={input.reference} value={this.state.fundRegistrationForm[input.reference]} type={input.type} required={true} onChange={e => this.onChange(e.target.value, input.reference)} />
            </div>)}
          <label htmlFor="fund_transfer_description">
            Transfer Description
          </label>
          <Textarea id="fund_transfer_description" onChange={e => this.onChange(e.target.value, 'fund_transfer_description')} value={this.state.fund_transfer_description} required={true} />
          <Button
            justifyContent="center"
            height={48}
            marginBottom={`15px`}
            iconBefore="arrows-horizontal"
            onClick={this.props.transferFunds}
            className="submit-button"
          >
          Transfer Funds
          </Button>
        </form>
      </div>;
  }
}

TransferFunds.defaultProps = {
  inputs: [
    {
      label: 'Transfer Amount',
      reference: 'fund_transfer_amount',
      type: 'text',
    }
  ]
};

export default TransferFunds;