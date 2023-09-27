import axios from 'axios'
import React, { useState } from 'react'


const AddBus = () => {

  let [name, setName]=useState("")
let [from,setFrom]=useState("")
let[to,setTo]=useState("")
let[bus_no,setBus_no]=useState("")
let[dop,setDop]=useState("")
let[nos,setNos]=useState("")

let data={name,bus_no,nos,from,to,dop}
let admin=JSON.parse(localStorage.getItem('admin'))
let addBus=()=>{
  axios.post(`http://localhost:8080/bus/${admin.id}`,data).then((res)=>{
    alert(res.data.message)
  }).catch(()=>{
    alert("caanot add Bus")
  })
}

  return (
    <div className='addbus'>
        <form onSubmit={addBus}>

            
            <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Enter Your Name' />
            <input type="text" value={from} onChange={(e)=>{setFrom(e.target.value)}} placeholder='enter your starting point' />
            <input type="text" value={to}  onChange={(e)=>{setTo(e.target.value)}} placeholder='enter your ending point'/>
            <input type="text" value={bus_no} onChange={(e)=>{setBus_no(e.target.value)}} placeholder='enter the bus number' />
            <input type="text" value={dop} onChange={(e)=>{setDop(e.target.value)}} placeholder='enter your date of departure'/>
            <input type="text" value={nos} onChange={(e)=>{setNos(e.target.value)}} placeholder='enter number of seats'/>
            <button>Add Route</button>
                <br /><br />
        </form>
    </div>
  )
}

export default AddBus