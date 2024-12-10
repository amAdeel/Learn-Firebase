import React, { useState } from 'react'
import {getDatabase,ref,set} from 'firebase/database'
import {app} from '../firebase'
import { useLocation, useNavigate } from 'react-router-dom'

const UpdateData = () => {
  const navigate=useNavigate()
  const location=useLocation()// ya humay file ki location or baki detail bata hai or dosre component me data bi store karvata hai by this 
// ==============that bellow code is with our with state values =========================
  // const[name,setName]=useState(location.state[1].studentName)//this mean go to locatin here found  state[] and by passing 1 mean goes to first index [key,value] first index par value ka object hai waha sy hum values get kar rehy hai 
  // const[id,setId]=useState(location.state[1].studentid)
  // const[stuclass,setStuclass]=useState(location.state[1].studentClass)
  // const[gmail,setGmail]=useState(location.state[1].studentGmail)
  // const[number,setNumber]=useState(location.state[1].studentNumber)
  const[name,setName]=useState('') 
  const[id,setId]=useState('')
  const[stuclass,setStuclass]=useState('')
  const[gmail,setGmail]=useState('')
  const[number,setNumber]=useState('')


  console.log(location)

  
  const submithadle=(e)=>{
    e.preventDefault();//remove defalut behaviour 

    const db=getDatabase(app)
    set(ref(db,'students/'+id),{
      studentName:name,
      studentid:id,
      studentClass:stuclass,
      studentGmail:gmail,
      studentNumber:number
    })
    .then(res=>{
      navigate('/Students List')
    })
    .catch(err=>{
      console.log(err)
    }
    )
      console.log(name,id,stuclass,gmail,number)
  }




  return (
<div style={{ maxWidth: "400px", padding: "20px",border: '2px solid royalblue',borderRadius:'20px',margin:'auto',display:'flex', gap:'10px', marginTop:'3%'  }}>
      <h2 style={{width:'40%'}}>Update Form</h2>
      <form style={{ display: "flex", flexDirection: "column", gap: "10px", width:'60%' }} onSubmit={submithadle}>
        <label>
          Student Name:
          <input
            type="text"
            name="studentName"
            value={name}
            placeholder="Enter student name"
            onChange={(e)=>setName(e.target.value)}
            required
          />
        </label>

        <label>
          Student ID:
          <input
            type="text"
            name="studentId"
            value={id}
            placeholder="Enter student ID"
            onChange={(e)=>setId(e.target.value)}
            required
          />
        </label>

        <label>
          Student Class:
          <input
            type="text"
            name="studentClass"
            value={stuclass}
            placeholder="Enter student class"
            onChange={(e)=>setStuclass(e.target.value)}
            // required
          />
        </label>

        <label>
          Student Gmail:
          <input
            type="email"
            name="studentGmail"
            value={gmail}
            placeholder="Enter student Gmail"
            onChange={(e)=>setGmail(e.target.value)}
            // required
          style={{marginTop:2}}/>
        </label>

        <label>
          Student Number:
          <input
            type="tel"
            name="studentNumber"
            value={number}
            placeholder="Enter student number"
            onChange={(e)=>setNumber(e.target.value)}
            required
          />
        </label>

        <button type="submit" style={{ padding: "10px", background: "royalblue", color: "white", border: "none", borderRadius: "5px" }}>
          Update
        </button>
      </form>
    </div>
      )
}

export default UpdateData