 //Use Firestore Database

import React , { useState } from 'react'
import {collection,doc,getFirestore,updateDoc} from 'firebase/firestore'
import { useLocation, useNavigate } from 'react-router-dom';
import {app} from '../Firebase'
const UpdateFaculty = () => {
    const location=useLocation();
    console.log(location.state);
    const Navigate=useNavigate();
  const [name,setName]=useState(location.state.facultyName);
  const [phone,setPhone]=useState(location.state.PhoneNumber);
  const[imageUrl,setImageUrl]=useState(location.state.ImageUrl);



  const SubmitHandler= async (e)=>{
    e.preventDefault();
    //console.log(name,phone);
    const db=getFirestore(app);
     const docRef=doc(db,"faculty",location.state.id);
     try{
      await updateDoc(docRef,{facultyName:name,PhoneNumber:phone,ImageUrl:imageUrl});
      Navigate("/facultylist");
     }
     catch(error){
      console.log(error)
     }
  }
  return (
    <div>
        <h1> Update Faculty</h1>
        <form onSubmit={SubmitHandler}>
          <input type="text"  value={name}
          onChange={(e)=>setName(e.target.value)} 
           placeholder='full name'/>

          <input type="number"  value={phone}
          onChange={(e)=>setPhone(e.target.value)}
           placeholder='phone number'/>

          <input type="text"  value={imageUrl}
          onChange={(e)=>setImageUrl(e.target.value)} 
           placeholder='image url'/>

          <button type="submit">Update</button>
        </form>
        
    </div>
  )
}

export default UpdateFaculty