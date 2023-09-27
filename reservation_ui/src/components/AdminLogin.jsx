import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/adminlogin.css'

const AdminLogin = () => {
    const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  console.log(phone)
  let navigate = useNavigate()

  let Login=(e)=>{
    e.preventDefault()
    axios.post(`http://localhost:8080/admin/verify-by-phone?phone=${phone}&password=${password}`)
    .then((res) => {
      localStorage.setItem("admin",JSON.stringify(res.data.data))
      alert("Login Sucess")
      navigate('/adminhomepage');
    }).catch((err) => {
      alert("Invalid Data")
      console.log(err);
    })
}
  return (
    
<div className='userlogin'>
    hello
      <form action="">
        <br />
        <br />
        <input type="email" value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder='Enter the your phone number' className='input1'/>
        <br /><br />
        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter the Password' className='input1'/>
        <br /><br />
        <button className='button' onClick={Login}>Login</button>
        <br />
        <p>New User? Click here to <Link to='/usersignup'>User</Link></p>
        <p>Admin? Click here to <Link to='/adminsignup'>Register</Link></p>
      </form>
    </div>

    
  )
}

export default AdminLogin