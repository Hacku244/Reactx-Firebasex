/*import React,{ useState } from 'react'
import { getAuth, signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from '../Firebase'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
   const Navigate=useNavigate();

    const SubmitHandler=(e)=>{
        e.preventDefault();
        const auth=getAuth(app);
        signInWithEmailAndPassword(auth,email,password)

        .then(userData => {
          // Signed in
          const user = userData.user;
          console.log(user);
          Navigate("/dasboard")
        }) 
        .catch(error => {
            console.log(error);
        })
    
        
    }


     // Google login logic
     const LoginWithGoogle = () => {
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider()
      signInWithPopup(auth,provider)
      .then((result) => {
         console.log(result);
      })
      .catch((error) => {
        console.log(error);
      })
    }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={SubmitHandler}>

      <input type="email"
        placeholder='email' 
        onChange={(e)=>setEmail(e.target.value)}/>

      <input type="password"
        placeholder='password'
         onChange={(e)=>setPassword(e.target.value)}
         />

      < button type='submit'>Login</button>


        </form>

        <button onClick={LoginWithGoogle}>Login with Google</button>

    </div>
  )
}

export default Login*/

// Login.jsx
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, GithubAuthProvider } from "firebase/auth";
import { app } from "../Firebase";
import { useNavigate } from "react-router-dom";
import "./Auth.css"; // CSS file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const SubmitHandler = (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userData) => {
        console.log(userData.user);
        Navigate("/dasboard");
      })
      .catch((error) => {
        console.log(error);
      });

    
      
    } 
    // Google login logic
     const LoginWithGoogle = () => {
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider()
      signInWithPopup(auth,provider)
      .then((result) => {
         console.log(result);
         Navigate("/dasboard")
      })
      .catch((error) => {
        console.log(error);
      })
    }
    // Facebook login
   const LoginWithFacebook = () => {
             const auth = getAuth(app);
      const provider = new FacebookAuthProvider()
      signInWithPopup(auth,provider)
      .then((result) => {
         console.log(result);
         Navigate("/dasboard")
      })
      .catch((error) => {
        console.log(error);
      })
   }
     
   // Twitter login 
        const LoginWithTwitter = () => {
      const auth = getAuth(app);
      const provider = new TwitterAuthProvider()
      signInWithPopup(auth,provider)
      .then((result) => {
         console.log(result);
         Navigate("/dasboard")
      })
      .catch((error) => {
        console.log(error);
      })
    }   

  //Github login
     const LoginWithGithub = () => {
      const auth = getAuth(app);
      const provider = new GithubAuthProvider()
      signInWithPopup(auth,provider)
      .then((result) => {
         console.log(result);
         Navigate("/dasboard")
      })
      .catch((error) => {
        console.log(error);
      })
    }

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="auth-title">Login</h1>
        <form onSubmit={SubmitHandler} className="auth-form">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="auth-input"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="auth-input"
          />
          <button type="submit" className="auth-btn">
            Login
          </button>
           <br />
            <br />
          
           <button type="button"  className="auth-btn"
           onClick={LoginWithGoogle}> Login with Google</button>
           <br />
           <br />
          <button  type="button" className="auth-btn" 
           onClick={LoginWithFacebook}> Login with Facebook</button>
           <br />
           <br />
           <button type="button" className="auth-btn"
           onClick={LoginWithTwitter}> Login with Twitter</button>
           <br />
           <br />
           <button type="button" className="auth-btn"
           onClick={LoginWithGithub}> Login with Github</button>
        </form>
       
      </div>
    </div>
  );
};

export default Login;
