import React, { useEffect, useState } from 'react'
import { getDatabase,ref,onValue,remove } from 'firebase/database'
import {app} from '../firebase'
// import { useNavigate } from 'react-router-dom'

const ListStudent = () => {
//step 07 create a state ans set the data value in this 
  const[getdata,setGetdata]=useState()
  // const navigate=useNavigate()

  // step-06  now we want k jo data hum ny send kiya hai database me set kiya hai os ko yaha par fetch kar k dehkna hai  . is k liy hum useEffect ka use kary g , q k ya reload hoty time kuch data ya kuch effect shoe karvy ga .
useEffect(()=>{
  //first we create instance 
  const db=getDatabase(app)
  //we use ref mean kaha sy data pick karna hai
  const studentRef=ref(db,'students')
  onValue(studentRef,(snapshort)=>{
    const data=snapshort.val()
    console.log(data);
    setGetdata(data)
    
  })
},[])


// now we add a new functionality about detelete the student data from date base 
const deletestudent=(key)=>{
  const db=getDatabase(app)
  const studentRef=ref(db,'students/'+key)
  remove(studentRef)
}
  return (
    <div>
        <h1>
            List of student 
        </h1>
        {getdata && (
          <div>
            {Object.entries(getdata).map(([key,value])=>{
              return(
                <div key={key} style={{border: '2px solid royalblue', margin:10}}>
                  <ul>
                    <li>Name : {value.studentName}</li>
                    <li>Number: {value.studentNumber}</li>
                    <li>Gmail: {value.studentGmail}</li>
                    <li>Class: {value.studentClass}</li>
                    <li>ID: {value.studentid}</li>
                    </ul>
                    <div style={{display:'flex'}}>
                    <button onClick={()=>{deletestudent(key)}} style={{marginLeft:'auto',display:'flex',marginRight:10,marginBottom:10}}>Delete Student</button>

                    {/* step =08 Add a button and navigate to update form , yaha par hum ny sath hi value bi pass karva di state k under ya ak tarika hai values pass karvay ka basically state:under array form me store ki or waha ja kr hum ya form me set karva dy ga or osy phir edit karvy gy , waha hum ny useLocation ak hook ka use kiya os ko simple console karny sy wo kuch id or kuch data dekta hain or sate ka data bi wohi show ho ga console me os ki madded sy hum data easily dehk sekty hai , baki update file me ja kar dehko  */}

{/*  we use the below feature leter after proper revieiwing the concept  */}

                    {/* <button onClick={()=>{navigate('/dashboard/update-data',{state:[key,value]})}} style={{display:'flex',marginRight:10,marginBottom:10}}>Update Student</button> */}

                    </div>

                </div>
              )
            })}
          </div>
        )}
    </div>
  )
}

export default ListStudent