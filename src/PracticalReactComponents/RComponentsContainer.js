import React from 'react'
import ReactIcons from './ReactIcons'
import ReactToastNotifications from './ReactToastNotifications'
import ReactModal from './ReactModal'
import ReactCreditCard from './ReactCreditCard'


function RComponentsContainer() {
    return (
        <React.Fragment>
        <div className="row well text-center">
            <h2>Practical React</h2>
            <div className="col-md-4">
                <ReactIcons />
            </div>

            <div className="col-md-4">
                <ReactToastNotifications />
            </div>

            <div className="col-md-4">
                <ReactModal />
            </div>
            
            <div className='row text-center'>
                <div className="col-md-12">
                <ReactCreditCard />
                </div>
            </div>
        </div>
       
        
        </React.Fragment>
    )
}

export default RComponentsContainer
