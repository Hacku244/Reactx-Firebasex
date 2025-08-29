import React, { useState } from 'react'
import {getDatabase,set,ref,update} from "firebase/database"
import {app} from'../Firebase'
import { useNavigate,useLocation } from 'react-router-dom';

const UpdateStudent = () => {
    const Navigate=useNavigate();
    const location=useLocation();
    const [adminNum,setAdminNum]=useState(location.state[0]);
    const [name,setName]=useState(location.state[1].StudentName);
    const [phone,setPhone]=useState(location.state[1].PhoneNumber);
     const [imageUrl,setImageUrl]=useState(location.state[1].ImageUrl);
     console.log(location);
     

    const SubmitHandler=(e)=>{
      e.preventDefault();
    const db=getDatabase(app);
      const UpdateRef=ref(db,"student/"+location.state[0]);
      update(UpdateRef,{StudentName:name,PhoneNumber:phone,ImageUrl:imageUrl});
      Navigate("/dasboard/studentlist");
     
      
     
      
    }
  return (
    <div>
   <form  onSubmit={SubmitHandler}>
    <input disabled value={adminNum} type="number" placeholder='admin number' 
     onChange={(e)=>setAdminNum(e.target.value)} 
    style={{margin:"10px",
    padding:"10px",borderRadius:"10px",
    border:"1px solid black",backgroundColor:"lightcyan"
    }} />


    <input type="text" placeholder=' student name'  value={name} onChange={(e)=>setName(e.target.value)}
     style={{margin:"10px",
    padding:"10px",borderRadius:"10px",
    border:"1px solid black",backgroundColor:"lightcyan"
    }} />

    <input type="number" placeholder='phone number'  value={phone} onChange={(e)=>setPhone(e.target.value)}
     style={{margin:"10px",
    padding:"10px",borderRadius:"10px"
    ,border:"1px solid black",backgroundColor:"lightcyan"}} />

    <input type="text" placeholder='image url'  value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)}
     style={{margin:"10px",
    padding:"10px",borderRadius:"10px"
    ,border:"1px solid black",backgroundColor:"lightcyan"}} />
     
     <button type='submit' style={{margin:"10px",padding:"10px"
        ,borderRadius:"10px"
        ,border:"1px solid black",backgroundColor:"lightpink"}}>Update</button>
   </form>


    </div>
  )
}

export default UpdateStudent
