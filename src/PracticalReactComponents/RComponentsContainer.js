import React from 'react'
import ReactIcons from './ReactIcons'
import ReactToastNotifications from './ReactToastNotifications'

function RComponentsContainer() {
    return (
        <div className="row well text-center">
            <h2>Practical React</h2>
            <div className="col-md-4">
                <ReactIcons />
            </div>

            <div className="col-md-4">
                <ReactToastNotifications />
            </div>

            <div className="col-md-4"></div>
        </div>
    )
}

export default RComponentsContainer
