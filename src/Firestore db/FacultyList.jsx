import React,{ useEffect , useState} from 'react'
import {app} from '../Firebase'
import { collection, doc, getDocs,getFirestore , deleteDoc} from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
const FacultyList =  () => {
 const [facultydata,setfacultydata]=useState([]);
 const navigate=useNavigate();
  useEffect(() => {
    getdata();
  }, [])
  
   const getdata=async()=>{
    
     const db=getFirestore(app);
    const docRef=collection(db,"faculty")
      const docSnap= await getDocs(docRef)
       
      const data=docSnap.docs.map((doc)=>({
        id:doc.id,
        ...doc.data()
      }))
      console.log(data)
      setfacultydata(data)
    }


   const deletedata=async(id)=>{
     const db= getFirestore(app);

     const dataRef=doc(db,"faculty",id)

     try{
      await deleteDoc(dataRef)
      getdata();
     }
     catch(error){
      console.log(error)
     }

   }
  
  return (
    <div>
        <h1>Faculty List</h1>
        {facultydata && (
            <div style={{display:"flex",flexDirection:"column"
            ,gap:"10px",padding:"10px",margin:"10px",borderRadius:"10px",backgroundColor:"lightblue"}}>
                {facultydata.map((item)=>{
                    return(
                   <div key={item.id}>
                    <p> <strong>{item.facultyName}</strong> <br />
                    {item.PhoneNumber}
                    </p>
                    
                                    {/* Show student image if available */}
                {item.ImageUrl && (
                  <img
                    src={item.ImageUrl}
                    alt={item.facultyName}
                    width="150"
                    style={{ borderRadius: "10px", marginTop: "10px" }}
                  />
                )}
                    
                    <button onClick={()=>deletedata(item.id)}>Delete</button>

             <button onClick={()=>navigate(`/dasboard/updatefaculty`,{state:item})}>Update</button>
                        </div>
                    )
                })}
            </div>
        )}
        
   </div>
  )
}

export default FacultyList