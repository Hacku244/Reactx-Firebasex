import React from 'react'
 import {Link, Outlet} from 'react-router-dom'
const Dasboard = () => {
  return (
    <div style={{display:"flex",flexDirection:"row"}} >
        <div style={{width:"20%",backgroundColor:"lightblue",height:"100vh",borderRadius:"10px"}}>

        <ul style={{listStyle:"none",padding:"10px",marginTop:"20px",display:"flex",flexDirection:"column",gap:"10px",text:"white"}}>
           <Link to={"/dasboard/addstudent"}>Add Student</Link>
           <Link to={"/dasboard/studentlist"}>Student List</Link> 
           <Link to={"/dasboard/addfaculty"}>Add Faculty</Link>
           <Link to={"/dasboard/facultylist"}>Faculty List</Link>
           
        </ul>
        
        </div>
    

        <div  style={{width:"70%",backgroundColor:"lightgreen",height:"100vh",borderRadius:"10px"}} >
          <Outlet />
        </div>
    </div>
  )


}

export default Dasboard;


