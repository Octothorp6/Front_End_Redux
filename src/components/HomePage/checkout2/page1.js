import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderTextField from './renderField'

const FirstPage = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="userFirst"
        type="text"
        component={renderTextField}
        label="First Name"
      />
      <Field
        name="userLast"
        type="text"
        component={renderTextField}
        label="Last Name"
      />
      <Field
        name="UserEmail"
        type="email"
        component={renderTextField}
        label="Email"
      />
      <Field
        name="shippingAddress1"
        type="text"
        component={renderTextField}
        label="Shipping Address1"
      />
      <Field
        name="shippingAddress2"
        type="text"
        component={renderTextField}
        label="Shipping Address2"
      />
      <Field
        name="userLast"
        type="text"
        component={renderTextField}
        label="Last Name"
      />
      <div>
        <button type="submit" className="next">
          Next
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'wizard', 
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, 
  validate
})(FirstPage)