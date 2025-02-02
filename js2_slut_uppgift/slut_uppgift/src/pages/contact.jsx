import { useState } from "react"
const Contacts=()=> {
    const[formData,setFormData]=useState({
        firstname:'',
        email:'',
        message:''
    })
    const [submissionStatus,setSubmissionStatus]=useState(null)
    const [formerrors, setformerrors] = useState({})
    const handleChange=(e)=>{
        setFormData(data=>{
            return{...data,
                [e.target.id]: e.target.value
            }
        })
    }
    async function Contactmessage(firstname,epostaddress,message){
        console.log(firstname,epostaddress,message)
        const sendmessage= await fetch("https://js2-ecommerce-api.vercel.app/api/messages",{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
            "name":firstname,
            "email":epostaddress,
            "message":message
            })
        })
        try {
            const res=await sendmessage.json();
            console.log(res)
            if (res.message==="Message sent successfully") {
                setSubmissionStatus("success");
                console.log("ok")
            }
        } catch (error) {
            console.log(error.message)
            setSubmissionStatus("error");
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setSubmissionStatus(null);
        if (validate()) {
            Contactmessage(formData.firstname,formData.email,formData.message)
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
        if(formData.email.trim()===''){
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
            <label htmlFor="firstname">Name</label>
            <input type="text" value={formData.firstname} onChange={handleChange} id='firstname'/>
            {formerrors.firstname&&<p>error</p>}
            </div>
            <div className="form-group">
            <label htmlFor="email">Epostaddress </label>
            <input type="text"value={formData.email} onChange={handleChange} id='email'/>
            {formerrors.epostaddress&&<p>error</p>}
            </div>
            <div className="form-group">
            <label htmlFor="message">Message</label>
            <input type="text"value={formData.message} onChange={handleChange} id='message' />
            {formerrors.message&&<p>error</p>}
            </div>
            <button>Send</button>
            {submissionStatus==="success" &&<p>message sent successfully</p>}
            {submissionStatus==="error"&&<p>failed to send message</p>}
        </form> 
        </div>
    )
}
export default Contacts