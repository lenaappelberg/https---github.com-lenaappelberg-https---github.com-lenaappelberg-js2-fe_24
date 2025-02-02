import React, { Fragment, useState } from 'react'
import ReactDOM from 'react-dom';
import CartItems from './cartItems';
const Dropdown = ({ children}) => {
  const [isOpen, setIsOpen]=useState(false);

  return (
    <Fragment>
      {isOpen && <DropdownBg setIsOpen={setIsOpen}/>}
        <button onClick={()=> setIsOpen(state=>!state)}>
            {children}
        </button>
        {
          isOpen && (
            <div className='itemDropdown'>
              <div className='shoppingCartdiv'>
                <CartItems setIsOpen={setIsOpen}/>
              </div>
            </div>
          )
        }
    </Fragment>
  )
}

export default Dropdown

const DropdownBg=({setIsOpen}) => {
  return ReactDOM.createPortal((
    <div className='dropdown' onClick={()=> setIsOpen(false)}>
    </div>
  ),document.querySelector('#modal'))
}