import React, { Component } from 'react';
import  { reduxForm, Field } from 'redux-form';

import FormTitle from '../formTitle';
import { FormInput, FormButton } from '../formFields';
import TextLink from '../textLink';

class SignupForm extends Component {
    render() {

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit}className='sign-up-form'>
                <FormTitle className='sign-up-form__title' text='New User' />
                <Field 
                className='sign-up-form__fullname' 
                placeholder='Enter Your Full Name' 
                component={FormInput} 
                name='fullname' 
                title="Full Name"
                type='text' />
                <Field 
                className='sign-up-form__unit' 
                placeholder='Enter Unit #' 
                component={FormInput} 
                name='unit' 
                title="Unit #"
                type='text' />
                <Field 
                className='sign-up-form__email' 
                placeholder='Enter Email' 
                component={FormInput} 
                name='email' 
                title="Email"
                type='email' />
                <Field 
                className='sign-up-form__password' 
                placeholder='Enter Password' 
                component={FormInput} 
                name='password' 
                title="Password"
                type='password' />
                <Field 
                className='sign-up-form__create-account' 
                component={FormButton} 
                name='createaccount' 
                title="Create Account"
                type='submit' />

                <div className="sign-up-form__text-links">
                    <TextLink to='/signin' text='Already Registered? Login'/>
                </div>
            </form>
        )
    }
}

SignupForm = reduxForm({
    form: 'signup'
})(SignupForm);

export default SignupForm;