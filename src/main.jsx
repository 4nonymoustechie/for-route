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
import Error from './components/Error'

  const data = {
            surname: "Adeola",
            othernames: "Ade",
            sex: "female",
            dos: "Alamin is still closing his eyes",
            
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
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
