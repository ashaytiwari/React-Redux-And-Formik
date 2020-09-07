import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
        facebook: '',
        instagram: '',
        twitter: ''
    },
    phoneNo: ['', ''],
    phNo: ['']
}

// Saved values to load on the form on calling
const savedValues = {
    name: 'Ashay',
    email: 'ashaytiwari2001@gmail.com',
    channel: 'Code',
    comments: 'sd',
    address: 'nskfd',
    social: {
        facebook: 'sdf',
        instagram: 'ds',
        twitter: 'sd'
    },
    phoneNo: ['123', '345'],
    phNo: ['21']
}

const onSubmit = (values, onSubmitProps) => {
    console.log('Form data:-', values)
    console.log('form submission', onSubmitProps)
    onSubmitProps.setSubmitting(false);  
    onSubmitProps.resetForm();
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid email format').required('Required!'),
    channel: Yup.string().required('Required!'),
    comments: Yup.string().required('Required'),
    address: Yup.string().required('Required')
})

// Field level validation for social.facebook
const validateFacebook = values => {
    let error
    if (!values) {
        error = 'Required'
    }
    return error
}

function YoutubeForm() {
    const [formValues, setformValues] = useState(null)
    return (
        <div className="Youtube-form">
            <div className="row">

                <div className="col-md-2"></div>

                <div className="col-md-8 form">
                    {/* For manually triggering we pass form element as render props pattern */}
                    <Formik
                        initialValues={formValues || initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                        enableReinitialize>
                        {
                            formik => {
                                return (
                                    <Form>
                                        <div className="formGroup">
                                            <Field
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder="Name" />
                                            <ErrorMessage name='name' component={TextError} />
                                        </div>

                                        <div className="formGroup">
                                            <Field
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="Email" />
                                            <ErrorMessage name='email'>
                                                {
                                                    (errorMsg) => <div className="error"> {errorMsg} </div>
                                                }
                                            </ErrorMessage>
                                        </div>

                                        <div className="formGroup">
                                            <Field
                                                type="text"
                                                id="channel"
                                                name="channel"
                                                placeholder="Channel" />
                                            <ErrorMessage name='channel' component={TextError} />
                                        </div>

                                        <div className="formGroup">
                                            <Field
                                                as="textarea"
                                                type="text"
                                                id="comments"
                                                name="comments"
                                                placeholder="Comments" />
                                            <ErrorMessage name='comments' component={TextError} />
                                        </div>

                                        <div className="formGroup">
                                            <Field name="address">
                                                {
                                                    props => {
                                                        const { field, form, meta } = props
                                                        return (
                                                            <div>
                                                                <input id="address" type="text" placeholder="Address" {...field} />
                                                                {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
                                                            </div>
                                                        )
                                                    }
                                                }
                                            </Field>
                                        </div>

                                        {/* Field level validation applied */}
                                        <div className="formGroup">
                                            <Field
                                                type="text"
                                                id="facebook"
                                                name="social.facebook"
                                                validate={validateFacebook}
                                                placeholder="Facebook Profile" />
                                            <ErrorMessage name="social.facebook" component={TextError} />
                                        </div>

                                        <div className="formGroup">
                                            <Field
                                                type="text"
                                                id="instagram"
                                                name="social.instagram"
                                                placeholder="Instagram Profile" />
                                        </div>

                                        <div className="formGroup">
                                            <Field
                                                type="text"
                                                id="twitter"
                                                name="social.twitter"
                                                placeholder="Twitter Profile" />
                                        </div>

                                        <div className="formGroup">
                                            <Field
                                                type="text"
                                                id="primarNo"
                                                name="phoneNo[0]"
                                                placeholder="Primary No" />
                                        </div>

                                        <div className="formGroup">
                                            <Field
                                                type="text"
                                                id="secondaryNo"
                                                name="phoneNo[1]"
                                                placeholder="Secondary No" />
                                        </div>

                                        {/* <div className="formGroup">
                                <FieldArray name="phNo">
                                    {
                                        fieldArrayProps => {
                                            const {push, remove, form} = fieldArrayProps
                                            const {values} = form
                                            const {phNo} = values
                                            return <div>
                                                {
                                                    phNo.map((phNo, index) => ( 
                                                        <div key={index}>
                                                            <Field name={'phNo[${index}]'} />
                                                            <button type="button" onClick={() => remove(index)}>-</button>
                                                            <button type="button" onClick={() => push('')}>+</button>                                                           
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        }
                                    }
                                </FieldArray>
                            </div> */}

                                        <button type="button" onClick={() => formik.validateField('social.facebook')}>Validate Facebook</button>
                                        <button type="button" onClick={() => formik.validateForm()}>Validate all</button>
                                        <button type="button" onClick={() => formik.setFieldTouched('social.facebook')}>Visit Facebook</button>
                                        <button type="button" onClick={() => formik.setTouched({
                                            name: true,
                                            email: true,
                                            channel: true,
                                            comments: true,
                                            address: true,
                                            social: {
                                                facebook: true
                                            }
                                        })}>Visit all</button>

                                        {/* Reset data button */}
                                        <button type="reset">Reset</button>

                                        {/* Sve load data button */}
                                        <button type="button" onClick={() => setformValues(savedValues)}>Load saved data</button>

                                        {/* Disabling the submit button */}
                                        <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
                                    </Form>
                                )
                            }
                        }

                    </Formik>
                </div>

                <div className="col-md-2"></div>

            </div>

        </div>
    )
}

export default YoutubeForm
