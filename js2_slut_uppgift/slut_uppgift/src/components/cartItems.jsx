import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'
import Shoppingitem from './Shoppingitem'
import { clearCart } from '../store/features/shoppingCart/shoppingCartSlice'


const CartItems = ({setIsOpen,isCheckoutPage}) => {
  const{cart,totalPrice}=useSelector(state=>state.shoppingCart)
  const dispatch=useDispatch()
  return (
    <div>
      <div className=''>
      {cart.length<=0 && (
            <div>
              <p>your cart is empty</p>
            </div>
          )}
          {
            cart.map(item=>{console.log(cart)
            return(
              <Shoppingitem key={'cart_'+item.product._id} item={item}/>
            )
            })
          }
      </div>
      <div className='checkoutitems'>
        <div>
          <p>Total:{totalPrice}</p>
          <p>inc tax</p>
        </div>
        {
          isCheckoutPage
          ?<button onClick={()=>dispatch(clearCart())}>Place order</button>
          :<Link onClick={()=>setIsOpen(false)} to="/checkout" className="checkoutText">Checkout</Link>
        }
      </div>
    </div>
  )
}

export default CartItems