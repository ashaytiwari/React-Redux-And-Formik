import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikComponent from './FormikComponent'

function FormikContainer() {

    const dropdownOptions = [
        { key: 'Select a country', value: '' },
        { key: 'India', value: 'India' },
        { key: 'America', value: 'America' },
        { key: 'Australia', value: 'Australia' },
        { key: 'Sweden', value: 'Sweden' }
    ]

    const radioOptions = [
        { key: 'Frontend', value: 'Frontend' },
        { key: 'Backend', value: 'Backend' },
        { key: 'Fullstack', value: 'Fullstack' }
    ]

    const checkboxOptions = [
        { key: 'Html/Css', value: 'Html/Css' },
        { key: 'JS', value: 'JS' },
        { key: 'React', value: 'React' },
        { key: 'NodeJs', value: 'NodeJs' },
    ]

    const initialValues = {
        email: '',
        description: '',
        selectOption: '',
        radioOption: '',
        checkboxOption: [],
        dateOfBirth: null
    }

    const validationSchema = Yup.object({
        email: Yup.string().required('Required').email('Invalid Email Format'),
        description: Yup.string().required('Required'),
        selectOption: Yup.string().required('Required'),
        radioOption: Yup.string().required('Required'),
        checkboxOption: Yup.array().required('Required'),
        dateOfBirth: Yup.date().required('Required').nullable()
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

                                    <FormikComponent
                                        control='select'
                                        label='Select Country'
                                        name='selectOption'
                                        options={dropdownOptions} />

                                    <FormikComponent
                                        control='radio'
                                        label='Select Domain'
                                        name='radioOption'
                                        options={radioOptions} />

                                    <FormikComponent
                                        control='checkbox'
                                        label='Select tech'
                                        name='checkboxOption'
                                        options={checkboxOptions} />

                                        <FormikComponent 
                                        control='date'
                                        label="Select Date of Birth"
                                        name='dateOfBirth' />

                                    <button type="submit" className="teal-btn">Submit</button>
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
