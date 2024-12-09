import React, { useState } from "react";
import {app} from '../../firebase';
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[name,setName]=useState();
    const navigate=useNavigate();
/*
Step=01 Now we create a sign-up using firebase and autenticate with this .
1# first we go to firebase and under my projet ,goes to autentication section and enable provide for now we use emailand password .
2# import few thing getAuth, createUserWithEmailAndPassword from 'firebase/auth' .
3# creat a const auth to connect with firebase .
4# we import a function from database/auth which is "createUserWithEmailAndPssword()" that is the function in which we provide tree thing , 1. instance that connect with databade (auth) , 2. email ,3. password 
5# then navigate this on login page . 
*/
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name,email,password);
    const auth =getAuth(app)
    //step=4
    createUserWithEmailAndPassword(auth,email,password)
    .then(res=>{
      alert(`signup succesfully :${name}`)
      console.log(res.user)
      navigate('/login')
    })
    .catch(err=>{
        console.log(err);
        
    })

  };

  return (
    <><div>
    <h1>AdelProject </h1>
  </div>

    <div
      style={{
        maxWidth: "400px",
        padding: "20px",
        border: "2px solid royalblue",
        borderRadius: "20px",
        margin: "auto",
        marginTop: "5%",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ textAlign: "center", color: "royalblue" }}>
        Signup Form
      </h2>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
        onSubmit={handleSubmit}
      >
        <label style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          Full Name:
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={(e)=>setName(e.target.value)}
            required
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </label>

        <label style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          Email:
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={(e)=>setEmail(e.target.value)}
            required
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </label>

        <label style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          Password:
          <input
            type="password"
            // name="password"
            placeholder="Enter your password"
            onChange={(e)=>setPassword(e.target.value)}
            required
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </label>

        <button
          type="submit"
          style={{
            padding: "10px",
            background: "royalblue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
    </>
  );
};

export default SignupPage;
