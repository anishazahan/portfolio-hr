import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Contact from './pages/Contact/Contact.jsx'
import CaseStudies from './pages/CaseStudies/CaseStudies.jsx'
import Tools from './pages/Tools/Tools.jsx'
import SuccessStories from './pages/SuccessStories/SuccessStories.jsx'
import Blog from './pages/Blog/Blog.jsx'
import BlogDetails from './pages/Blog/Components/BlogDetails.jsx'
import NotFound from './shared/NotFoundPage/NotFound.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement: <NotFound />,
    children:[
     
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/case-studies',
        element: <CaseStudies></CaseStudies>
      },
      {
        path:'/tools',
        element: <Tools></Tools>
      },
      {
        path:'/success-stories',
        element: <SuccessStories></SuccessStories>
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      },
      {
        path:'/blog/:id',
        element: <BlogDetails></BlogDetails>
      },
     
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
