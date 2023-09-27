import React from 'react'
import AddBus from './AddBus'
import Reservations from './Reservations'
import UserList from './UserList'
import AdminNavLinks from './AdminNavLinks'
import { Route, Routes } from 'react-router-dom'

const AdminHomePage = () => {
  return (
    <div className='adminhomepage'>
        <AdminNavLinks/>
         <Routes>
            <Route path='/addbus' elements={<AddBus/>}/>
            <Route path='/userlist' elements={<UserList/>}/>
            <Route path='/reservations' elements={<Reservations/>}/>
         </Routes>
    </div>
  )
}

export default AdminHomePage