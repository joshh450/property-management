import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import FormTitle from "../formTitle";
import { FormInput, FormButton, FormTextArea, FormImage } from "../formFields";

class NewNewsletterForm extends Component {
  
  render() {

    const { handleSubmit, formTitle, newsletterToEdit } = this.props;
    
    var title = null;
    var body = null;
    var imageURL = null;
    if(newsletterToEdit) {
      title = newsletterToEdit.title;
      body = newsletterToEdit.body;
      imageURL = newsletterToEdit.imageURL;

    }

    return (
      <form onSubmit={handleSubmit} className="new-newsletter-form">
        <FormTitle className="new-newsletter-form__title" text={formTitle} />
        <Field
          className="new-newsletter-form__newsletter-title"
          placeholder="Newsletter Title"
          name="title"
          type="text"
          title="Newsletter Title"
          component={FormInput}
          editValue={title ? title : null}
        />

        <Field
          className="new-newsletter-form__body"
          placeholder="Newsletter Body"
          name="body"
          type="text"
          title="Newsletter Body"
          component={FormTextArea}
          editValue={body ? body : null}
        />

         <Field 
          className='new-newsletter-form__submit'
          small={true}
          danger={true}
          name='Submit' 
          component={FormButton} 
          title="Submit"/>

         <Field 
          className='new-newsletter-form__cancel'
          small={true}
          name='cancel'
          type="button"
          component={FormButton}  
          title="Cancel"
          onClick={this.props.onCancel}/>

        <Field
          className="new-newsletter-form__image"
          small={true}
          name="image"
          type="file"
          title="Image"
          component={FormImage}
          imageURL={imageURL}
        /> 

      </form>
    );
  }
}

NewNewsletterForm = reduxForm({
  form: "newnewsletter"
})(NewNewsletterForm);

export default NewNewsletterForm;