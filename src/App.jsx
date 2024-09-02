 import React from 'react'
 import "./App.css";
 import { ThemeProvider } from "@/components/theme-provider"

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/app-layout'
import LandingPage from './pages/landing'
import Onboarding from './pages/onboarding'
import JobListing from './pages/job-listing'
import JobPage from './pages/job'
import SavedJobs from './pages/saved-job'
import MyJobs from './pages/my-jobs'
 
 const router= createBrowserRouter([
  {
    element:<AppLayout/>,// this all i have to setup all of our routes
    children:[
      {
      path:'/',
element:<LandingPage/>
      },
      // {
      //   path:'/onboarding',
      //   element:<Onboarding/>
      // },
      {
        path:'/onboarding',
        element:<Onboarding/>
      },
      {
        path:'/jobs',
        element:<JobListing/>
      },
      {
        path:'/job/:id',
        element:<JobPage/>
      },
      {
        path:'/saved-job',
        element:<SavedJobs/>
      }, 
        {
        path:'/my-jobs',
        element:<MyJobs/>
      },
    ]
  }
 ])
 function App  ()  {
   return (
    
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
         <RouterProvider router={router}/>
    </ThemeProvider>
   )
 }
 
 export default App 