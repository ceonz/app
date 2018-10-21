import React, { Component } from 'react';
import { Pane, Spinner } from 'evergreen-ui';

class FormSpinner extends Component {
    render() {
        return (
            <Pane display="flex" alignItems="center" justifyContent="center" flexDirection="column" height={400}>
                <Spinner marginBottom="20px" />
                {this.props.text}
            </Pane>
        )
    }
}

export default FormSpinner;