/*import React,{ useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {app} from '../Firebase'
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
   const Navigate=useNavigate();

    const SubmitHandler=(e)=>{
        e.preventDefault();
        const auth=getAuth(app);
        createUserWithEmailAndPassword(auth,email,password)

        .then(userCredential => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          Navigate("/login")
        }) 
        .catch(error => {
            console.log(error);
        })
  
    }
  return (
    <div>
        <h1>Signup</h1>
        <form onSubmit={SubmitHandler}>

      <input type="email"
        placeholder='email' 
        onChange={(e)=>setEmail(e.target.value)}/>

      <input type="password"
        placeholder='password'
         onChange={(e)=>setPassword(e.target.value)}
         />

      < button type='submit'>Signup</button>

        </form>
    </div>
  )
}
export default Signup*/


import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../Firebase";
import { useNavigate } from "react-router-dom";
 import "./Signup.css";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    const auth = getAuth(app);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        navigate("/login");
      })
      .catch((error) => {
        setErrorMsg(error.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="signup-page">
    <div className="signup-container">
      <form onSubmit={SubmitHandler} className="signup-form">
        <h2>Create Account</h2>
        <p className="subtitle">Join us today, it takes only a minute 🚀</p>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password (min 6 chars)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {errorMsg && <p className="error">{errorMsg}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Sign Up"}
        </button>

        <p className="login-link">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
       
      </form>
    </div>
    </div>
  );
};

export default Signup;
