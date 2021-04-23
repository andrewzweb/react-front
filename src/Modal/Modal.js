import { useState } from 'react'; 
import './Modal.css'

const Modal = () => {
  const [isOpen, toggleOpen] = useState(false)
  
    return(
      <>
        <button className='modalButton' onClick={() => toggleOpen(true)}>Open Modal</button>
        {isOpen && (
          <div className='modal'>
            <div className='modal-body'>
              <h1>Modal</h1>
              <p>Congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Nunc, consequat interdum varius sit amet, mattis?</p>
              <button className='modalButton' onClick={() => toggleOpen(false)}>Close</button>
            </div>
          </div>
        )}
      </>
    )
}

export default Modal
