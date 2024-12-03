import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
    <div style={{backgroundColor:'black', padding:1/2}}>
        <h1 style={{color:'white'}}>
            Dashboard
        </h1>
    </div>
    <div style={{display:'flex', height:'100vh',paddingTop:0,margin:0}}>
        <div style={{width:'20%',backgroundColor:'royalblue'}}>
            <Link to='/Add Student' style={{display:'block',color:'white',margin:'10%'}}>Add Student</Link>
            <Link to='/Students List' style={{display:'block',color:'white'}}>Students List</Link>
            <Link to='/Addfaculty' style={{display:'block',color:'white',margin:'10%'}}>Add Faculty Member</Link>
            <Link to='/Facultymember' style={{display:'block',color:'white'}}>Faculty Member List</Link>
        </div>
        <div style={{width:'80%'}}>
            <Outlet/>
        </div>
    </div>
</div>
  )
}

export default Dashboard