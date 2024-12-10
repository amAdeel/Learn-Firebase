import React, { useState } from 'react'
import {getFirestore,collection,addDoc} from 'firebase/firestore'
import {app} from '../../firebase'
import { useNavigate } from 'react-router-dom'

const Addfaculty = () => {
    const[name,setName]=useState('')
    const[id,setId]=useState(null)
    const[stuclass,setStuclass]=useState('')
    const[number,setNumber]=useState(null)
    const navigate=useNavigate()
const submithadle=async(e)=>{
    e.preventDefault();
    // add code for adding data in firestore database
    const db=getFirestore(app)
    const docRef=await addDoc(collection(db,'faculty'),{
        facultyName:name,
        facultyId:id,
        facultyDesination:stuclass,
        facultyNumber:number

    })
    .then(res=>{
      navigate('/dashboard/Facultymember')
    })
    .catch(err=>{
      console.log(err)
    }
    )

    console.log(name,id,stuclass,number,docRef)
    }

  return (
    <div style={{maxWidth: "400px", padding: "20px",border: '2px solid royalblue',borderRadius:'20px',margin:'auto',display:'flex', gap:'10px', marginTop:'3%'  }}>
      <h2>Add Faculty Member</h2>
      <form style={{ display: "flex", flexDirection: "column", gap: "10px" }} onSubmit={submithadle}>
        <label>
          Faculty Name:
          <input
            type="text"
            name="facultyName"
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
            placeholder="Enter number"
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

export default Addfaculty