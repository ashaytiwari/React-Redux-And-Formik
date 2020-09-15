import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const CustomToast = ({ closeToast }) => {
    return(
        <div>
            Something went wrong!
            <button onClick={closeToast}>Close</button>
        </div>
    )
}

toast.configure()
function ReactToastNotifications() {
    const notify1 = () => {
        toast('Basic Notifications', { position: toast.POSITION.TOP_CENTER })
        toast('Basic Notifications', { position: toast.POSITION.TOP_LEFT })
        toast('Basic Notifications', { position: toast.POSITION.TOP_RIGHT })
        toast('Basic Notifications', { position: toast.POSITION.BOTTOM_RIGHT })
        toast('Basic Notifications', { position: toast.POSITION.BOTTOM_LEFT })
        toast('Basic Notifications', { position: toast.POSITION.BOTTOM_CENTER })
    }
    const notify2 = () => {
        toast.warn('Warning Notifications', { position: toast.POSITION.TOP_CENTER })
        toast.success('Success Notifications', { position: toast.POSITION.TOP_LEFT })
        toast.info('Info Notifications', { position: toast.POSITION.TOP_RIGHT })
        toast.error('Error Notifications', { position: toast.POSITION.BOTTOM_RIGHT })
    }
    const notify3 = () => {
        toast.warn('Warning Notifications', { position: toast.POSITION.TOP_CENTER, autoClose:8000 })
        toast.error('Error Notifications', { position: toast.POSITION.BOTTOM_CENTER, autoClose: false })
    }
    const notify4 = () => {
        toast(<CustomToast />, { position: toast.POSITION.TOP_CENTER, autoClose:8000 })
        
    }

    return (
        <div className="rCard text-center">
            <h4>React Toast Notifications</h4>
            <button className='rButton' onClick={notify1}>Basic Notify!</button>
            <button className='rButton' onClick={notify2}>Type Notify!</button>
            <button className='rButton' onClick={notify3}>Autoclose Notify!</button>
            <button className='rButton' onClick={notify4}>CustomToast Notify</button>
        </div>
    )
}

export default ReactToastNotifications
