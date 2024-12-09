import React from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import {app} from '../firebase'
import {getAuth,signOut} from 'firebase/auth'

const Dashboard = () => {
    const navigate=useNavigate()
    const location=useLocation();
    console.log(location)

    const signout=()=>{
    const auth=getAuth(app)
    signOut(auth)
    .then(res=>{
        navigate('/login')
    })
    .catch(err=>{
     console.log(err)
    })
    

    }
    
  return (
    <div>
    <div style={{backgroundColor:'black', padding:1/2}}>
        <h1 style={{color:'white'}}>
            Dashboard
        </h1>
    </div>
    <div style={{display:'flex', height:'100vh',paddingTop:0,margin:0}}>
        <div style={{width:'20%',backgroundColor:'royalblue'}}>
            <Link to='/dashboard/Add Student' style={{display:'block',color:'white',margin:'10%'}}>Add Student</Link>
            <Link to='/dashboard/Students List' style={{display:'block',color:'white'}}>Students List</Link>
            <Link to='/dashboard/Addfaculty' style={{display:'block',color:'white',margin:'10%'}}>Add Faculty Member</Link>
            <Link to='/dashboard/Facultymember' style={{display:'block',color:'white'}}>Faculty Member List</Link>
            <button onClick={signout} style={{marginTop:30}}>Sign Out</button>
        </div>
        <div style={{width:'80%'}}>
        <p style={{fontFamily:'Arial sans-serif',fontweight:700,fontSize:'1rem'}}>Welcome Back {location.state}</p>
  
            <Outlet/>
        </div>
    </div>
</div>
  )
}

export default Dashboard