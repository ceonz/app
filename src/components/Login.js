import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is Required'),
    name: Yup.string()
        .required('Name is Required'),
    location: Yup.string()
        .required('Location is Required'),
    description: Yup.string()
        .required('Description is Required'),
})

class Login extends Component {
    render() {
        return (
            <div>Test</div>
        );
    }
}

export default Login;
