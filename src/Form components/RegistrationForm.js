import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikComponent from './FormikComponent'

// This is the demo registartion form by using formik and yup library
function RegistrationForm() {

    //options for radio button
    const radioOptions = [
        { key: 'Telephone', value: 'TelephoneMOC' },
        { key: 'Email', value: 'EmailMOC' },
    ]

    // InitialValues for form
    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        modeOfContact: '',
        phoneNo: ''
    }

    // Validation schema for validating the form on different criterion
    const validationSchema = Yup.object({
        email: Yup.string()
            .required('Required')
            .email('Invalid email format'),
            password: Yup.string()
            .required("Please enter your password")
            .matches(
              /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
              "Password must contain at least 8 characters, one uppercase, one number and one special case character"
            ),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), ''], 'Password not match')
            .required("Please confirm your password"),
        modeOfContact: Yup.string().required('Required'),
        phoneNo: Yup.string().when('modeOfContact', {
                is: 'TelephoneMOC',
                then: Yup.string().required('Required')
            })
    })

    // After submission form values will be loged in console
    const onSubmit = values => {
        console.log('Form values', values)
    }

    // Jsx for Registartion form
    return (
        <div className="Youtube-form">
            <div className="row">
                <div className="col-md-2"></div>

                <div className="col-md-8 form">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}>
                        {
                            formik => {
                                return <Form>
                                    <FormikComponent
                                        control="input"
                                        type="email"
                                        label="Email"
                                        name="email" />

                                    <FormikComponent
                                        control="input"
                                        type="password"
                                        label="Password"
                                        name="password" />

                                    <FormikComponent
                                        control="input"
                                        type="password"
                                        label="Confirm Password"
                                        name="confirmPassowrd" />

                                    <FormikComponent
                                        control="radio"
                                        label="Mode of Contact"
                                        name="modeOfContact"
                                        options={radioOptions} />

                                    <FormikComponent
                                        control="input"
                                        label="Phone Number"
                                        name="phoneNo"
                                        type="text"/>

                                    <button type="submit" className="teal-btn">Submit</button>
                                </Form>
                            }
                        }
                    </Formik>
                </div>

                <div className="col-md-2"></div>
            </div>
        </div>
    )
}

export default RegistrationForm
