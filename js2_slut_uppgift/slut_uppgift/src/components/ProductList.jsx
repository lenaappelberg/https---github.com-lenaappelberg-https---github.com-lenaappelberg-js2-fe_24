import React from 'react'
import Productcard from './Productcard'

const ProductList = ({products}) => {
  
 
  return (
    <div className='product-layout'>
        {
        products.map(product=>(
            <Productcard key={product._id} product={product}/>
        ))
        }
    </div>
  )
}
ProductList.Skeleton=()=>{
    return(
        <div className='product-layout'>

        </div>
    )
}

export default ProductList