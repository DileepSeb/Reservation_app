
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserLogin from './components/UserLogin';
import AboutUS from './components/AboutUS';
import ContactUs from './components/ContactUs';
import Homepage from './components/Homepage';
import UserSignUp from './components/UserSignUp';

import AdminSignup1 from './components/AdminSignup1';
import LandingUserHomePage from './components/LandingUserHomePage';
import Error from './components/Error';
import AdminLogin from './components/AdminLogin';
import Security from './components/Security';
import AdminHomePage from './components/AdminHomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Homepage />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/aboutus" element={<AboutUS />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/usersignup" element={<UserSignUp />} />
        <Route path='/adminsignup' element={<AdminSignup1/>} />
        <Route path='/landinguserhomepage/*' element={<LandingUserHomePage/>}/>
        <Route path='/*' element={<Error/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/adminhomepage/*' element={<Security Child={AdminHomePage}/>}/>
     
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
