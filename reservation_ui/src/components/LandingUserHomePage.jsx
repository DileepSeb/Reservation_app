import React from 'react'
import '../styles/landinguserhomepage.css'
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
const LandingUserHomePage = () => {
  return (
    <div className='Landingusehomepage'>
        <div className='serachfilter'>
            <br /><br /><br />

<form action="">
    <div id='bend'>
    <div className='si1'>
        <input type="text" placeholder='From' name='' id='' />

    </div>
    <div className='si2'>
        <input type="text" placeholder='To' name='' id='' />
    </div>
    <div className='si3'>
        <input type="date" placeholder='Date'  name='' id=''/>
    </div>
    <button>Submit</button>
    </div>
</form>
        </div>

    </div>
  )
}

export default LandingUserHomePage