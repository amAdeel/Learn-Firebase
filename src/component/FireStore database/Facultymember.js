import React, { useState } from 'react'
import { useEffect} from 'react'
import {app} from '../../firebase'
import {collection,deleteDoc,doc,getDocs,getFirestore} from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'


const Facultymember =() => {
    const navigate=useNavigate()
    const[facdata,setFacdata]=useState([])
    useEffect(() => {
      getdata()
    }, [])

    const getdata=async()=>{
        const db=getFirestore(app)
        const facRef=collection(db,'faculty')
        const docSnap=await getDocs(facRef)
        //is nijy vali line ka masad yaha par ya hai jo data hai(docSnap), wo .docs sy wo array me a jy ga then .map sy hum har ak element ki access kar saky hai jo collection k under hai ab ,id:doc.id,...doc.data()  ya ak new array banaye ga id ko doc.id k equal kar k or baki data same rehy ga mean ...doc.data()(spread operator hai) jo baki data ko same rehky ga or new array me store karva dy ga .
        const data=docSnap.docs.map(doc=>({ 
            id:doc.id,
            ...doc.data()
        }))
        setFacdata(data)
    }

    // for delete a data

    const daletedata=async(Id)=>{
        console.log(Id)
        const db=getFirestore(app)
        const dataRef= doc(db,'faculty',Id)
        try{
            await deleteDoc(dataRef)
            console.log('delte')
            getdata()
        }
        catch(err){
            console.error(err)
        }
    }

    
    
  return (
    <div>
      <h1>Facultymember</h1>
      {/* {facdata} hum assa nahi kar sakty ya ak error hai or osy completly asy render react me nahi kar sakty  */}
      {facdata.map(fac=>{
        return(
            <div key={fac.facultyId} style={{border:'2px solid royalblue',margin:10} }>
                <div >
                <p>Faculty Name: {fac.facultyName}</p>
                <p>Faculty Number: {fac.facultyNumber}</p>
                <p>Faculty Desination: {fac.facultyDesination}</p>
                <p>Faculty ID: {fac.facultyId}</p>
                </div>
                <div style={{display:'flex'}}>
                <button onClick={()=>{daletedata(fac.id)}} style={{marginLeft:'auto',display:'flex',marginRight:10,marginBottom:10}}>Delete Faculty</button>
                <button onClick={()=>{navigate('/Updatemember',{state:fac})}}  style={{display:'flex',marginRight:10,marginBottom:10}}>Update Faculty</button>

                </div>
                </div>
        )
       })}
    </div>
  )
}

export default Facultymember