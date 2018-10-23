import React, { Component } from 'react';
import  { reduxForm, Field } from 'redux-form';

import FormTitle from '../formTitle';
import { FormInput } from '../formFields';

class SigninForm extends Component {
    render() {
        return (
            <form className='sign-in-form'>
                <FormTitle className='sign-in-form__title' text='login' />
                <Field 
                className='sign-in-form__email' 
                placeholder='Enter Email' 
                component={FormInput} 
                name='email' 
                title="Email"
                type='email' />
                <Field 
                className='sign-in-form__password' 
                placeholder='Enter Password' 
                component={FormInput} 
                name='password' 
                title="Password"
                type='password' />
            </form>
        )
    }
}

SigninForm = reduxForm({
    form: 'signin'
})(SigninForm);

export default SigninForm;