import React, { useState } from 'react'
import {app} from'../Firebase'
import { useNavigate } from 'react-router-dom';
 import {getDatabase,set,ref} from "firebase/database"

const AddStudent = () => {
    const [adminNum,setAdminNum]=useState("");
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const[imageUrl,setImageUrl]=useState("");
    const Navigate=useNavigate();

    const SubmitHandler=(e)=>{
      e.preventDefault();
    const db=getDatabase(app);
      set(ref(db,"student/"+adminNum),{
          StudentName:name,
          PhoneNumber:phone,
          ImageUrl:imageUrl
      
          
      })
      .then(()=>{
        Navigate("/dasboard/studentlist")
      })
      .catch((error)=>{
        console.log(error)
      })
      
    }
  return (
    <div>
   <form  onSubmit={SubmitHandler}>
    <input type="number"
     placeholder='admin number' 
     value={adminNum}
     onChange={(e)=>setAdminNum(e.target.value)} 
    style={{
      margin:"10px",
    padding:"10px"
    ,borderRadius:"10px",
    border:"1px solid black"
    ,backgroundColor:"lightcyan"
    }} />


    <input type="text" 
    placeholder=' student name' 
     value={name}
     onChange={(e)=>setName(e.target.value)}
     style={{margin:"10px",
    padding:"10px",
    borderRadius:"10px",
    border:"1px solid black"
    ,backgroundColor:"lightcyan"
    }} />

    <input type="number"
     placeholder='phone number'
       value={phone} 
       onChange={(e)=>setPhone(e.target.value)}
     style={{
      margin:"10px",
    padding:"10px"
    ,borderRadius:"10px"
    ,border:"1px solid black"
,backgroundColor:"lightcyan"}} />


    <input 
  type="text" 
  placeholder='Image URL (from ImageKit)'  
  value={imageUrl} 
  onChange={(e)=>setImageUrl(e.target.value)}
  style={{
    margin:"10px",
    padding:"10px",
    borderRadius:"10px",
    border:"1px solid black",
    backgroundColor:"lightcyan"
  }} 
/>

     
     <button type='submit' style={{margin:"10px",padding:"10px"
        ,borderRadius:"10px"
        ,border:"1px solid black",backgroundColor:"lightpink"}}>Submit</button>
   </form>


    </div>
  )
}

export default AddStudent