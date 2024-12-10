import React, { useState } from "react";
import {getAuth,signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
import { app } from "../../firebase";
import { useNavigate } from "react-router-dom";

/*
1# we import auth and signinwithemailandpasswoard from 'firebase/Auth' (FOR CHECK our provide gmail and password is exist or not if exist it's login if not )
2# now we learn how to login with google . now we have to import few things 1st=> { getAuth , signInWithPopup ,And GoogleAuthProvider } 
  => yaha par first we create a auth which is instance  which we ALREADY create in handlelogin function , 
3# Now we learn login with facebook for that first we create meta developer account  link the account with facebook and go to that account , set the name of our product .
 => add the use case (yaha our use case authentication karvana hai to hum wo option selet karyt gy option name is {Autentication and request data FROM user with facebook login })  
 =>( is me kuch editing karni ho gi is k right corner par  edit ka option hai os par click karna hai tree option nazar aye gy {permission , setting , Quickstart }  hai os me sy  setting k option par jana hai or waha par ak kuch option enable karny hai  OR AK  LInk haia waha par os link copy kar k paste karna hai firebase sy ja kar setting me ja kar domion link copy kar k paste karna haui  )
 => import facebook auth provider , 
 */
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const auth=getAuth(app)
    signInWithEmailAndPassword(auth,email,password)
    .then(res=>{
      alert(`Welcome! Logged in with Email: ${email}`);
      console.log("Email:", email, "Password:", password);
      navigate('/dashboard')
    })
    .catch(error=>{
      console.log(error);
      alert('Account not found !')
      navigate('/signup')

    })
  };

  const loginWithGoogle = () => {
    const auth=getAuth(app)
    const provider=new GoogleAuthProvider()
    signInWithPopup(auth,provider)
    .then(res=>{
      console.log(res);
      console.log(res.user.displayName);
      navigate('/dashboard',{state:res.user.displayName})
    })
    .catch(error=>{
      if (error.code === "auth/invalid-email") {
        alert("The email address is badly formatted.");
      } else if (error.code === "auth/user-not-found") {
        alert("No user found with this email.");
      } else if (error.code === "auth/wrong-password") {
        alert("The password is incorrect.");
      } else {
        alert("An error occurred. Please try again.");
      }    })
  };

  const gotosignup=()=>{
    navigate('/signup')
  }


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
        gap: "5px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ textAlign: "center", color: "royalblue" }}>
        Login Form
      </h2>
      <form
        onSubmit={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <label style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          Email:
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          Login
        </button>
        <button
        onClick={gotosignup}
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
      


      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "20px",
        }}
      >

        <h3 style={{ textAlign: "center" }}>Or Login Using</h3>
        <button
          onClick={loginWithGoogle}
          style={{
            padding: "10px",
            background: "#db4437",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Login with Google
        </button>
      </div>
    </div>
    </>
  );
};

export default LoginPage;
