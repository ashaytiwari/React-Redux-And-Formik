import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../components/TextError'

function RadioButtons(props) {
    const { name, label, options, ...rest } = props
    return (
        <div className="formGroup">
            <label>{label}</label>
            <Field name={name} {...rest}>
                {
                    ({field}) => {
                        return options.map(option => {
                            return (
                                <div key={option.key}>
                                    <input 
                                    type="radio" 
                                    id={option.value} 
                                    {...field} 
                                    value={option.value} 
                                    checked={field.value === option.value} />
                                    <label htmlFor={option.value} className="radio-label">{option.key}</label>
                                </div>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default RadioButtons
