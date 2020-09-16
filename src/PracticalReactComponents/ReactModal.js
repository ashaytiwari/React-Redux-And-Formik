import React, { useState } from 'react'
import Modal from 'react-modal'
import { BsX } from "react-icons/bs"

Modal.setAppElement('#root')
function ReactModal() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div className="rCard">
            <h4>React Modal</h4>
            <button className="rButton" type='button' onClick={() => setModalIsOpen(true)}>Open Modal</button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
            style={{
                overlay: {
                    backgroundColor: "teal"
                },
                content: {
                    color: "teal"
                }

            }}>
                <BsX className='modalClose' onClick={() => setModalIsOpen(false)}/>
                <h2>Modal Title</h2>
                <h4>Modal Body</h4>

            </Modal>
        </div>
    )
}

export default ReactModal
