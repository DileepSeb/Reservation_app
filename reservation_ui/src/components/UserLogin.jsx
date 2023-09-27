import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/userlogin.css'
import axios from 'axios'

const UserLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  console.log(email)
  let navigate = useNavigate()

  const Login=(e)=>{
    e.preventDefault()
    axios.post(`http://localhost:8080/user/verify-by-phone?email=${email}&password=${password}`)
    .then((res) => {
      alert("Login Sucess")
      navigate('/landinguserhomepage');
    }).catch((err) => {
      alert("Invalid Data")
    })
  }
  return (
    <div className='userlogin'>
      <form action="">
        <br />
        <br />
        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter the Email' className='input1'/>
        <br /><br />
        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter the Password' className='input1'/>
        <br /><br />
        <button className='button' onClick={Login}>Login</button>
        <br />
        <p>New User? Click here to <Link to='/usersignup'>Register</Link></p>
        <p>Admin? Click here to <Link to='/adminlogin'>Admin</Link></p>
      </form>
    </div>
  )
}

export default UserLogin