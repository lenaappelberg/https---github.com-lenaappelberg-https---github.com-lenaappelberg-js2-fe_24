import React from 'react'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addToCart, removeItem, removeOne } from '../store/features/shoppingCart/shoppingCartSlice'

const Shoppingitem = ({item}) => {
  const dispatch=useDispatch()
  const addOneToCart=()=>{
    dispatch(addToCart(item.product))
  }
  const removeOneFromCart=()=>{
    dispatch(removeOne(item.product._id))
  }
  const removeItemFromCart=()=>{
    dispatch(removeItem(item.product._id))
  }
  return (
    <div className='Cartitembox'>
      <div className='cartitemcenter'>
        <div>
          <img src={item.product.images[0]} className='imgcartitem' alt="" />
        </div>
        <div>
          <p className='titleshoppingcart'>{item.product.title}</p>
          <p className='smalltext'> {item.quantity} x {item.product.price}</p>
        </div>
      </div>
      <div className='rightshoppingcart'>
        <div>
          <button onClick={removeOneFromCart} className='cartbtn'><FaMinus className='smallbtn'/></button>
          <button onClick={addOneToCart} className='cartbtn'><FaPlus className='smallbtn'/></button>
        </div>
        <button onClick={removeItemFromCart}><FaTrash/></button>
      </div>
    </div>
  )
}

export default Shoppingitem