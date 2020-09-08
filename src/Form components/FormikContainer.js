import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikComponent from './FormikComponent'

function FormikContainer() {

    const initialValues = {
        email: '',
        description: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().required('Required').email('Invalid Email Format'),
        description: Yup.string().required('Required')
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

                                    <FormikComponent 
                                    control='textarea'  
                                    label='Description' 
                                    name='description' />

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
