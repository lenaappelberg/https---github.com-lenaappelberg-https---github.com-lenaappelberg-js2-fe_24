import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router"
import { addToCart } from "../store/features/shoppingCart/shoppingCartSlice"

const ProductDetails=()=> {
    const {productid}=useParams()
    const [product,setProduct]=useState(null)
    const[error,setError]=useState(null)
    const [loading,setLoading]=useState(false)
    const dispatch=useDispatch()
    useEffect(()=>{
        const getProduct=async ()=>{
            setLoading(true)
            try {
                const res=await fetch(`https://js2-ecommerce-api.vercel.app/api/products/${productid}`)
                const data= await res.json()
                console.log(data)
                setProduct(data)
            } catch (error) {
                setError('something went wrong')
                console.log(error.message)
            }finally{
                setLoading(false)
            }
        }
        getProduct()
        console.log(product)
    },[productid]);
    const handleClick=()=>{
        dispatch(addToCart(product))
    };
    if (error) {
        return(
        <div>
            <p>{error}</p>
        </div>
        )
    }
    if (loading || !product) {
        return(
            <div>
                <p>
                    loading
                </p>
            </div>
        )
    }
    return(
        <div className="product">
            <h1 className="shoptitle">SHOP</h1>
            <img src={product.images[0]} alt="" />
            <div>
                <h3>{product.className}</h3>
                <p>{product.description}</p>
                <p>{product.price}SEK</p>
                <button onClick={handleClick} className="cartbtn">Add to cart</button>
                </div>
        </div>
    )
}
export default ProductDetails