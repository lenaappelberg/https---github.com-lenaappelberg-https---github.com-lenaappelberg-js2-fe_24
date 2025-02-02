import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts} from "../store/features/products/productSlice"
import  ProductList from "../components/ProductList";

const Home=()=> {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch]);

    const {products,error,loading}=useSelector((state)=>state.productList);
    if(error){
        return(
            <div>
                <p className="errormessage">
                    {error}
                </p>
            </div>
        )
    }
    if (!products || products.length === 0) {
        console.log("no products available");
        console.log(products)
        return <div>No products available!</div>;
      }
    return(
        <div>
            {
            loading
            ?<ProductList.Skeleton/>
            :<ProductList products={products}/>
            }
            
        </div>
    )
        
}
export default Home