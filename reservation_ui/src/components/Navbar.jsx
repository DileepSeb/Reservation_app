import React from 'react'
import { Link } from 'react-router-dom'
import InfoIcon from '@mui/icons-material/Info';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <Link to='/'>
                <div className="logo">
                    <img src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg" />
                    <h1 className='hello'>World Of <span>Travels</span></h1>
                </div>
            </Link>
            <div className="options">
                <Link to='/aboutus'><InfoIcon id='mui1' />About Us</Link>
                <Link to='/contactus'><ContactSupportIcon id='mui2' />Contact Us</Link>
                <Link to='/userlogin'><AccountCircleIcon id='mui3' />Login</Link>
            </div>
        </div>
    )
}

export default Navbar