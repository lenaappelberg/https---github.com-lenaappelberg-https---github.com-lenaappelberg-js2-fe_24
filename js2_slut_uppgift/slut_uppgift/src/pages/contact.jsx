import { useState } from "react"
const Contacts=()=> {
    const[formData,setFormData]=useState({
        firstname:'',
        epostaddress:'',
        message:''
    })
    const [formerrors, setformerrors] = useState({})
    const handleChange=(e)=>{
        setFormData(data=>{
            return{...data,
                [e.target.id]: e.target.value
            }
        })
    }
    async function Contactmessage(firstname,epostaddress,message){
        const sendmessage= await fetch("https://js2-ecommerce-api.vercel.app/api/messages",{
            method:'POST',
            body:{
            "name":firstname,
            "email":epostaddress,
            "message":message
            }
        })
        try {
            const res=await sendmessage.json();
            return(
                <div className="popup">
                    <p>{res}</p>
                </div>
            )
        } catch (error) {
            console.log(error.message)
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        validate()
        if (validate()) {
            Contactmessage(formData.firstname,formData.epostaddress,formData.message)
        }
    }
    const validate=()=>{
        let errors={};
        if(formData.firstname.trim()===''){
            setformerrors(err=>({
                ...err,
                firstname:'You need to enter a firstname'
            }))
        }
        if(formData.epostaddress.trim()===''){
            setformerrors(err=>({
                ...err,
                epostaddress:'You need to enter a epostaddress'
            }))
        }
        if(formData.message.trim()===''){
            setformerrors(err=>({
                ...err,
                message:'You need to enter a message'
            }))
        }
        setformerrors(errors);
    return Object.keys(errors).length === 0;
    }
    return(
        <div className="contactcontainer">
        <h1>
            Contact us
        </h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor=""value={formData.name} onChange={handleChange} id='name'>Name</label>
            <input type="text" />
            {formerrors.firstname&&<p>error</p>}
            </div>
            <div className="form-group">
            <label htmlFor=""value={formData.email} id='email'>Epostaddress</label>
            <input type="text" />
            {formerrors.epostaddress&&<p>error</p>}
            </div>
            <div className="form-group">
            <label htmlFor=""value={formData.message} id='message'>Message</label>
            <input type="text" />
            </div>
            <button>Send</button>
        </form>
        </div>
    )
}
export default Contacts