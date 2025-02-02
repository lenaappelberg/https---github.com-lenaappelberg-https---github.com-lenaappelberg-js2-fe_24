const getAll= async()=>{
    const res= await fetch('https://js2-ecommerce-api.vercel.app/api/products')
    const data= await res.json();
    return data}
export default{
    getAll
}