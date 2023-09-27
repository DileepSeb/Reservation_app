import React from 'react'

import '../styles/adminvavlinks.css'
import {Link} from 'react-router-dom'

const AdminNavLinks = () => {
  return (
    <div className='AdminNavlinks'>
        <Link to="/adminhomepage/userlist">User List</Link>
        <Link to="/adminhomepage/reservations">Reservations</Link>
        <Link to="/adminhomepage/addbus">Add Bus</Link>


    </div>
  )
}

export default AdminNavLinks