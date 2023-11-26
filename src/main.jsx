import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider

} from "react-router-dom"; 
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Dashboard from './components/Dashboard/Dashboard.jsx'
//import Sidebar from './components/Dashboard/components/Sidebar.jsx'
import Users from './components/Dashboard/Users.jsx'
import Project from './components/Dashboard/Project.jsx'
import Error from './components/Error'
import Events from './components/Dashboard/Events.jsx';
import Preferances from './components/Dashboard/Preferences.jsx';
import Feedbacks from './components/Dashboard/Feedbacks.jsx';
import Suggestions from './components/Dashboard/Suggestions.jsx';

  const data = {
            surname: "4nonymous",
            othernames: "techie",
            sex: "female",
            dos: "Alamin is still closing his eyes",
            userN : ['4nonymoustechie','Muafaq','Code Ninja','code knight','Adeola','Abdulraz','Muktar01k']
            
  }

  const docs = {
    projects : ['Form ','Web ','Bootstrap ','Meristem ','Js ','Btc ','Exchange ','React-App '],
    input : 'Project',
    evntDescription : ['Date ','Event Name ','Event Description ' ,'Location '],
    evntDetails : ['30/12/23','Developer-Meetout','Educational','Maryland'],
    
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
    element: <Project progs={docs}/>,
    errorElement: <Error />,
  },
  {
  path: "/dashboard/users/project/events",
  element: <Events progs={docs}/>,
  errorElement: <Error />,
},
{
  path: "/dashboard/users/project/events/preferances",
  element: <Preferances user={data}/>,
  errorElement: <Error />,
},
{
path: "/dashboard/users/project/events/preferances/feedbacks",
element: <Feedbacks />,
errorElement: <Error />,
},
{
path: "/dashboard/users/project/events/preferances/feedbacks/suggestions",
element: <Suggestions />,
errorElement: <Error />,
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
