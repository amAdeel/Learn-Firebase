import React, { useState } from 'react'
import {getFirestore, doc, updateDoc} from 'firebase/firestore'
import {app} from '../../firebase'
import { useNavigate, useLocation} from 'react-router-dom'

const Updatefaculty = () => {
    const navigate=useNavigate()
    const location=useLocation()
    console.log(location)
    const[name,setName]=useState(location.state.facultyName)
    const[id,setId]=useState(location.state.facultyId)
    const[stuclass,setStuclass]=useState(location.state.facultyDesination)
    const[number,setNumber]=useState(location.state.facultyNumber)
const submithadle=async(e)=>{
    e.preventDefault();
    // add code for adding data in firestore database
    const db=getFirestore(app)
    const docRef=doc(db,'faculty',location.state.id)
    try{
        await updateDoc(docRef,{facultyName:name,facultyNumber:number,facultyId:id,facultyDesination:stuclass})
        navigate('/Facultymember')
    }
    catch(err){
        console.log(err)
    }
    console.log(name,id,stuclass,number,docRef)
    }

  return (
    <div style={{maxWidth: "400px", padding: "20px",border: '2px solid royalblue',borderRadius:'20px',margin:'auto',display:'flex', gap:'10px', marginTop:'3%'  }}>
      <h2>Update Faculty Member</h2>
      <form style={{ display: "flex", flexDirection: "column", gap: "10px" }} onSubmit={submithadle}>
        <label>
          Faculty Name:
          <input
            type="text"
            name="facultyName"
            value={name}
            placeholder="Enter faculty name"
            onChange={(e)=>setName(e.target.value)}// that is the event ya state ko update kar raha hai e.target.value matlab jo value hum type kar rehy hai wo yaha ati jy gi.
            required // mean compulsary
          />
        </label>

        <label>
          Faculty ID:
          <input
            type="text"
            name="facultyId"
            value={id}
            placeholder="Enter faculty ID"
            onChange={(e)=>setId(e.target.value)}
            required
          />
        </label>

        <label>
          Faculty Desination:
          <input
            type="text"
            name="facultyDesination"
            value={stuclass}
            placeholder="Enter desination"
            onChange={(e)=>setStuclass(e.target.value)}
            // required
          />
        </label>

        <label>
          Faculty Number:
          <input
            type="tel"
            name="facultyNumber"
            value={number}
            placeholder="Enter number"
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

export default Updatefaculty