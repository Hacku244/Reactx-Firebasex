  //Use Firestore Database

import React , { useState } from 'react'
import {collection,addDoc,getFirestore} from 'firebase/firestore'
import {app} from '../Firebase'
import { useNavigate } from 'react-router-dom';
const AddFaculty = () => {
  const [name,setName]=useState("");
  const [phone,setPhone]=useState("");
  const [imageUrl,setImageUrl]=useState("");

  const Navigate=useNavigate();

  const SubmitHandler= async (e)=>{
    e.preventDefault();
    console.log(name,phone);
    const db=getFirestore(app);
    const docRef= await addDoc(collection(db,'faculty'),{
      facultyName:name,
      PhoneNumber:phone,
      ImageUrl:imageUrl
    })
    console.log("Document written with ID: ",docRef.id);
    Navigate("/dasboard/facultylist");
  }
  return (
    <div>
        <h1>Add Faculty</h1>
        <form onSubmit={SubmitHandler}>
          <input type="text" 
          onChange={(e)=>setName(e.target.value)} 
           placeholder='full name'/>

          <input type="number" 
          onChange={(e)=>setPhone(e.target.value)}
           placeholder='phone number'/>

          <input type="text" 
          onChange={(e)=>setImageUrl(e.target.value)} 
           placeholder='image url'/>

          <button type="submit">Submit</button>
        </form>
        
    </div>
  )
}

export default AddFaculty