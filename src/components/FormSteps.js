import React, { Component } from 'react';
import { Pane, SegmentedControl } from 'evergreen-ui';

class FormSteps extends Component {
    render() {
        const options =
        [
            { label: 'Credit Check', value: 'credit' },
            { label: 'Fund Registration', value: 'info' }
        ];

        const optionValue = (this.props.step || 1) - 1;

        return <Pane display="flex" justifyContent="center" marginTop={`20px`} marginBottom={`20px`}>
            <SegmentedControl width={240} options={options} value={options[optionValue].value} />
          </Pane>;
    }
}

export default FormSteps;