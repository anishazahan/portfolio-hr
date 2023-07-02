import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Contact from './pages/Contact/Contact.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
     
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      },
     
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
