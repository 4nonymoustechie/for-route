import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider

} from "react-router-dom"; 
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Dashboard from './components/Dashboard/Dashboard'
import Users from './components/Dashboard/Users'
import Project from './components/Dashboard/Project'
import Events from './components/Dashboard/Events'
import Preferences from './components/Dashboard/Preferences';
import Feedbacks from './components/Dashboard/Feedbacks';
import Suggestions from './components/Dashboard/Suggestions';
import Error from './components/Error'



  const data = {
            surname: [ "4nonymoustechie"," ","Busary05"," ",'Busary06'," ",'Code Ninja'," ",'Frank d Developer']  ,
            sex: "female",
            dos: "Alamin is still closing his eyes",
            
  }

  const listed = {
    projects : ["Form ",'Styling ','Bootstrap ','Meristem ', 'Branching ','Strings ','Arrays ','funtions ','React-App '],
    addition : ['projects'],
  } 

  const forTable ={
    eventHeader : ['Date ','Eventname ','Event Description','Location','Time'],
      content: ['30/11/2023','Tech Seminar','Business','Maryland','10:00 am'],            
  }


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <Error />,
  },
  {
    path: "/dashboard",
    element: <Dashboard user={data}/>,
    errorElement: <Error />,
  },
  {
    path: "/dashboard/users",
    element: <Users user={data}/>,
    errorElement: <Error />,
  },
  {
    path: "/dashboard/users/project",
    element: <Project docs={listed }/>,
    errorElement: <Error />,
  },
  {
    path: "/dashboard/users/project/events",
    element: <Events evnt={forTable}/>,
    errorElement: <Error />,
  },
  {
  path: "/dashboard/users/project/events/preferances",
  element: <Preferences />,
  errorElement: <Error />,
},
{
  path: "/dashboard/users/project/events/preferances/feedbacks",
  element: <Feedbacks />,
  errorElement: <Error />,
},
{
  path: "/dashboard/users/project/events/preferances/feedbacks/suggestions",
  element: <Suggestions/>,
  errorElement: <Error />,
},  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
