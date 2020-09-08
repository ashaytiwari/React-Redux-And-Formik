import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

function FormikContainer() {
    const initialValues = {}
    const validationSchema = Yup.object({})
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
                                    <submit type="submit">Submit</submit>
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
