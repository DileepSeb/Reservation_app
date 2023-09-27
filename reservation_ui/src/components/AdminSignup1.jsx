import axios from 'axios';
import React, { useState } from 'react'



const AdminSignup1 = () => {

    const [name, setName] = useState("");
    console.log(name)
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [aadhar, setAadhar] = useState("");
    const [password, setPassword] = useState("");
    let [gst,setGst]=useState("")
  let data={name,email,phone,aadhar,password,gst}
let handleSumbit=()=>{
  axios.post('http://localhost:8080/admins',data)
  .then((res)=>{
    alert("Submit sucessfully")
  })
.catch((err)=>{
    alert("invalid data")
})
}
    return (
        <div>
            <form action="">
                <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Enter Your Name' />
                <br /><br />
                <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter Your Email' />
                <br /><br />
                <input type="tel" value={phone} onChange={(e) => { setPhone(e.target.value) }} placeholder='Enter Your Phone Number' />
                <br /><br />
                <input type="date" value={date} onChange={(e) => { setDate(e.target.value) }} />
                <br /><br />
                <input type="tel" value={aadhar} onChange={(e) => { setAadhar(e.target.value) }} placeholder='Enter Your Aadhar Number' />
                <br /><br />
                <input type="text" value={gst}  onChange={(e)=>{ setGst(e.target.value)}} placeholder='enter gst number'/>
                <br /><br />
                <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter Your Password' />
                <br /><br />
                <button onClick={handleSumbit}>Submit</button>
            </form>
        </div>
    )
}

export default AdminSignup1