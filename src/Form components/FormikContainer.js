import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikComponent from './FormikComponent'

function FormikContainer() {

    const initialValues = {
        email: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().required('Required').email('Invalid Email Format')
    })

    const onSubmit = values => {
        console.log('Form values', values)
    }

    return (
        <div className='Youtube-form'>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 form">
                    <Formik 
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit} >
                        {
                            formik => (
                                <Form>
                                    <FormikComponent 
                                    control='input' 
                                    type='email' 
                                    label='Email' 
                                    name='email' />
                                    <button type="submit">Submit</button>
                                </Form>
                            )}
                    </Formik>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    )
}

export default FormikContainer
