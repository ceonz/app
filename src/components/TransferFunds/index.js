import React, { Component } from 'react';
import { TextInput, Textarea } from 'evergreen-ui';
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

  handleSubmit = (e, history) => {
    e.preventDefault();

    const fund = {
      fund_name: this.state.fundRegistrationForm.fund_name,
      fund_transfer_amount: this.state.fundRegistrationForm.fund_transfer_amount,
      fund_transfer_description: this.state.fundRegistrationForm.fund_transfer_description,
    }

    // const addFund = firebase
    //   .addToCollection('funds', fund)
    //   .then(data => {
    //     const newFundId = data._key.path.segments[1];

    //     this.setState({
    //       fund_name: '',
    //       fund_transfer_amount: '',
    //       fund_transfer_description: ''''
    //     });

    //     // this.props.history.replace(`/funds/${newFundId}`);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
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
          <button type="submit">Transfer Funds</button>
        </form>
      </div>;
  }
}

TransferFunds.defaultProps = {
  inputs: [
    {
      label: 'Transfer Amount',
      reference: 'fund_transfer_amount',
      type: 'number',
    }
  ]
};

export default TransferFunds;