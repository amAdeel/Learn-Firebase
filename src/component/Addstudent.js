import React, { useState } from 'react'
import {getDatabase,ref,set} from 'firebase/database'
import {app} from '../firebase'
import { useNavigate } from 'react-router-dom'

const Addstudent = () => {
  //step#03 
  const[name,setName]=useState('')
  const[id,setId]=useState(null)
  const[stuclass,setStuclass]=useState('')
  const[gmail,setGmail]=useState('')
  const[number,setNumber]=useState(null)
  const navigate=useNavigate()

  
  //step-2 yaha par hum ny ak function banya hai k jab ya form submit ho ga to ya function call ho ga or value ko console karva dy ga . .
  //step-04 is me hum function k under hum event.preventDefault dy rehy hai jo kaya kary ga humare project ka jo default behaviour ho ga wo stop kar dy ga ,,,[ is ko assan alfaz me asy samjty hai k jab humare strate update hota hai to humara file bi reload hoti hai or data show kaRTI HAI , to form submition k case me hum chate hai k ak hi bar sare ka sara code state me jy or ak hi bar console me show ho to is liy hum ny default ko remove kar diya  ]
  const submithadle=(e)=>{
    e.preventDefault();//remove defalut behaviour 

//step 05 now we create a db instance that is page ko firebase k sath link kary ga , yaha par phele hum ny ak instance create kiya "db" name ka jo is file ko conncect kar raha hai database k sath , getdatebase(app) ka matlb is databse sy connect karna hai ya jo app hai ya file hai jis me firebase ki sb configration pari hai , os k bad set(),{} ya set ak ref leta hai jo hum ny instance diya or 'student/' hum ny ak folder banya database me or is ki agy id .
    const db=getDatabase(app)
    set(ref(db,'students/'+id),{
      studentName:name,
      studentid:id,
      studentClass:stuclass,
      studentGmail:gmail,
      studentNumber:number
    })
    .then(res=>{
      navigate('/dashboard/Students List')
    })
    .catch(err=>{
      console.log(err)
    }
    )
      console.log(name,id,stuclass,gmail,number)
  }




  return (
<div style={{ maxWidth: "400px", padding: "20px",border: '2px solid royalblue',borderRadius:'20px',margin:'auto',display:'flex', gap:'10px', marginTop:'3%'  }}>
      <h2>Student Information Form</h2>
      {/* step-01 create a form  */}
      <form style={{ display: "flex", flexDirection: "column", gap: "10px" }} onSubmit={submithadle}>
        <label>
          Student Name:
          <input
            type="text"
            name="studentName"
            placeholder="Enter student name"
            onChange={(e)=>setName(e.target.value)}// that is the event ya state ko update kar raha hai e.target.value matlab jo value hum type kar rehy hai wo yaha ati jy gi.
            required // mean compulsary
          />
        </label>

        <label>
          Student ID:
          <input
            type="text"
            name="studentId"
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
            placeholder="Enter student Gmail"
            onChange={(e)=>setGmail(e.target.value)}
            // required
          />
        </label>

        <label>
          Student Number:
          <input
            type="tel"
            name="studentNumber"
            placeholder="Enter student number"
            onChange={(e)=>setNumber(e.target.value)}
            required
          />
        </label>

        <button type="submit" style={{ padding: "10px", background: "royalblue", color: "white", border: "none", borderRadius: "5px" }}>
          Submit
        </button>
      </form>
    </div>
      )
}

export default Addstudent