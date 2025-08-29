import { useState } from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom"
import Studentlist from './Realtime db/Studentlist'
import AddStudent from './Realtime db/AddStudent'
 import Dasboard from './Dasboard'
import UpdateStudent from './Realtime db/UpdateStudent'
import AddFaculty from './Firestore db/AddFaculty'
import FacultyList from './Firestore db/FacultyList'
import UpdateFaculty from './Firestore db/UpdateFaculty'
import Login from './Firebase Auth/Login'
import Signup from './Firebase Auth/Signup'
  const router = createBrowserRouter([

    {
      path:"/",
      element:<Signup/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    
    {
      path:"dasboard",
      element:<Dasboard/>,
    children:[
      {
        path:"studentlist",
        element:<Studentlist/>
      },
      {
        path:"addstudent",
        element:<AddStudent/>
      },
      {
        path:"updatestudent",
        element:<UpdateStudent/>
      },
      {
        path:"addfaculty",
        element:<AddFaculty/>
      },
      {
        path:"facultylist",
        element:<FacultyList/>
      },
      {
        path:"updatefaculty",
        element:<UpdateFaculty/>
      },
      {
        path:"*",
        element:<h1>404 Not Found</h1>
      }
    ]
    }
      
    ]
  )

 
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <RouterProvider router={router}/>
      
    </div>
  )
}

export default App
