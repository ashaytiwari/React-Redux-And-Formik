import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../components/TextError'

function input(props) {
    const { label, name, ...rest } = props
    return (
        <div className="formGroup">
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}

export default input
