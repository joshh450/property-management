import React, { Component } from 'react';
import  { reduxForm, Field } from 'redux-form';

import FormTitle from '../formTitle';
import { FormInput, FormButton } from '../formFields';
import TextLink from '../textLink';

class SigninForm extends Component {

    render() {

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className='sign-in-form'>
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
                <Field 
                className='sign-in-form__login' 
                component={FormButton} 
                name='login' 
                title="Login"
            />
                <div className="sign-in-form__text-links">
                <TextLink to='/forgot' text='Forgot Password'/>
                <TextLink to='/signup' text='Not a member? Register here'/>
                </div>
            </form>
        )
    }
}

SigninForm = reduxForm({
    form: 'signin'
})(SigninForm);

export default SigninForm;