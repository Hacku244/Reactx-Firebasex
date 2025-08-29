/*import React, { useState } from 'react'
import {getDatabase,onValue,ref, remove} from "firebase/database"
import {app} from "../Firebase"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Studentlist = () => {
   const [Studentdata,setStudentdata]=useState([]);
      const navigate=useNavigate();
    useEffect(() => {
     const db=getDatabase(app);
      const SudentRef=ref(db,"student")
      onValue(SudentRef,(snapshot)=>{
       const data=snapshot.val();
       console.log(data);
       setStudentdata(data)
      })
    }, [])

const DeleteData=(key) =>{
        const db=getDatabase(app);
         const SudentRef=ref(db,"student/"+key)
         remove(SudentRef)
   }
  

    
  return (
    <div>
       <h1>Student List</h1>
      { Studentdata && (
        <div style={{display:"flex",flexDirection:"column"
        ,gap:"10px",padding:"10px",margin:"10px",borderRadius:"10px",backgroundColor:"lightblue"}}>
            {Object.entries(Studentdata).map(([key,value])=>{
                
                return(
                <div key={key}>
                    <p>{value.StudentName} {value.PhoneNumber}</p>
                    
                     <button onClick={()=>DeleteData(key)} 
                      style={{margin:"10px",padding:"10px",borderRadius:"10px"
                      ,backgroundColor:"red",color:"white"
                      }}>
                        Delete</button>


                     < button onClick={()=>navigate(`/updatestudent`,{state:[key,value]})}
                     style={{margin:"10px",padding:"10px",borderRadius:"10px",backgroundColor:"lightgreen",color:"white"}}>
                      Update</button>
                </div>
                )
})}
        </div>
      )}

      
       
    </div>
  )

}

export default  Studentlist */

import React, { useState, useEffect } from 'react'
import { getDatabase, onValue, ref, remove } from "firebase/database"
import { app } from "../Firebase"
import { useNavigate } from 'react-router-dom'

const Studentlist = () => {
  const [Studentdata, setStudentdata] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const db = getDatabase(app);
    const SudentRef = ref(db, "student");
    onValue(SudentRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setStudentdata(data);
    });
  }, []);

  const DeleteData = (key) => {
    const db = getDatabase(app);
    const SudentRef = ref(db, "student/" + key);
    remove(SudentRef);
  };

  return (
    <div>
      <h1>Student List</h1>
      {Studentdata && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "10px",
            margin: "10px",
            borderRadius: "10px",
            backgroundColor: "lightblue",
          }}
        >
          {Object.entries(Studentdata).map(([key, value]) => {
            return (
              <div
                key={key}
                style={{
                  padding: "15px",
                  border: "1px solid gray",
                  borderRadius: "10px",
                  backgroundColor: "white",
                }}
              >
                <p>
                  <strong>{value.StudentName}</strong> <br />
                  📞 {value.PhoneNumber}
                </p>

                {/* Show student image if available */}
                {value.ImageUrl && (
                  <img
                    src={value.ImageUrl}
                    alt={value.StudentName}
                    width="150"
                    style={{ borderRadius: "10px", marginTop: "10px" }}
                  />
                )}

                <div>
                  <button
                    onClick={() => DeleteData(key)}
                    style={{
                      margin: "10px",
                      padding: "10px",
                      borderRadius: "10px",
                      backgroundColor: "red",
                      color: "white",
                    }}
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => navigate(`/dasboard/updatestudent`, { state: [key, value] })}
                    style={{
                      margin: "10px",
                      padding: "10px",
                      borderRadius: "10px",
                      backgroundColor: "lightgreen",
                      color: "white",
                    }}
                  >
                    Update
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Studentlist;
