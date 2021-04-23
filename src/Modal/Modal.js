import React from 'react'
import './Modal.css'

class Modal extends React.Component{
  state = {
    isOpen: false
  }
  
  render(){
    return(
      <React.Fragment>
        <button className='modalButton' onClick={() => this.setState({isOpen: true})}>Open Modal</button>
        {this.state.isOpen && (
          <div className='modal'>
            <div className='modal-body'>
              <h1>Modal</h1>
              <p>Congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Nunc, consequat interdum varius sit amet, mattis?</p>
              <button className='modalButton' onClick={() => this.setState({isOpen: false})}>Close</button>
            </div>
          </div>
        )}
      </React.Fragment>
    )
  }
}

export default Modal
