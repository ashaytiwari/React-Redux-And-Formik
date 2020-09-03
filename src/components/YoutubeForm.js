import React from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray} from 'formik'
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

const onSubmit = values => {
    console.log('Form data:-', values)

}

const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid email format').required('Required!'),
    channel: Yup.string().required('Required!'),
    comments: Yup.string().required('Required'),
    address: Yup.string().required('Required')
})

function YoutubeForm() {

    return (
        <div className="Youtube-form">
            <div className="row">

                <div className="col-md-2"></div>

                <div className="col-md-8 form">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}>
                        <Form>
                            <div className="formGroup">
                                <Field
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Name" />
                                <ErrorMessage  name='name' component={TextError} />
                            </div>

                            <div className="formGroup">
                                <Field
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email" />
                                <ErrorMessage  name='email'>
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
                                <ErrorMessage  name='channel' component={TextError}/>
                            </div>

                            <div className="formGroup">
                                <Field 
                                as="textarea"
                                type="text"
                                id="comments"
                                name="comments"
                                placeholder="Comments" />
                                <ErrorMessage  name='comments' component={TextError}/>
                            </div>
                            
                            <div className="formGroup">
                                <Field name="address">
                                    {
                                        props => {
                                            const { field, form, meta} = props
                                            return (
                                                <div>
                                                    <input id="address" type="text" placeholder="Address" {...field} />
                                                    {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null }
                                                </div>
                                            )
                                        }
                                    }
                                </Field>
                            </div>

                            <div className="formGroup">
                                <Field 
                                type="text"
                                id="facebook"
                                name="social.facebook"
                                placeholder="Facebook Profile" />
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
                            

                            <button type="submit">Submit</button>
                        </Form>
                    </Formik>
                </div>

                <div className="col-md-2"></div>

            </div>

        </div>
    )
}

export default YoutubeForm
