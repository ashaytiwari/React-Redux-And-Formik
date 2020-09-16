import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'

function ReactCreditCard() {
    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvc, setCvc] = useState('')
    const [focus, setFocus] = useState('')

    return (
        <div className='rCard row'>
            <h4>React Credit Card</h4>
            <div className="col-md-6 cardForm">
                <form>
                    <h4>Credit Card Form</h4>
                    <input type='tel'
                    name='number'
                        required
                        placeholder='Card Number'
                        value={number}
                        onChange={(e => setNumber(e.target.value))} 
                        onFocus={e => setFocus(e.target.name)} />

                    <input type='text'
                    name='name'
                        required
                        placeholder='Full Name'
                        value={name}
                        onChange={(e => setName(e.target.value))} 
                        onFocus={e => setFocus(e.target.name)} />

                    <input type='expiry'
                    name='expiry'
                        required
                        placeholder='MM/YY Expiry'
                        value={expiry}
                        onChange={(e => setExpiry(e.target.value))} 
                        onFocus={e => setFocus(e.target.name)} />

                    <input type='tel'
                    name='cvc'
                        required
                        placeholder='cvc'
                        value={cvc}
                        onChange={(e => setCvc(e.target.value))} 
                        onFocus={e => setFocus(e.target.name)} />

                </form>
            </div>
            <div className="col-md-6" style={{marginTop: '30px'}}>
                <Cards 
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
                focused={focus} />
            </div>

        </div>
    )
}

export default ReactCreditCard
